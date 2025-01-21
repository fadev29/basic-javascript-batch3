/** promise : object yang mewakili hasil dari operasi async
 *
 */

function getDataFromServer() {
  return new Promise(function (resolve, reject) {
    let data = [1, 2, 3, 4];
    if (data) {
      resolve(data);
    } else {
      reject("Data kga ada");
    }
  });
}

console.log(getDataFromServer());

getDataFromServer()
  //  untuk menangani hasil jika promise terpenuhi/data berhasil diambil
  //  result : funcation yang eksekusi nya dengan nilai yang dikasi dari resolve ketika promise berhasil
  .then((result) => {
    console.log("get data :", result);
  })
  .catch((err) => {
    // catch buat nampilin error ketika promise gagal ngambil data
    console.log("gagal : ", err);
  });

console.log("=== PARAREL PROMISE ===");

const getData = () => {
  return new Promise((resolve, reject) => {
    resolve("data ke 1");
  });
};
// data pertama
function getSecondData() {
  return new Promise((resolve, reject) => {
    if (data) {
      resolve(data);
    } else {
      reject("data tidak ditemukan");
    }
  });
}
// data kedua

// ambil semua data sekaligus
function getAllData() {
  //  promise.all : untuk menjalankan pemangilan beberapa
  return Promise.all([getData(), getSecondData()]);
}

getAllData()
  .then((result) => {
    console.log("all data :", result); // result jika semua data berhasil di panggil
  })
  .catch((err) => {
    console.log(err); // error kalo ada salah satu ajah yang error(error satu error semua)
  });
