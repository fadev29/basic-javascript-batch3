/** di node.js, ada modul yang berfunsi untuk file handling
 * salah satu nya modul fs(file system) : untuk membuat/baca file
 */

// import modul nya

const { error } = require("console");
const fs = require("fs");

//  CREATE : menulis file menggunakan .writeFile('filePath', "isi file", encoding, return)
fs.writeFile(
  "./textFile.tex",
  "halo, aku adalah seorang junior programmer",
  "utf-8",
  (error) => {
    if (error) {
      console.log(error);
      return error;
    }
    console.log("File berhasil disimpan");
  }
);

// .appendFile('filePath', "isi file", encoding, return)
let dataDariApi = "yang ganteng";
fs.appendFile("./textFile.tex", dataDariApi, "utf-8", (error) => {
  if (error) {
    console.log(error);
    return error;
  }
  console.log("File berhasil di edit");
});

//  redFile('filePath', "isi file", encoding, return) : buat ngebaca file

fs.readFile("./textFile.tex", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
    return error;
  }
  console.log("data yang di baca :", data);
});

//  unlink("filePath", return) : buat ngahapus file
fs.unlink("./delete.txt", (error) => {
  if (error) {
    console.log(error);
    return error;
  }
  console.log("data diHapus");
});
