function hitungHuruf(kata) {
  // you can only write your code here!
  var arrKata = []
 
  var kataBaru = ''
  kata = kata + ' '
  
  for (var i = 0; i < kata.length; i++) {
    //statement for contain kata to kataBaru , out : [ 'Today,', ' is', ' the', ' greatest', ' day', ' ever' ]
    kataBaru += kata[i]
    if(kata[i] == ' ') {
      arrKata.push(kataBaru)
      kataBaru = ''
    }
  }
   // console.log('ini split manual: ', arrKata)
  var containKata = ''
  var highIndex = 0
  for(var j = 0; j < arrKata.length; j++) {
    var containerIndex = []
    var containerKata = []
    var hasilIndex = 0
    // console.log(arrKata[j])
    for (var k = 0; k < arrKata[j].length; k++) {
      var index = containerKata/*harusSama*/.indexOf(arrKata[j][k])// harus contain nilai per huruf dari arrKata
      if (index === -1) {
        containerKata/*harusSama*/.push(arrKata[j][k]);
        containerIndex.push(1);
      } else {
        containerIndex[index]++
      }
    }
    containerIndex.sort(function (a, b) {
      return a < b
    })
      for (var l = 0; l < containerIndex.length; l++) {
        if (containerIndex[l] > 1) {
          hasilIndex += containerIndex[l] //2
          // console.log(containerIndex)
        } else if (containerIndex[l] === 1) {
            break;
        }
      }
      // console.log(hasilIndex)
    if (hasilIndex > highIndex) {
      highIndex = hasilIndex
      containKata = arrKata[j]
    }
  }
  return containKata
}

console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau