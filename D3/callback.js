//  CALLBACK : funsi yang dikirim argumen/parameter ke funsi lain
// atau funsi yang memanggil fungsi

//  fungsi callback
function printLog(data) {
  console.log("Callback : ", data);
}

// fungsi yang dipangil funsi callback
const perjumlahan = (a, b) => {
  return a + b;
};

printLog(perjumlahan(1, 2));
