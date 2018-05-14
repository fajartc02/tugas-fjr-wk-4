function changeVocals (str) {
  //code di sini
  var aZ = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var vocals = 'aiueoAIUEO'
  var containerStr = ''
    //check vocal di dalam aZ
    for (var i = 0; i < str.length; i++) {
      // str[i] di index vocal ada berapa. kalo -1 atau tidak ada maka str[i] ditambahkan ke containerStr
      if(vocals.indexOf(str[i]) === -1) {
        containerStr += str[i]
      // str[i] di index vocal ada. maka str[i] di index aZ akan di tambahkan 1 dan indexHuruf di dalam aZ  akan di tambahkan containStr
      } else {
        var index = aZ.indexOf(str[i])
        var indexHuruf = index + 1
        containerStr += aZ[indexHuruf]
      }
    }
  // console.log(containerStr)
  return containerStr
}
// console.log(changeVocals('Sargei Dragunov'))

function reverseWord (str) {
  //code di sini
  var revStr = ''
  for (var i = str.length -1 ; i >= 0; i--) {
    revStr += str[i]
  }
  return revStr
}
// console.log(reverseWord())

function setLowerUpperCase (str) {
  //code di sini
  var lowUpStr = ''
  for(var i = 0; i < str.length; i++) {
    // jika str[i] = str[i] huruf kapital maka str[i] akan di rubah huruf kecil dan di tampung ke lowUpCase
    if(str[i] == str[i].toUpperCase()) {
      lowUpStr += str[i].toLowerCase()
    } else {
      lowUpStr += str[i].toUpperCase()
    }
  }
  return lowUpStr
}

function removeSpaces (str) {
  //code di sini
  var contain = ''
  var strNew = str + ' '
  for (var i = 0; i < str.length; i++) {
    if(str[i] == ' ') {
      contain += ''
    } else {
      contain += strNew[i]
    }
  }
  if(contain.length < 5) {
    contain = 'Minimal karakter yang diinputkan adalah 5 karakter'
  }
  return contain
}

function passwordGenerator (name) {
  //code di sini
  var changeVoc = changeVocals(name)
  var revWord = reverseWord(changeVoc)
  var lowUpCase = setLowerUpperCase(revWord)
  var rmSpaces = removeSpaces(lowUpCase)
  return rmSpaces
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'