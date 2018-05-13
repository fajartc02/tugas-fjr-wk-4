function changeVocals (str) {
  //code di sini
  var aZ = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ '
  var voc = ['a', 'i', 'u', 'e', 'o', 'A', 'I', 'U', 'E', 'O']
  var newStr = []
  console.log(voc.length)
  for(var i = 0; i < str.length; i++) {
    var strNew = ''
    for(var j = 0; j < voc.length; j++) {
      // console.log('ini j ', voc[j])
      // console.log('ini i ', i)
      if (str[i] != voc[j]) {
        strNew += str[i]
        newStr.push(strNew)
        console.log(strNew)
        break;
      } else if (str[i] == voc[j]) {
        var changeStr = aZ.indexOf(str[i])
        strNew += aZ[changeStr + 1]
        newStr.push(strNew)
        break;
      }
    }
  }
  return newStr
}
console.log(changeVocals('Sargei Dragunov'))

function reverseWord (str) {
  //code di sini
}

function setLowerUpperCase (str) {
  //code di sini
}

function removeSpaces (str) {
  //code di sini
}

function passwordGenerator (name) {
  //code di sini
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
// console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
// console.log(passwordGenerator('Alexei')); // 'JFXFLb'
// console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'