//  Equal (sama dengan)

let equal = 100;
console.log("=== Equal operator ===");
console.log(equal == 100); // true
console.log(equal == 90); // false

// not Equal (tidak sama dengan) !=

let sifat = "rajin";
console.log("=== Not Eqqual operator");
console.log(sifat != "malas"); // true
console.log(sifat != "bader"); // true

// Strict equal

let strictEqual = 10;
console.log("=== strict equal operator");
console.log(strictEqual == "10"); // true
console.log(strictEqual === "10"); // false
console.log(strictEqual === 10); // true

// Strict not equal

let strictNotEqual = 10;
console.log("=== strict equal operator");
console.log(strictNotEqual != "10"); // false
console.log(strictNotEqual !== "10"); // true
console.log(strictNotEqual !== 10); // false

// kurang dari / lebih dari

let angka = 17;
console.log("=== kurang/lebih dari operator ===");
console.log(angka < 20); // true
console.log(angka > 17); // false
console.log(angka >= 17); // true
console.log(angka <= 17); //true

// operator kondisional OR (opertor yang menghasilkan nilai true jika ada salah satu operator true)
console.log("=== OR ===");
console.log(true || true); // true
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false || false); // true

// operator kondisional AND && (menghasilkan nilai false jika ada salah satu operasi false)

console.log("=== AND ===");
console.log(true && true); // true
console.log(false && true); // false
console.log(true && false); // false
console.log(false && false && false && true); // false

let fristName = null;
let lastName = "wati";
let noJob = true;
let fullName = age == 20 && noJob;
console.log(fullName);

let user = {
  name: "fachri",
  age: 25,
  address: {
    city: "Tangsel",
    country: "indonesia",
  },
};

let country = user && user.address && user.address.country;
console.log("country : ", country);

// untuk mencari negara user
function findUserCountry(user) {
  let country = user && user.address && user.address.country;
  return country || "data tidak ditemukan";
}
console.log(findUserCountry);
