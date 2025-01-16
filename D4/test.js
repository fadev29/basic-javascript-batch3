const carProducts = [
  {
    id: 1,
    name: "ESEMKA SUV 4x4 Hybrid",
    price: null,
    tag: ["Produk Terlaris"],
    variant: [
      {
        color: "black",
        transmission: "automatic",
        type: "hybrid",
        fuelType: "pertalite",
      },
      {
        color: "silver",
        transmission: "manual",
        type: "hybrid",
        fuelType: "pertalite",
      },
    ],
    isPreorder: true,
  },
  {
    id: 2,
    name: "BAGATATA Hyper Car V12",
    price: 370000000000,
    tag: ["Produk Terlaris", "Promo"],
    variant: [
      {
        color: "black",
        transmission: "automatic",
        type: "engine",
        fuelType: "premium",
      },
      {
        color: "white",
        transmission: "manual",
        type: "engine",
        fuelType: "premium",
      },
    ],
    isPreorder: false,
  },
  {
    id: 3,
    name: "FIRIRIRI F8 Hyper Car Limited Edition",
    price: 4400000000,
    tag: ["Produk Terbaru", "Promo"],
    variant: [
      {
        color: "red",
        transmission: "automatic",
        type: "engine",
        fuelType: "pertalite",
      },
      {
        color: "white",
        transmission: "manual",
        type: "engine",
        fuelType: "pertalite",
      },
    ],
    isPreorder: false,
  },
  {
    id: 4,
    name: "LEMBERGEMBER Revuelto Supercar V12 Plug-In Hybrid",
    price: 7000000000,
    tag: ["Produk Terbaru"],
    variant: [
      {
        color: "black",
        transmission: "automatic",
        type: "hybrid",
        fuelType: "pertamax turbo",
      },
      {
        color: "blue",
        transmission: "automatic",
        type: "hybrid",
        fuelType: "pertamax turbo",
      },
      {
        color: "green",
        transmission: "automatic",
        type: "hybrid",
        fuelType: "pertamax turbo",
      },
      {
        color: "red",
        transmission: "automatic",
        type: "hybrid",
        fuelType: "pertamax turbo",
      },
    ],
    isPreorder: false,
  },
  {
    id: 5,
    name: "TOYOTA Land Cruiser Prado 4x4",
    price: 250000000,
    tag: ["Produk Terlaris"],
    variant: [
      {
        color: "matte black",
        transmission: "automatic",
        type: "engine",
        fuelType: "solar",
      },
      {
        color: "army",
        transmission: "automatic",
        type: "engine",
        fuelType: "solar",
      },
      {
        color: "white",
        transmission: "automatic",
        type: "engine",
        fuelType: "solar",
      },
    ],
    isPreorder: false,
  },
  {
    id: 6,
    name: "Wuling YangWang U9 EV",
    price: null,
    tag: ["Produk Terbaru"],
    variant: [
      {
        color: "matte black",
        transmission: "automatic",
        type: "electric",
        fuelType: "battery",
      },
      {
        color: "navy",
        transmission: "automatic",
        type: "electric",
        fuelType: "battery",
      },
      {
        color: "white",
        transmission: "automatic",
        type: "electric",
        fuelType: "battery",
      },
    ],
    isPreorder: true,
  },
  {
    id: 7,
    name: "Beat Esp 110 Second",
    price: 7500000,
    tag: ["Produk Terlaris", "Bekas"],
    variant: [
      {
        color: "black",
        transmission: "automatic",
        type: "engine",
        fuelType: "pertamax turbo",
      },
      {
        color: "navy",
        transmission: "automatic",
        type: "engine",
        fuelType: "pertamax turbo",
      },
      {
        color: "white",
        transmission: "automatic",
        type: "engine",
        fuelType: "pertamax turbo",
      },
      {
        color: "red",
        transmission: "automatic",
        type: "engine",
        fuelType: "pertamax turbo",
      },
    ],
    isPreorder: false,
  },
];

// SOAL :
/** 1
 * Cari dan tampilkan data mobil dengan harga tertinggi dan terendah
 * reduce/math
 */
const dataHargaMobil = carProducts.reduce(
  (a, b) => {
    return {
      dataTertinggi: Math.max(a.dataTertinggi, b.price),
      dataTerendah: Math.min(a.dataTerendah, b.price),
    };
  },
  { dataTertinggi: -Infinity, dataTerendah: Infinity }
);
console.log("data tertingi :", dataHargaMobil.dataTertinggi);
console.log("data terendah :", dataHargaMobil.dataTerendah);

/** 2
 * filter dan tampilkan data mobil dengan tag "Promo"
 */
const mobilPromo = carProducts.filter((k) => k.tag[1] === "Promo");
console.log("harga mobil promo :", mobilPromo);
/** 3
 * Urutkan dan tampilkan mobil dari harga tertinggi ke rendah, jika ada harga yang null, tampilkan diurutan terakhir
 */

const DataMobilT = carProducts
  .filter((k) => {
    return k.price !== null;
  })
  .sort((a, b) => {
    return b.price - a;
  });
console.log("data harga mobil tertiggi terrandah", DataMobilT);

/** 4
 * Kelompokkan mobil-mobil berdasarkan tipe (engine, hybrid, electric) dan tampilkan data mobil berdasarkan kelompoknya
 * output : engine: [{dataMobil}], hybrid: [{dataMobil}], electric: [{dataMObil}]
 */
const tipeEngine = carProducts.filter((k) => k.variant[0].type === "engine");
const tipeHybrid = carProducts.filter((k) => k.variant[0].type === "hybrid");
const tipeElectric = carProducts.filter(
  (k) => k.variant[0].type === "electric"
);
console.log("Tipe mobil Engine : ", tipeEngine);
console.log("tipe mobil Hybrid : ", tipeHybrid);
console.log("tipe mobil Electric : ", tipeElectric);

