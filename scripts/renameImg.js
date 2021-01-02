const matter = require('gray-matter');
const sizeOf = require('image-size');
const glob = require('glob')
const fs = require('fs');
const getColors = require('get-image-colors')

const optionsC = {
  count: 1,
}

async function renameImg(src) {
  //Get post names
  var folders = glob.sync('*', { cwd: `static/${src}/` })
  var posts = [];
  //Main post loop
  folders.forEach(singleFolder => {
    const documentes = glob.sync('*.md', {cwd: `static/${src}/${singleFolder}`})
    let post = [];

    //Parse Markdown
    var contents = matter(fs.readFileSync(`static/${src}/${singleFolder}/${documentes}`, 'utf8').toString());
    post = contents.data.s
    posts.push(post);
  });

  //Get Image references
    posts.forEach(post => {
    const srcImages = glob.sync('*.jpg', { cwd: `static/${src}/${post}` }).filter(e => e !== 'cover.jpg');  

    srcImages.forEach(singleImage => {
      getColors(`static/${src}/${post}/${singleImage}`, optionsC).then(colors => {
        if (`static/${src}/${post}/${singleImage}` === `static/${src}/${post}/${colors[0].hex().substring(1)}.jpg`) {
        } else {
          console.log(singleImage)
          fs.renameSync(`static/${src}/${post}/${singleImage}`, `static/${src}/${post}/${colors[0].hex().substring(1)}.jpg`);
        }
      })
    });
  });  

}

renameImg("builds");
