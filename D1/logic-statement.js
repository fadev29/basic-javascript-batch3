//  SWITCH CASE : kondisi untuk menampilkan output berdasarkan nilai tertentu

let remoteButton = 1;

switch (remoteButton) {
  case 1:
    console.log("Trun on");
    break;
  case 2:
    console.log("Trun off");
    break;
  default:
    console.log("Input tidak valid");
    break;
}

//  IF STATEMENT : if(kondisi) {output}

let nilai = 100;
if (nilai == 100) {
  console.log("selamat anda mendapatlkan nilai sempurna");
}

// IF ELSE STATEMENT :  if(kondisi) {output} else {output}

if (nilai == 100) {
  console.log("selamat anda lulus!");
} else {
  console.log("anda tidak lulus");
}

// IF ELSE IF STATEMENT : if(kondisi) {output} else if (kondisi) {output} else {output}

let pendaftaran = "close";
let kuota = 10;

if (pendaftaran == "open") {
  console.log("pendaftaran sukses");
} else if (kuota <= 10) {
  console.log("kouta masih tersedia");
} else {
  console.log("anda tidak bisa mendaftar");
}

// nested if(if bersarang)  : if(kondisi) {if(kodisi) {output} } else {output}
let nilaiUas = 92;
if (nilaiUas >= 70) {
  if (nilaiUas >= 90) {
    console.log("Nilai A");
  } else {
    console.log("Nilai B");
  }
} else {
  console.log("nilai c");
}

// ternary operator : kondisi ? output true : output false
let hasil = nilaiUas >= 70 ? "lulus" : "tidak lulus";
console.log(hasil);

let result =
  nilaiUas >= 90 ? "nilai a" : nilaiUas >= 80 ? "nilai b" : "nilai c";
console.log(result);
