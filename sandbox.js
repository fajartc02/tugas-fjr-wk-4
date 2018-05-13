function countProfit(shoppers) {
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];

  // you can only write your code here!
  if (shoppers == 0) {
      return arrTokoX = []
  }

  var arrTokoX = []
  for (var i = 0; i < listBarang.length; i++) {
    var tokoX = {}
    tokoX.product = listBarang[i][0]
    tokoX.shoppers = []
    tokoX.leftOver = listBarang[i][2]
    tokoX.totalProfit = 0
    arrTokoX.push(tokoX)
    var laku = 0
    for (var j = 0; j < shoppers.length; j++) {
      var amount = 0
      if(arrTokoX[i].product === shoppers[j].product) {
        amount += shoppers[j].amount
        console.log('ini amount', amount)
        if(arrTokoX[i].leftOver - amount >= 0) {
          arrTokoX[i].leftOver -= amount
          laku += shoppers[j].amount
          console.log('ini laku' + laku)
          var sold = arrTokoX[i].leftOver
          console.log(sold)
        arrTokoX[i].shoppers.push(shoppers[j].name)
        arrTokoX[i].totalProfit = listBarang[i][1] * laku
        }
      }
    }
  }
  return arrTokoX

}

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
  console.log(countProfit([])); //[]