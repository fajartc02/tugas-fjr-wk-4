var str = 'hello'
var aZ = 'abcdefghijklmnopqrstuvwxyz'

var aZ = 'abcdefghijklmnopqrstuvwxyza'
var kataBaru = ''

for (var i = 0; i < str.length; i++) {
//display indexHuruf from index kata[i], ex kata[i] = 'w' maka mengambil index urutan dari aZ (keberapa)
  var indexHuruf = aZ.indexOf(str[i])
}
console.log(indexHuruf)

// var tampung = ''
// for (var a = 0; a < str.length; a ++) {
//     for(var b = a+1; b < str.length; b++) {
//       if(count[b] > count [a]) {
//         // var tampung(temporary) to contain value indexOf
//         var tampung = count[a];
//         console.log('prev', count)
//         count[a] = count[b];
//         console.log('after', count)
//         count[b] = tampung
//         console.log('count index yang sudah di sortir', count)

//         //var tampung2(temporary) to contain value str
//         var tampung2 = angkaUnik[a]
//         console.log(angkaUnik)
//         angkaUnik[a] = angkaUnik[b]
//         angkaUnik[b] = tampung2
//         console.log(angkaUnik)
//       }
//     }
// }