// modul untuk input termina

const r = require("readline");
//  buat interface/tampilan untuk input ke terminal
const inputNama = r.createInterface({
  input: process.stdin, // untuk ngambil input dari keybord user
  output: process.stdout, // untuk nampilin output ke terminal
});
// paggil inputanya
//  question : untuk nampilin p[ertanyaan ke user
// inputNama.question("masukan nama : ", (nama) => {
//   console.log(`halo ${nama}`); // nampilin output nya
//   inputNama.close(); // menutup input
// });

inputNama.question("masukan nama : ", (nama) => {
  inputNama.question("masukan umur : ", (umur) => {
    console.log(`halo ${nama} dan berumur ${umur}`); // nampilin output nya
    inputNama.close(); // menutup input
  });
});
