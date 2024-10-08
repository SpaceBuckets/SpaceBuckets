const matter = require("gray-matter");
const sizeOf = require("image-size");
const glob = require("glob");
const sortArray = require("sort-array");
const fs = require("fs");
var md = require("markdown-it")({ html: true, xhtmlOut: true });

function cartesian(...n) {
  var r = [],
    t = n.length - 1;
  return (
    (function a(e, u) {
      for (var c = 0, h = n[u].length; c < h; c++) {
        var i = e.slice(0);
        i.push(n[u][c]), u == t ? r.push(i) : a(i, u + 1);
      }
    })([], 0),
    r
  );
}

const getBuilds = () => {
  try {
    const data = require("../json/u.json");
    return data;
  } catch (t) {
    console.log(t);
    return [];
  }
};
function searchpo(e, r) {
  return e.filter((e) => r.every((r) => e.g.split(",").some((e) => e === r)));
}

const containerOptions = ["bucket", "brute", "tote", "barrel", "bin"];
const lightingOptions = ["cfl", "ufo", "ledbulb", "ledcustom"];
const airflowOptions = ["pcfan", "linefan", "inlinefan"];

async function filterBuilds(num, page, sort, tags) {
  var posts = await getBuilds();

  //Sort
  if (sort === "asc" || "desc") {
    sortArray(posts, { by: "d", order: sort });
  }
  if (sort === "pop") {
    posts.forEach((post) => {
      post.v = Number(post.v);
    });
    sortArray(posts, { by: "v", order: "desc" });
  }
  if (sort === "rand") {
    posts = shuffle(posts);
  }

  //Filter
  if (tags) {
    var arrTags = tags.split(",");
    posts = searchpo(posts, arrTags);
  }

  //Paginate
  if (page > 0) {
    posts = posts.slice(num * (page - 1), num * page);
  }

  return posts;
}

async function createDb(src) {
  //Get post names
  var folders = glob.sync("*", { cwd: `static/${src}/` });
  var posts = [];
  //Main post loop
  folders.forEach((singleFolder) => {
    const documentes = glob.sync("*.md", {
      cwd: `static/${src}/${singleFolder}`,
    });
    let post = [];

    //Parse Markdown
    var contents = matter(
      fs
        .readFileSync(`static/${src}/${singleFolder}/${documentes}`, "utf8")
        .toString()
    );
    post = contents.data;
    if (src === "docs") {
      post.c = md.render(post.c);
    }
    posts.push(post);
  });

  //Get Image references
  posts.forEach((post) => {
    const srcImages = glob
      .sync("*.jpg", { cwd: `static/${src}/${post.s}` })
      .filter((e) => e !== "cover.jpg");
    var postImages = [];

    srcImages.forEach((singleImage) => {
      var dimensions = sizeOf(`static/${src}/${post.s}/${singleImage}`);
      var redimensions = ((dimensions.height / dimensions.width) * 100).toFixed(
        1
      );
      redimensions = redimensions.replace(".0", "");

      postImages.push({ h: singleImage, s: redimensions });
    });
    post.i = postImages;
  });

  fs.writeFileSync(`./json/${src}.json`, JSON.stringify(posts));
  console.log(`♥ ${src}.json generated`);
}

async function createGallery(src) {
  var folders = glob.sync("*", { cwd: `static/${src}/` });
  var posts = [];

  postRoutes = [];
  folders.forEach((singleFolder) => {
    const documentes = glob.sync("*.md", {
      cwd: `static/${src}/${singleFolder}`,
    });
    let post = {};
    var contents = matter(
      fs
        .readFileSync(`static/${src}/${singleFolder}/${documentes}`, "utf8")
        .toString()
    );
    post.t = contents.data.t;
    post.s = contents.data.s;
    post.g = contents.data.g;
    post.v = contents.data.v;
    post.z = contents.data.z.split(",").length;
    posts.push(post);
  });

  fs.writeFileSync(`./json/${src}-gallery.json`, JSON.stringify(posts));
  console.log(`♥ ${src}-gallery.json generated`);
}

async function createRoutes(src) {
  var folders = glob.sync("*", { cwd: `static/${src}/` });
  var postRoutes = [];

  folders.forEach((singleFolder) => {
    const documentes = glob.sync("*.md", {
      cwd: `static/${src}/${singleFolder}`,
    });
    var contents = matter(
      fs
        .readFileSync(`static/${src}/${singleFolder}/${documentes}`, "utf8")
        .toString()
    );
    var post = `/${src}/${contents.data.s}`;

    postRoutes.push(post);
  });

  fs.writeFileSync(`./json/${src}-routes.json`, JSON.stringify(postRoutes));

  console.log(`♥ ${src}-routes.json generated`);
}

async function createCats() {
  var containerCombi = cartesian(containerOptions);
  var lightingCombi = cartesian(lightingOptions);
  var airflowCombi = cartesian(airflowOptions);

  var containerLighting = cartesian(containerOptions, lightingOptions);
  var containerAirflow = cartesian(containerOptions, airflowOptions);
  var lightingAirflow = cartesian(lightingOptions, airflowOptions);

  var megaCombinations = cartesian(
    containerOptions,
    lightingOptions,
    airflowOptions
  );
  var allCombinations = [];
  allCombinations = allCombinations.concat(
    containerCombi,
    lightingCombi,
    airflowCombi,
    containerLighting,
    containerAirflow,
    lightingAirflow,
    megaCombinations
  );

  var processCombinations = [];
  processCombinations.push("/gallery");

  for (let i = 0; i < allCombinations.length; i++) {
    var megaposts = await filterBuilds(
      -1,
      0,
      "pop",
      allCombinations[i].join(",")
    );
    var megapostLength = Math.ceil(megaposts.length / 36);

    for (let e = 0; e < megapostLength; e++) {
      processCombinations.push(
        "/gallery/" + parseInt(e + 1) + "/" + allCombinations[i].join("-")
      );
    }
  }

  var alreposts = await filterBuilds(-1, 0, "pop");
  var alrepostsLength = Math.ceil(alreposts.length / 36);
  for (let f = 0; f < alrepostsLength; f++) {
    processCombinations.push("/gallery/" + parseInt(f + 1));
  }

  fs.writeFileSync(
    `./json/categories.json`,
    JSON.stringify(processCombinations)
  );
  console.log(`♥ categories.json generated`);
}

createDb("docs");
createDb("u");
createGallery("u");
createRoutes("docs");
createRoutes("u");
createCats();
