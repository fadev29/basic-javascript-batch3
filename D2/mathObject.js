//  Math object : metode untuk operasi matimatika

let angkaAcak = Math.random();
console.log(angkaAcak);
console.log(Math.floor(Math.random() * (10 - 1 + 1) + 1)); //menamplkan angka acak dari 1- 10
// floor untuk mengubah angka ke bawah
console.log("Math floor : ", Math.floor(3.65));

//  Math.ceil buat ngebuletin angka keatas
console.log("Macth ceil :", Math.ceil(36.5));

// Math round buat ngebuletin angaka terdekat
console.log("Macht round :", Math.round(3.5));

// Math.max buat nyari angka tertinggi
console.log("Math max : ", Math.max(12, 23, 54, 2, 65, 43));

// Math.min buat mencari angka terkecil
console.log("Math main : ", Math.min(12, 23, 54, 2, 65, 43));

// Math.sqrt buat ngitung akar kuadrat
console.log("Math sqrt :", Math.sqrt(16));

// Math.pow buat menghitung pangkat
console.log("Math pow : ", Math.pow(2, 3));

//  Math.PI buat nilai pi
console.log("Math PI :", Math.PI);

let luasLingKaran = Math.PI * Math.pow(5, 2);
console.log(Math.floor(luasLingKaran));
