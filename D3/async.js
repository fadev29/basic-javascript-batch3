//  funsi biasa

function getDataFromServer() {
  // promise : sebuah object yang mewakili hasil dari operasi asynchronous
  return new Promise(function (resolve, reject) {
    // let data = { id: 1, name: "danu", job: "fullstuck" };
    if (data) {
      resolve(data); // resolve : buat mengembalikan data yang di atngkep
    } else {
      reject("data kaga ada"); // reject ngembalikan error jika data gagal diambil
    }
  });
}

// async :

async function fetchData() {
  //  blpk tryCacth : error hadling untuk menagani error jika data gagal diambil
  try {
    // await : kata kunci dalam async buat nunggu hasil dari sebuah promise
    const getData = await getDataFromServer();
    console.log("data yang diterima :", getData);
  } catch (error) {
    // parameter error : error yang akan ditampilkan jika terjadi kesalahan
    console.log("terjadi kesalahan saat mengambil data", error);
  }
}
fetchData();

//  contoh lain

async function fetchUserData(userId) {
  try {
    console.log("ceritanya lagi ngambil data api");
    const response = await fetch(
      // tampungan data yang di ambil di var response
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    //  error handling untuk mengecek apakah response sudah sesuai kode (200 - 500++)
    // ngecek apaka statusnya ok/success kode 200
    if (!response.ok) {
      throw new Error(
        `HTTP error! status : ${response.status} ${response.statusText}`
        // http//localhost:8080/api/v1/users/${id}
      );
    }

    //  konversi responsenya ke format JSON
    let user = await response.json();
    // tampilkan data nya
    console.log("data user by id : ", user);
  } catch (error) {
    // tamplin erro nya :
    console.log("Erorr : ", error);
    // throw error;
  }
}
fetchUserData(10);
