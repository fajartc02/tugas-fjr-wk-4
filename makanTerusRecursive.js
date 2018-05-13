function makanTerusRekursif(waktu) {
  // you can only write your code here!
  var counterEat = 0;
  var leftTime;
  
  if (waktu === 0) {
    return 0;
  } else if (waktu < 15) {
    return 1;
  } else {
    counterEat++; // out: 1, 1, 1, 1, 5
    leftTime = waktu - 15; //out: 51, 36, 21, 6
  }
  return counterEat + makanTerusRekursif(leftTime);
}

// TEST CASES
console.log(makanTerusRekursif(66)); // 5
// console.log(makanTerusRekursif(100)); // 7
// console.log(makanTerusRekursif(90)); // 6
// console.log(makanTerusRekursif(10)); // 1
// console.log(makanTerusRekursif(0)); // 0