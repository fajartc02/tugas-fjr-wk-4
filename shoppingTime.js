function shoppingTime(memberId, money) {
// you can only write your code here!
    var check;
    var customer = {
        memberId: memberId,
        money: money,
        listPurchased: []
    }
    // console.log(customer)
    if(customer.memberId === '' || customer.memberId === undefined) {
        return check = 'Mohon maaf, toko X hanya berlaku untuk member saja'
    } else if (customer.money < 50000) {
        return check = 'Mohon maaf, uang tidak cukup'
    } else if (customer.money >= 50000) {
        var changeMoney = customer.money
        var listBarang = ['Sepatu Stacatu', 'Baju Zoro', 'Baju H&N', 'Sweater Uniklooh', 'Casing Handphone']
        // for (var cm = changeMoney; cm > 0; cm--) {
        if (customer.money >= 1500000) { 
            changeMoney = changeMoney - 1500000
            customer.listPurchased.push(listBarang[0])
            // console.log(customer.listPurchased)
            // console.log(changeMoney)// out : 975000
        }
        if (changeMoney >= 500000) {
            changeMoney = changeMoney - 500000
            customer.listPurchased.push(listBarang[1])
            // console.log(changeMoney)
            // console.log(customer.listPurchased)
        }
        if (changeMoney >= 250000) {
            changeMoney = changeMoney - 250000
            customer.listPurchased.push(listBarang[2])
            // console.log(changeMoney)
            // console.log(customer.listPurchased)
        }
        if (changeMoney >= 175000) {
            changeMoney = changeMoney - 175000
            customer.listPurchased.push(listBarang[3])
        }
        if (changeMoney >= 50000) {
            changeMoney = changeMoney - 50000
            customer.listPurchased.push(listBarang[4])
            // console.log(changeMoney)
            // console.log(customer.listPurchased)
        }
        // }
        customer.changeMoney = changeMoney
        return customer
    }
    // console.log(check)
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu', (1500000)
    //    'Baju Zoro', (500000)
    //    'Baju H&N', (250000)
    //    'Sweater Uniklooh', (175000)
    //    'Casing Handphone' (50000)],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
//   //{ memberId: '82Ku8Ma742',
//   // money: 170000,
//   // listPurchased:
//   //  [ 'Casing Handphone' ],
//   // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja