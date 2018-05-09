function ubahHuruf(kata) {
    // // you can only write your code here!
    // // var aZ = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    var aZ = 'abcdefghijklmnopqrstuvwxyza'
    var kataBaru = ''
    
    for (var i = 0; i < kata.length; i++) {
    //display indexHuruf from index kata[i], ex kata[i] = 'w' maka mengambil index urutan dari aZ (keberapa)
      var indexHuruf = aZ.indexOf(kata[i])
      kataBaru += aZ[indexHuruf + 1]
    }

    return kataBaru
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu