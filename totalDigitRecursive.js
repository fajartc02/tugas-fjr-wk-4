function totalDigitRekursif(angka) {
  // you can only write your code here!
  if (angka === 0) {
    return 0
  } else {   
    return (angka % 10) + totalDigitRekursif(Math.trunc(angka/10)) // out : 2 + 1 + 5 = 8
    // 2 + totalDigitRecursive(512/10 = 51.2) 51<== Math.trunc
    // 2 + (51 % 10) = 1 + totalDigitRecursive(51 / 10 = 5.1) 5 <== Math.trunc
    // 2 + 1 + 5 + totalDigitRecursive(5 / 10 = 0.5) 0<== Math.trunc
  }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
// console.log(totalDigitRekursif(1542)); // 12
// console.log(totalDigitRekursif(5)); // 5
// console.log(totalDigitRekursif(21)); // 3
// console.log(totalDigitRekursif(11111)); // 5