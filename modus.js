function cariModus(arr) {
    // you can only write your code here!
    var angkaUnik = []
    var count = []
    var output;
    for(var i = 0; i < arr.length; i++) {
      // var index for contain value index if
      var index = angkaUnik.indexOf(arr[i]) //out : -1, -1, -1, -1, 2 from [10, 4, 5, 2, 5]
      //statement if index === -1(array kosong) maka angkaUnik akan di push
      if (index === -1) {
        angkaUnik.push(arr[i])// out: [10, 4, 5, 2]
        // if index -1 maka akan membuat index baru angka 1 di dalam count
        count.push(1)
        //statement if index !== -1(array kosong) maka angkaUnik akan ditambahkan nilai dari index sebelumnya yang sudah ketemu
      } else if (index !== -1) {
        count[index] = count[index] + 1
      }
    }
    // for (var j = 0; j < count.length; j++) {
    //   // count[i]
    //   console.log(count[j]) // DISPLAY 1, 1, 2, 1
    //   if (count[0] < count[]) {
    //     sortCount.push(count[j])
    //   } else {
    //     sortCount.push(count[j])
    //   }
    console.log(angkaUnik)
    console.log(count)// out : [1,1,2,1]
    //sortir manual with statement and looping
    // var temp; // var temporary contain
    // for(var j = 0; j < count.length; j++) {
    //   var min = j;
  
    //   for(var k = j + 1; k < count.length; k++) {
    //     if(count[k] > count[min]) {
    //       min = k;
    //     }
    //   }
    //   temp = count[j];
    //   count[j] = count[min];
    //   count[min] = temp;
    // }
    // sortir manual data count and angkaUnik with looping and statement 
    for (var a = 0; a < count.length; a ++) {
      for(var b = a+1; b < count.length; b++) {
        if(count[b] > count [a]) {
          //var tampung(temporary) to contain value count
          var tampung = count[a];
          console.log('prev', count)
          count[a] = count[b];
          console.log('after', count)
          count[b] = tampung
          console.log('final', count)
  
          //var tampung2(temporary) to contain value angkaUnik
          var tampung2 = angkaUnik[a]
          console.log(angkaUnik)
          angkaUnik[a] = angkaUnik[b]
          angkaUnik[b] = tampung2
          console.log(angkaUnik)
        }
      }
    }
    // angkaUnik[0]
    console.log(count)
    if (count[0] == count[count.length- 1]) {
      output = -1
    } else {
      output = angkaUnik[0]
    }
    return output
  
    console.log(count) // out : [2, 1, 1, 1]
    
    // var hasil = angkaUnik[count[0]]
    // if ()
  
    // console.log(hasil)
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 5])); // 5
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1