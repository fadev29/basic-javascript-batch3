/** secara default bahasa pemograman dieksekusi secara berurut(SYNCHRONOUS) dari a-z dari 1-100
 * ASYNCHRONOUS : teknik eksekusi kode secara paralel tampa harus menunggu ekse kusi program yang lain selesai
 * artinya funsi yang dibuat menggunakan teknik asynchronous akan di jalankan bersaaman dengan kode lainnya
 *
 */

console.log("=== frist bang ==="); // ini kode yang di eksekusi

function printLog() {
    // ini fungsi yang harusnya dijalankan kedua
  console.log("=== kedua ===");
}
setTimeout(printLog, 3000); // tapi funsi inisengaja ditunda eksekusinya selama 3 detik
console.log("=== ketiga ===");// ini eksekusi ketiga
setTimeout(myFuncation, 3000);// nunda eksekusi funsi selama 3 detik
function myFuncation() {
  console.log("I love You !!");
}
