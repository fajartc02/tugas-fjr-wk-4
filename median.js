function cariMedian(arr) {
    // you can only write your code here!
    var median;
    // console.log(bulatGenap)
    // console.log(bulatGanjil)
    if (arr.length % 2 === 0) {
      var tengahGenap = arr.length / 2 + 1
      var bulatGenap = Math.round(tengahGenap)
      median = arr[bulatGenap - 1] + arr[bulatGenap - 2]
      median = median / 2
    } else if (arr.length % 2 !== 0) {
      var tengahGanjil = arr.length / 2
      var bulatGanjil = Math.round(tengahGanjil)
      median = arr[bulatGanjil-1]
    }
    return median
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5