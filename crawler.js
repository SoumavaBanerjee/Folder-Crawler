/*  firstDirectory: Absolute path of directory from {which} you want to copy.
 *   secondDirectory: Absolute path of the directory {in} which you want to copy.
 *   ext: extension name of the type of file you want to copy.
 *
 */

const Path = require("path");
const FS = require("fs");
let Files = [];

function ThroughDirectory(Directory) {
  FS.readdirSync(Directory).forEach((File) => {
    const Absolute = Path.join(Directory, File);
    if (FS.statSync(Absolute).isDirectory()) return ThroughDirectory(Absolute);
    else return Files.push(Absolute);
  });
}

function CopytoDir(firstDirectory, secondDirectory, ext) {
  ThroughDirectory(firstDirectory);
  Files.forEach((file) => {
    let extension = Path.extname(file);
    let filename;
    if (extension !== `.${ext}`) return;
    filename = Path.basename(file).trim();
    console.log(filename);
    // let copyFileDirectory = secondDirectory.concat(`\\${filename}`);
    let copyFileDirectory = secondDirectory;
    FS.copyFile(firstDirectory, copyFileDirectory, (err) => {
      if (err) throw err;
    });
  });
}

CopytoDir(
  "./first/directory",
  "./second/directory",
  "extension(mp4,html,..etc)"
); // just an example
