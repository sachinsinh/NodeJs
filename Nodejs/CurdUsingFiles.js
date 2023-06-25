const fs = require("fs");
const path = require("path");
const dirpath = path.join(__dirname, "curd");
const pathname = `${dirpath}/apple1.txt`;

fs.writeFileSync(pathname, "This Is My Apple"); //Create File and input data

// fs.readFile(pathname, "utf8", (err, item) => {
//   //Read File Content
//   console.log(item);
// });

// fs.appendFile(pathname, " And You Can Eat", (err) => {
//   //update The Content of File
//   if (!err) console.log("File Is Updated");
// });

// fs.rename(pathname, `${dirpath}/apple9.txt`, (err) => {
//   //File Rename
//   if (!err) console.log("File Name Updated");
// });

// fs.unlinkSync(`${dirpath}/apple9.txt`, (err) => {
//   //Delete File
//   if (!err) console.log("File Deleted Sucess");
// });
