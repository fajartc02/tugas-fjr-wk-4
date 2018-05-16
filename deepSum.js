function deepSum (arr) {
  // Code disini
  var hasil = 0
  for (var a = 0; a < arr.length; a++) {
    for(var b = 0; b <arr[a].length; b++) {
      for(var c = 0; c < arr[a][b].length; c++) {
        hasil += arr[a][b][c]
      }
    }
  }
  if (arr.length === 0) {
    return 'No Number'
  }
  return hasil
}

//TEST CASE
console.log(deepSum([
  [//0
    [4, 5, 6],//0
    [9, 1, 2, 10],
    [9, 4, 3]
  ],
  [//1
    [4, 14, 31],
    [9, 10, 18, 12, 20],
    [1, 4, 90]
  ],
  [//2
    [2, 5, 10],
    [3, 4, 5],
    [2, 4, 5, 10]
  ]
])); // 316

console.log(deepSum([
  [
    [20, 10],
    [15],
    [1, 1]
  ],
  [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    [2],
    [9, 11]
  ],
  [
    [3, 5, 1],
    [1, 5, 3],
    [1]
  ],
  [
    [2]
  ]
])); // 156

console.log(deepSum([])); // No number