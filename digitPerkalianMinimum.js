function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var arrAngka = []
    var count = 0
    var digitMinimum;
    //looping for contain factor from angka
    for(var a = angka; a > 0; a--) {
      //   console.log(a)
        if(angka % a === 0) {
          // console.log(a)
          arrAngka.push(a)
        }
        
    }
    // console.log(arrAngka) out : [faktor from angka]
    if (arrAngka == 1) {
      digitMinimum =2 // if arrAngka = 1 then return digitMinimum = 2
    }
    //looping for compare value arrAngka with arrAngka + 1
    for(var b = 0; b < arrAngka.length; b++) {
      arrAngka[b]
      // console.log('ini angka b:', arrAngka[b])
      for(var c = b+1; c < arrAngka.length; c++) {
        arrAngka[c]
        // console.log('ini angka c:', arrAngka[c])
        // conditional if arrAngka * arrAngka selanjutnya == value of parameter(angka)
        if(arrAngka[b] * arrAngka[c] == angka) {
          var strAng = String(arrAngka[b])
          var strAng2 = String(arrAngka[c])
          var hasilStr = strAng + strAng2
          // console.log(hasilStr)
          // arrStr.push(hasilStr)
          if (hasilStr.length > 2) {
            digitMinimum = hasilStr.length
            // console.log(hasilStr.length)
          } else if (hasilStr.length <= 3) {
            digitMinimum = hasilStr.length
          }
        }
      }
    }
    return digitMinimum
  }

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2