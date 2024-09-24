import sortArray from "sort-array";

function shuffle(r) {
  for (var f, n, o = r.length; 0 !== o; )
    (n = Math.floor(Math.random() * o)),
      (f = r[(o -= 1)]),
      (r[o] = r[n]),
      (r[n] = f);
  return r;
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
const getGalleryBuilds = async () => {
  try {
    return (await import("~/json/u-gallery.json")).default;
  } catch (t) {
    return console.log(t), [];
  }
};
const getCats = async () => {
  try {
    return (await import("~/json/categories.json")).default;
  } catch (t) {
    return console.log(t), [];
  }
};
const getDocs = async () => {
  try {
    return (await import("~/json/docs.json")).default;
  } catch (t) {
    return console.log(t), [];
  }
};
function searchpo(e, r) {
  return e.filter((e) => r.every((r) => e.g.split(",").some((e) => e === r)));
}

async function filterBuilds(num, page, sort, tags) {
  var posts = await getGalleryBuilds();

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

async function randomize(num) {
  var posts = await getBuilds();
  posts = shuffle(posts);
  posts = posts.slice(0, num);
  return posts;
}

async function singleRandom() {
  var posts = await getBuilds();
  var randNum = 0 + Math.random() * (posts.length - 0);
  return posts[randNum.toFixed()];
}

async function singleRandomDoc() {
  var docs = await getDocs();
  var filtereddocs = docs.filter((doc) => doc.f);
  var randNum = 0 + Math.random() * (filtereddocs.length - 0);
  return filtereddocs[Math.floor(randNum)];
}

async function featuredDocs() {
  var docs = await getDocs();
  var filtereddocs = docs.filter((doc) => doc.f);
  return filtereddocs;
}

async function singlePost(slug) {
  var posts = await getBuilds();
  var single = [];
  posts.forEach((post) => {
    if (post.s === slug) {
      single = post;
    }
  });
  return single;
}

async function singleDoc(slug) {
  var docs = await getDocs();
  var single = [];
  docs.forEach((doc) => {
    if (doc.s === slug) {
      single = doc;
    }
  });
  return single;
}

async function getAuthor(author) {
  var docs = await getBuilds();
  var single = [];
  docs.forEach((doc) => {
    if (doc.a === author) {
      single.push(doc);
    }
  });
  return single;
}

async function getSearch(query) {
  var docs = await getBuilds();
  var single = [];
  docs.forEach((doc) => {
    if (doc.t.toLowerCase().includes(query)) {
      single.push(doc);
    }
  });
  return single;
}

export {
  featuredDocs,
  singleRandomDoc,
  getSearch,
  getAuthor,
  getDocs,
  singleDoc,
  getBuilds,
  getCats,
  filterBuilds,
  singlePost,
  randomize,
  singleRandom,
};