const { error, log } = require("console");
/** 5
 * buat fungsi yang membaca data dari file JSON carProducts.json secara ASYNCHRONOUS,
 * lalu urutkan mobil berdasarkan harga dari tinggi ke rendah,
 * tampilin hasilnya ke file JSON yang sama(carProducts.json)
 */
const fs = require("fs");
const ubahJson = JSON.stringify(carProducts, null, 2);
function membuatData() {
  try {
    fs.writeFileSync("./carProducts.json", ubahJson, "utf-8");
  } catch (error) {
    console.log(error);
  }
}
// membuatData();

function membacaData() {
  try {
    const data = fs.readFileSync("./carProducts.json", "utf-8");
    // console.log(data);

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
membacaData();
const getDataJson = JSON.parse(membacaData());
console.log(getDataJson);

const sortData = getDataJson.sort((a, b) => {
  if (a.price === null) return 1;
  if (b.price === null) return -1;
  return a.price - b.price;
});
console.log("data harga mobil tertingi terendah JSON : ", sortData);
/** 6
 * Buat fungsi untuk menambahkan data mobil baru dari carProducts.json kedalam file "addNewCarProducts.json"
 */
const newData = {
  id: 8,
  name: "Beat Esp 110 Second",
  price: 7900000,
  tag: ["Produk Terlaris", "Bekas"],
  variant: [
    {
      color: "black",
      transmission: "automatic",
      type: "engine",
      fuelType: "pertamax turbo",
    },
    {
      color: "navy",
      transmission: "automatic",
      type: "engine",
      fuelType: "pertamax turbo",
    },
    {
      color: "white",
      transmission: "automatic",
      type: "engine",
      fuelType: "pertamax turbo",
    },
    {
      color: "red",
      transmission: "automatic",
      type: "engine",
      fuelType: "pertamax turbo",
    },
  ],
  isPreorder: false,
};

function addNew() {
  fs.readFile("./carProducts.json", "utf-8", (error, data) => {
    if (error) {
      console.log(error);
      return error;
    }
    let employee = JSON.parse(data);
    employee.push(newData);
    fs.writeFile(
      "./addNewCarProducts.json",
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
}

addNew();

/** 7
 * buat fungsi ASYNCHRONOUS yang mengambil produk mobil dengan harga tertinggi dan terendah,
 * lalu hitung selisih harganya.
 */

function ngambilDataProduk(dataM) {
  try {
    let priceMax = dataM.reduce((previous, next) => {
      let price = Math.max(previous.price, next.price);
      return price === previous.price ? previous : next;
    });
    let priceMin = dataM.reduce((previous, next) => {
      let price = Math.min(previous.price, next.price);
      return price === previous.price ? previous : next;
    });
    // let mobil = Math.max(dataM);
    // let mobil1 = Math.min(dataU);
    console.log("data selisih :", priceMax.price - priceMin.price);
  } catch (error) {
    console.log(error);
  }
}
ngambilDataProduk(carProducts);

/** 8
 * buat fungsi yang mencari mobil dengan varian warna terbanyak.
 */
function mobilVarian(data) {
  const dataWarna = data.filter(
    (k) => k.variant.length === Math.max(...data.map((i) => i.variant.length))
  );
  console.log(dataWarna);
  return;
}

mobilVarian(carProducts);

/** 9
 * buat fungsi untuk mencari mobil yang tidak preorder
 */
function mobilTidakPreorder(data) {
  const preorder = data.filter((k) => k.isPreorder === false);
  console.log("mobil yang tidak preorder :", preorder);
  return preorder;
}
mobilTidakPreorder(carProducts);

/** 10
 * buat looping untuk menampilkan SEGITIGA SAMA KAKI
 */

function buatPramida(pramida) {
  for (let i = 1; i <= pramida; i++) {
    let spasi = " ".repeat(pramida - i);
    let bintang = "*".repeat(2 * i - 1);
    console.log(spasi + bintang);
  }
}

let jumblah = 5;
console.log(buatPramida(jumblah));

/** BONUS FREE 1 SOAL */
/** 11
 * Buat CRUD(Create, Read, Update, Delete) data dari data employee yang sebelumnya dipelajarin
 * HANYA GUNAKAN ARRAY METHOD!
 */

const employee = [
  {
    id: 1,
    nama: "Danu",
    age: 25,
    jobDesk: [{ title: "frontend", salary: 12000000 }],
    hobby: ["membaca", "menulis"],
  },
  {
    id: 2,
    nama: "Dani",
    age: 26,
    jobDesk: [{ title: "frontend", salary: 20000000 }],
    hobby: ["membaca", "menulis"],
  },
  {
    id: 3,
    nama: "Dina",
    age: 27,
    jobDesk: [{ title: "backend", salary: 30000000 }],
    hobby: ["membaca"],
  },
  {
    id: 4,
    nama: "Deni",
    age: 26,
    jobDesk: [{ title: "backend", salary: 40000000 }],
    hobby: ["membaca"],
  },
  {
    id: 5,
    nama: "Dian",
    age: 27,
    jobDesk: [{ title: "frontend", salary: 80000000 }],
    hobby: ["membaca"],
  },
];

let tambah = {
  id: 1,
  nama: "Danu",
  age: 25,
  jobDesk: [{ title: "frontend", salary: 12000000 }],
  hobby: ["membaca", "menulis"],
};
console.log("tambahan employee : ", employee.push(tambah));

console.table(employee);
employee[1].id = 1;
console.table(employee);

employee.splice(0, 1, 3);
console.table(employee);
