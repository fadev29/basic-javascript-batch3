//  looping : perulangan agar memeriksa data untuk kondisi tertentu

//  while loop
let startCondition = 1; // nilai awal perulangan
while (startCondition < 5) {
  console.log("while lop ke", startCondition); // output
  startCondition++; // increment : menambah satu nilai straCondtition hingga memenuhi kondisi
}

// for loop
// let i = : kondisi awal perulangan
//  i < 5 :stop condition
// i++ : increment

for (let i = 0; i < 5; i++) {
  console.log("for loop ke", i);
}

// for loop yang lebih simpel
let array = [1, 2, 3, 4, 5];
for (let i of array) {
  console.log("loop ke", i);
}

let hitung = 0;
let i = 0;

while (i < array.length) {
  if (array[i] > 3) {
    hitung++;
  }
  i++;
}

console.log(`jumlah elemen yang lebih besar dari 3 : ${hitung}`);
