/// ONLY FOR TESTING PURPOSE

let filename = "index.mp4";
let path =
  "E:[FreeCourseSite.com] Udemy - The Complete Web Developer in 2020 Zero to Mastery";

let newstring = path.concat(`\\${filename}`);
console.log(newstring);

const path = require("path");
const fs = require("fs");

fs.copyFile(
  "E:\\React-mosh\\[FreeCoursesOnline.Me] Code With Mosh - Mastering React\\1. Getting Started",
  "E:\\playlist",
  (err) => {
    if (err) throw err;
    console.log("Success");
  }
);
