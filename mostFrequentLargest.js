function sorting(arrNumber) {
    // code di sini
    var temp;
    for (var i = 0; i < arrNumber.length; i++) {
        for (var j = i+1; j< arrNumber.length; j++) {
            if (arrNumber[j] > arrNumber[i]) {
                temp = arrNumber[i]
                arrNumber[i] = arrNumber[j]
                arrNumber[j] = temp
            }
        }
    }
    // console.log(arrNumber)
    return arrNumber
  }
  function getTotal(arrNumber) {
    // code di sini
    // console.log(arrNumber)//out: [ 8, 8, 8, 6, 5, 4, 4, 2 ]
    var counter = []
    var conIndex = []
    for (var i = 0; i < arrNumber.length; i++) {
        var index = counter.indexOf(arrNumber[i])
        if(index === -1) {
            counter.push(arrNumber[i])
            conIndex.push(1)
        } else if (index !== -1) {
            conIndex[index] = conIndex[index] + 1
        }
    }
    if (arrNumber == 0) {
        return ''
    }
    return 'angka paling besar adalah ' + arrNumber[0] + ' dan jumlah kemunculannya sebanyak ' + conIndex[0] + ' kali'
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//   //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//   //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''