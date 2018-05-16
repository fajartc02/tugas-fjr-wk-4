function nikah(arr) {
  var containArr = []
  for (var i = 0; i < arr.length; i ++) {
    var containStr = ''
    for (var j = 0; j < arr[i].length; j++) {
      containStr = containStr + arr[i][j]
      if (j < arr[j].length -1) { 
        containStr += ' love '
      }
    }
    containArr.push(containStr)
    // console.log(containStr)
  }
  // console.log(containArr)
}

console.log(nikah([['althea', 'shadow'],['alice', 'hayabusa'],['fanny', 'akai']]))

// [ 'althea love shadow', 'alice lova hayabusa', 'fanny love akai']

function ceraikan(arr) {
  var containArr = []

  for (var i = 0 ; i < arr.length; i++) {
    // console.log(arr[i])
    var arr1 = arr[i].split(' love ')
    // for (var j = 0; j < arr[i].length; j++) {
      // }
      containArr.push(arr1)
    }

  return containArr
}

console.log(ceraikan(['althea love shadow', 'alice love hayabusa', 'fanny love akai']))