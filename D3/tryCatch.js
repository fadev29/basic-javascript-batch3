//  tryCatch : buat error hadling

function perjumlahan(a, b) {
  try {
    if (a === 0 || b === 0) {
      throw "Nilai tidak valid";
    }
    return a + b;
  } catch (error) {
    console.log(error);
  }
}
console.log("ok :", perjumlahan(10, 2));
console.log("error :"), perjumlahan(10, 0);
