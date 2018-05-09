function fpb(angka1, angka2) {
    // you can only write your code here!
    // var i = angka1
    var arr = []
    var state = true
    /* CARA FOR */
    for (var i = angka1; i > 0; i--) {
      if ( angka1 % i === 0 && angka2 % i === 0) {
        arr.push(i)
      }
    }
    /* CARA WHILE */
    // while (state) {
    //   i--
    //   if (angka1 % i === 0 && angka2 % i === 0) {
    //     arr.push(i)
    //     // console.log(arr)
    //     state = false
    //   } //else if ()
    // }
    return arr[0]
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1