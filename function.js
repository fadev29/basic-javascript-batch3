// Function : blok code  javascpirt yang mengerjakan perintah/fungsi tertentu
//  rumus funsi biasa : function namafunction (parameter/non-params) {}
//  arrow function : conts namaFunction = (params/no) {}

// contoh fungsi tampa parameter

function printName() {
  console.log("Daniu");
}

printName(); // <= fungsi dipanggil/dijalani

//contoh fungsi dengan parameter

//parameter : sebutan variabel yang di devinisikan di dalam fungsi
/*  funsi biasa nya punya retrun buat mengembalikan nilai dari hasil  fungsi tersebut*/

function perjumlahan(a, b) {
  let jumlah = a + b;
  return jumlah;
}

console.log(perjumlahan(10, 2));

// retrun juga bisa memberhentikan eksekusi sebuah program lebih awal jika di perlukan

function cekAngkaPositif(angka) {
  if (angka < 0) {
    return "angka negatif";
  }
  return "Angka positif";
}

console.log(cekAngkaPositif(5));
console.log(cekAngkaPositif(-2));

//  Arrow function : adalah bentuk lain dari deklarasi fungsi

const kaliDua = (a) => {
  return a * 2;
};
console.log(kaliDua(5));
