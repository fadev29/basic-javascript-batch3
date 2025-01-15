// data object

const person = {
  nama: "danu",
  umur: 30,
  pekerjan: "fullstuck developer",
  alamat: {
    jalan: "jl. raya no. 123",
    kota: "Tangerang selatan",
    negara: "Indonesia",
  },
  hobi: ["olaraga", "musik", "membaca"],
};

// cara ngeakses nilai dalam object mengunakan titik .

console.log("nama : ", person.nama);
console.log("kota asal :", person.alamat.kota);

// cara ngeakses data array dalam object

console.log("hobi : ", person.hobi[1]);

// cara mengubah nilai dalam object
person.umur = 25;
console.log(person);

// cara nambahin field baru dalam object
person.isMarried = false;
console.log(person);

// cara menghapus field dalam object

delete person.alamat.jalan;
console.log(person);

// cara akses data object mengunakan destructuring assignment
const { nama, umur, pekerjaan } = person;
console.log(nama);
console.log(umur);
console.log(pekerjaan);

const test = person.toString();
console.log(test); // output : danu, 25, dst


