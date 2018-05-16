/*
========================
The Hogwarts Express
========================
Name :_____________
[INSTRUCTIONS]
hogExpress adalah sebuah function yang menerima satu parameter berupa String Penumpang.
Ini adalah sebuah simulasi penempatan penumpang di dalam gerbong kereta.
Gerbong terdiri dari 5 gerbong, yaitu gerbong Slytherin, gerbong Ravenclaw , Gryffindor, Hufflepuff, dan Muggle.
Function akan membentuk kereta dalam bentuk multidimension array (array 2 dimensi).
Kereta direpresentasikan sebagai sebuah array yang berisi gerbong.
Gerbong adalah sebuah array yang berisi huruf - yang merupakan bentuk simulasi setiap penumpang.
Setiap gerbong hanya boleh menampung penumpang kategori yang sesuai gerbong.
Setiap penumpang direpresentasikan dengan satu huruf, antara S, R, G, H, atau M.
Bentuk Kereta:
[ GERBONG Slytherin, GERBONG Ravenclaw, GERBONG Gryffindor, GERBONG Hufflepuff, GERBONG Muggle ]
Bentuk Gerbong:
Contoh bentuk gerbong Slytherin
[ 'S', 'S' ]
Contoh bentuk gerbong Hufflepuff
[ 'H', 'H' ]

Kumpulan penumpang direpresentasikan dalam string.
Contoh:
input: 'MSRM'
maka, ada penumpang (M)uggle, (S)lytherin, (R)avenclaw, dan (M)uggle.
Kita masukkan setiap penumpang ke masing-masing gerbong.
output: [ ['S'], ['R'], [], [], ['M','M']]

gerbong Slytherin berisi satu S,
gerbong Ravenclaw berisi satu R,
gerbong Gryffindor kosong
gerbong Hufflepuff kosong,
dan gerbong Muggle berisi dua M.
Function akan me-return array kereta yang telah dibentuk.
[RULE]
Tidak perlu pseudocode!
Dilarang menggunakan sintaks .split()!
*/

function hogExpress(passengers) {
  // only write code here
  var kereta = []
  for (var a = 0; a < 5; a++) {
    kereta.push([])
  }
  for (var i = 0; i < passengers.length; i++) {
    // for (var j = 0; j < passengers.length; )
    if (passengers[i] === 'S') {
      kereta[0].push(passengers[i])
    } else if (passengers[i] === 'R') {
      kereta[1].push(passengers[i])
    } else if (passengers[i] === 'G') {
      kereta[2].push(passengers[i])
    } else if (passengers[i] === 'H') {
      kereta[3].push(passengers[i])
    } else if (passengers[i] === 'M') {
      kereta[4].push(passengers[i])
    }
  }
  var objKereta = {}
  objKereta.Slytherin = kereta[0]
  objKereta.Ravenclaw = kereta[1]
  objKereta.Gryffindor = kereta[2]
  objKereta.Hufflepuff = kereta[3]
  objKereta.Muggle = kereta[4]
  return objKereta
}

console.log(hogExpress('SRHGRGGM')); // [['S'], ['R', 'R'], ['G', 'G', 'G'], ['H'], ['M']]
console.log(hogExpress('SRG')); // [['S'], ['R'], ['G'], [], []]
console.log(hogExpress('M')); // [[], [], [], [], ['M']]
console.log(hogExpress('MSR')); // [['S'], ['R'], [], [], ['M']]
console.log(hogExpress('RRSRR')); // [['S'], ['R', 'R', 'R', 'R'], [], [], []]