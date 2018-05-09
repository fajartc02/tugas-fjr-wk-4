function angkaPrima(angka) {
  // you can only write your code here!
  var state = true
  for (var i = 2; i < angka; i++) {
    //   console.log('ini i ' + i)
    var prima = angka % i
    if (prima === 0) {
       state = false
    }
  }
  return state
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false