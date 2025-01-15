// array manipulation
const employee = [
  {
    id: 1,
    nama: "Danu",
    age: 25,
    jobDesk: [{ title: "frontend", salary: 12000000 }],
    hobby: ["membaca", "menulis"],
  },
  {
    id: 2,
    nama: "Dani",
    age: 26,
    jobDesk: [{ title: "frontend", salary: 20000000 }],
    hobby: ["membaca", "menulis"],
  },
  {
    id: 3,
    nama: "Dina",
    age: 27,
    jobDesk: [{ title: "backend", salary: 30000000 }],
    hobby: ["membaca"],
  },
  {
    id: 4,
    nama: "Deni",
    age: 26,
    jobDesk: [{ title: "backend", salary: 40000000 }],
    hobby: ["membaca"],
  },
  {
    id: 5,
    nama: "Dian",
    age: 27,
    jobDesk: [{ title: "frontend", salary: 80000000 }],
    hobby: ["membaca"],
  },
];
/* soal 1 :
cari karyawan yang punya hobi 'menulis' dan usia nya dia atas 25 tahun */

const dataHobbyMenulis = employee.find((item) => {
  return item.hobby.find((data) => data === "menulis");
});
console.log(dataHobbyMenulis);
/** soal 2 :
 * Tampilkan data karyawan yang bekerja sebagai 'backend' dan punya gaji lebih dari 3 juta */
const dataGajiBackend = employee
  .filter((k) => k.jobDesk[0].title === "backend")
  .filter((k) => k.jobDesk[0].salary > 30000000);
console.log(dataGajiBackend);

/** soal 3 :
 *tampilkan nama karyawan yang punya satu hobi pake  filter, map, lenght
 */
const hobby = employee.filter((k) => k.hobby.length === 1).map((k) => k.nama);
console.log("soal nomor  3 : ", hobby);
/** soal 4 :
 * cari nama karyawan yang posisinya 'frontend' dengan gaji tertinggi, lalu retrun nama nya pakai filter, some, reduce, find
 */

const frontendKaryawan = employee
  .filter((k) => k.jobDesk[0].title === "frontend")
  .reduce((a, b) => {
    return a.jobDesk[0].salary > b.jobDesk[0].salary ? a : b;
  });
console.log(frontendKaryawan);

// Math
/** soal 5 :
 * cari lah nilai tertinggi Math object
 */
let siswa1 = 49;
let siswa2 = 70;
let siswa3 = 60;

console.log("Nilai teringgi siswa : ", Math.max(siswa1, siswa2, siswa3));

/** soal 6 :
 * cari gaji tertinggi dan terendah dari data employee menggunakan math
 */
console.log(
  "gaji tertinggi : ",
  Math.max(...employee.map((k) => k.jobDesk[0].salary))
);
console.log(
  "gaji terendah : ",
  Math.min(...employee.map((k) => k.jobDesk[0].salary))
);
let gajiTertinggi = Math.max(...employee.map((k) => k.jobDesk[0].salary));
let gajiTerendah = Math.min(...employee.map((k) => k.jobDesk[0].salary));
let selisi = gajiTertinggi - gajiTerendah;
console.log("selisi gaji : ", Math.floor(selisi));

/** soal 7 :
 * hitung total gaji semua karyawan setelah di potong pajak 12% pake reduce dan math.floor
 */
const totalGaji = employee.reduce((a, b) => {
  //   let tampung = a.jobDesk[0].salary;
  let tampung2 = b.jobDesk[0].salary;
  return a + tampung2;
}, 0);
const diKurang12 = totalGaji * 0.12;
console.log("total gaji potongan 12% :", Math.floor(diKurang12));

/** soal 8 :
 * tampilkan semua nama karyawan yang memiliki hobi terbayak pakek map,math.max, filter& length
 * output : [danudani]
 * biar rapih pakek join(",") => [danu, dani]
 */
const maxHobby = Math.max(...employee.map((data) => data.hobby.length));

const maxKaryawanHobby = employee
  .filter((data) => data.hobby.length === maxHobby)
  .map((item) => item.nama);

console.log("hobi terbanyak :", maxKaryawanHobby);
