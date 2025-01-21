/** soal 1 :
 * buatlah perintah untuk membaca file JSON bernama employee.json
 * yang berisi data JSON dan tampilin semua nama nama karyawan
 *
 */
const { error } = require("console");
const fs = require("fs");

const namaKaryawan = fs.readFile("./employee.json", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
    return error;
  }
  const employee = JSON.parse(data);
  employee.forEach((element) => {
    console.log(element.nama);
  });
});

/** soal 2 :
 * buat perintah untuk nambahin minimal 1 JSON kedalam file bernama employee.json
 * readFIle & replace pake wirteFile
 *
 */
let newEmployee = {
  id: 6,
  nama: "Domba",
  age: 25,
  jobDesk: [
    {
      title: "backend",
      salary: 80000000,
    },
  ],
  hobby: ["membaca"],
};
fs.readFile("./employee.json", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
    return error;
  }
  let employee = JSON.parse(data);
  employee.push(newEmployee);
  fs.writeFile(
    "./employee.json",
    JSON.stringify(employee, null, 2),
    "utf-8",
    (error, data) => {
      if (error) {
        console.log(error);
        return error;
      }
      console.log("data berhasil ditambahkan");
    }
  );
});

/**  soal 3 :
 *  buat perintah untuk mencari karyawan yang sesuainya diatas atau smadengan26
 * dan simpan data nya kedalam file baru bernama karyawan_tuwir.json
 * readfile &writefile
 */
fs.readFile("./employee.json", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
    return error;
  }
  try {
    const employeee = JSON.parse(data);
    const karyawan26 = employeee.filter((employeee) => {
      return employeee.age >= 26;
    });
    fs.writeFile(
      "./karyawan_tuwir.json",
      JSON.stringify(karyawan26, null, 2),
      "utf-8",
      (error, data) => {
        if (error) {
          console.log(error);
          return error;
        }
        console.log("data sudah dipindah", data);
      }
    );
  } catch (error) {
    console.error("Terjadi kesalahan saat parsing JSON:", error);
  }
});

/** soal 4 :
 * buat perintah untuk menghapus karyawan dengan id=1 dari data employee.json
 * lalu simpan perubahan data nya di file baru bernama deleted_data readfile & writeFile
 */
fs.readFile("./employee.json", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
    return error;
  }
  try {
    const employee = JSON.parse(data);
    const id1 = employee.filter((employee) => {
      return employee.id !== 1;
    });
    fs.writeFile(
      "./deleted_data.json",
      JSON.stringify(id1, null, 2),
      "utf-8",
      (error, data) => {
        if (error) {
          console.log(error);
          return error;
        }
        console.log("data sudah dipindah", data);
      }
    );
  } catch (error) {
    console.error("Terjadi kesalahan saat parsing JSON:", error);
  }
});

// json parse buat ngubah array of object jadi JsON
// JSON stringift buat ngubah data json ke string
