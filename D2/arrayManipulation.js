// penjelasan array secara detail

let myArray = [1, 2, 3, 4, 5];

// cara akses data dalam array bedasarkan indexnya

let nilaiPertama = myArray[0];
let nilaiKedua = myArray[1];
// dst

console.log("nilai pertama array :", nilaiPertama);
console.log(`nilai kedua array :, ${nilaiKedua}`);

// mengubah nilai array pada indexs tertentu :

myArray[2] = 6;
console.log(`array setelah diubah : ${myArray}`);

//  array Method : metode yang digunakan untuk memanipulasi array

// method push : method array untuk menambahkan data ke baris akhir pada array
myArray.push(7); // menambah nilai (7) di garis akhir pada data array
console.log("push : ", myArray);

// shift : method array untuk menghapus data pertama pada array
myArray.shift();
console.log("shift : ", myArray);

//  unshift : method array untuk menambahkan data pada array di awal

myArray.unshift(1, 2);
console.log("unshift : ", myArray);

//  method pop : method array untuk menghapus data akhir pada array

let nilaiTerkhir = myArray.pop();
console.log(`pop : ${nilaiTerkhir}`);
console.log(`popped myArray ${myArray}`);

// splice method array untuk menyisipkan data kepada array
myArray.splice(2, 0, 3);
console.log("splice : ", myArray);

// slice : method array untuk memotong(cut) data dalam array
myArray.slice(4, 1);
console.log("slice : ", myArray);

//  sort : method array untuk mengurutkan data(ascending), dalam array
myArray.sort();
console.log("sort : ", myArray);

// reverse : method array untuk mengurutkan data (descending) dalam array
myArray.reverse();
console.log("reverse : ", myArray);

// indexof : method array untuk mencari INDEX data dalam array

let nilaCari = 3;
let indexNilai = myArray.indexOf(nilaCari);

if (indexNilai === nilaCari) {
  console.log(`nilai ${nilaCari} ditemukan pada index ${indexNilai}`);
} else {
  console.log(`nilai ${nilaCari} tidak ditemukan dalam array`);
}

// concat : method array untuk untuk menggabukan 2 array menjadi satu
let arrayLain = [7, 8, 9];
let gabunganArray = myArray.concat(arrayLain);

console.log("concat : ", gabunganArray);

// forEach : method array untuk melakukan iterasi/perulangan pada array
myArray.forEach((i) => {
  console.log("foreach : ", i);
});

//  toString : method array untuk mengubah data array menjadi string
console.log(" toString : ", myArray.toString());

// tolocaleString : method array untuk mengubah array menjadi string dengan format lokal
const price = [1000, 2000, 3000];
const arrayTolocaleString = price.toLocaleString({
  style: "curreny",
  curreny: "IDR",
});
console.log("tolocaleString :", arrayTolocaleString);
//reduce : method array untuk mengakumulasasikan nilai array ke dalam satu hasil akhir (mentotalkan data array)
const sum = myArray.reduce((accumulator, currentValue) => {
  console.log(accumulator);
  console.log(currentValue);
  return accumulator + currentValue;
}, 0);
console.log("reduce : ", sum);

// manipulasi data array of object

const dataSiswa = [
  {
    id: 1,
    name: "Danu",
    age: 25,
    hobby: ["membaca", "menulis"],
  },
  {
    id: 2,
    name: "Dani",
    age: 26,
    hobby: ["membaca", "menggambar"],
  },
  {
    id: 3,
    name: "Dina",
    age: 27,
    hobby: ["memasak", "menangkis"],
  },
  {
    id: 4,
    name: "Deni",
    age: 28,
    hobby: ["gaming", "menyanyi"],
  },
  {
    id: 5,
    name: "Doni",
    age: 25,
    hobby: ["gaming", "membaca"],
  },
];

// contoh forEach :
const forEachDataSiswa = dataSiswa.forEach((data) => {
  console.log("forEach dataSiswa : ", data.name, data.age <= 26);
});

//  map : method array untuk mengubah setiap elemen array menjadi nilai baru atau maaping data tertentu
const getNameFromDataSiswa = dataSiswa.map((item) => {
  return item.name;
});
console.log("maping data nama :", getNameFromDataSiswa);

// fillter : method array untuk mengfilter data array bedasarkan nilai dan kondisi tertentu

const filterDataSiswa = dataSiswa.filter((item) => {
  return item.hobby.find((data) => data === "membaca");
});
console.log("filter :", filterDataSiswa);

// find : method array untuk mecari data dalam array
const findDataSiswa = dataSiswa.find((data) => {
  return data.name === "Dina";
});
console.log("find :", filterDataSiswa);

// length : method array buat menghitung panjang/jumlah data dalam array
let lengthDataSiswa = dataSiswa.length;
console.log("length :", lengthDataSiswa);

//every : method array untuk mengecek apakah semuah elemen dalam array memenuhi suatu krieteria
const everyDataSiswa = dataSiswa.every((item) => {
  return item.age === 25;
});
console.log("every : ", everyDataSiswa);
