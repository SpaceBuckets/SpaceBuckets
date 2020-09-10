const matter = require('gray-matter');
const sizeOf = require('image-size');
const glob = require('glob')
const fs = require('fs');

function createDb(src) {
  //Get post names
  var folders = glob.sync('*', { cwd: `static/${src}/` })
  var posts = [];
  //Main post loop
  folders.forEach(singleFolder => {
    const documentes = glob.sync('*.md', {cwd: `static/${src}/${singleFolder}`})
    let post = [];

    //Parse Markdown
    var contents = matter(fs.readFileSync(`static/${src}/${singleFolder}/${documentes}`, 'utf8').toString());
    post = contents.data
    posts.push(post);
  });

  //Get Image references
  posts.forEach(post => {
    const srcImages = glob.sync('*.jpg', { cwd: `static/${src}/${post.s}` }).filter(e => e !== 'cover.jpg');    
    var postImages = [];
/* 
    srcImages.forEach(singleImage => {
      var dimensions = sizeOf(`static/${src}/${post.s}/${singleImage}`);
      var redimensions = (dimensions.height / dimensions.width * 100).toFixed(1);
      redimensions = redimensions.replace(".0","")

      postImages.push({ 'h': singleImage, 's': redimensions})
    }); */
    post.i = postImages 
  }); 

  fs.writeFileSync(`./store/${src}.json`, JSON.stringify(posts));
  console.log(`♥ ${src}.json generated`)
}

createDb("builds");
createDb("docs")