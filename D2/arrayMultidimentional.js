//  array berlapis

const threeDimensionalArray = [
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  [
    [10, 11, 12],
    [13, 14, 15],
    [16, 17, 18],
  ],
  [
    [19, 20, 21],
    [22, 23, 24],
    [25, 26, 27],
  ],
];

// cara akses elemen dalam array multi dimensi
console.log(threeDimensionalArray[1][1]);
console.log(threeDimensionalArray[2]);
console.log((threeDimensionalArray[2][2][2] = 100));

//  looping

for (let i = 0; i < threeDimensionalArray.length; i++) {
  for (let j = 0; j < threeDimensionalArray[i].length; j++) {
    for (let k = 0; k < threeDimensionalArray[i].length; k++) {
      console.log(threeDimensionalArray[i][j][k]);
    }
  }
}
 