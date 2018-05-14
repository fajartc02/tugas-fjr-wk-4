function kaliTerusRekursif(angka) {
  // you can only write your code here!
  //change typeOf angka number to string
  var strAngka = String(angka)
  var arr = []
  // jika angka <= 9 maka akan mereturn angka
  if (angka <= 9) {
      return angka
  // jika angka > 9
  } else {
      //looping untuk menampung strAngka[i] ke arr
      for (var i = 0; i < strAngka.length; i++) {
        arr.push(strAngka[i])
    }
    // console.log(arr) // ['6', '6']
    var containNum = []
    // looping untuk menampung numStr[i] ke containNum
    for (var j = 0; j < arr.length; j++) {
      var numStr = Number(arr[j]) // change typeOf arr String to Number
      containNum.push(numStr)
    }
    // console.log(containNum)
    var hasil = 1
    // looping untuk menghasilkan 6 * 6 = 36 => 3*6 = 18=> 1*8 = 8
    for (var a = 0; a < containNum.length; a++) {
        hasil *= containNum[a]
    }
    // console.log(hasil)
    return hasil, kaliTerusRekursif(hasil)
  }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6