const matter = require('gray-matter');
const sizeOf = require('image-size');
const glob = require('glob')
const fs = require('fs');
const gm = require('gm');

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

      gm(`static/${src}/${post}/${singleImage}`)
        .strip() // Removes any profiles or comments. Work with pure data
        .interlace('Line') // Line interlacing creates a progressive build up
        .quality(80) // Quality is for you to decide
        .resize(1000) // Quality is for you to decide
        .write(`static/${src}/${post}/${singleImage}`, (err) => {
          if(err) throw Error(err);
          console.log('Converted' + `static/${src}/${post}/${singleImage}`);
        });
    });
  });  

}

renameImg("builds");
