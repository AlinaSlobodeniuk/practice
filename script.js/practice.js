// const min =10;
// const max = 20;
// const num = +prompt('Прощу вас ввеси число')
// let result = 0;
// if (num < min){
// result = min;
// }else if(num > max){
// result = max;
// }else{
// result = num;
// }

// result = Math.max(min,Math.min(max, num))

// alert(result);

// Модуль 1

// task-1.js

// function makeTransaction (quantity, pricePerDroid) {
//     let totalPrice = quantity * pricePerDroid;
//     return `"You ordered ${quantity} droids worth ${totalPrice} credits!"`
// };
// console.log(makeTransaction(5, 3000));
// console.log(makeTransaction(3, 1000));
// console.log(makeTransaction(10, 500));

// task-2.js

// function getShippingMessage(country, price, deliveryFee) {
//     let totalPrice = price + deliveryFee;
//     return `"Shipping to ${country} will cost ${totalPrice} credits"`
// };

// console.log(getShippingMessage("Australia", 120, 50));
// console.log(getShippingMessage("Germany", 80, 20));
// console.log(getShippingMessage("Sweden", 100, 20));

// task-3.js

// function getElementWidth(content, padding, border) {
//     let newContent = parseFloat(content);
//     let newPadding = parseFloat(padding);
//     let newBorder = parseFloat(border);
//     return totalWidth = newContent + newPadding * 2 +newBorder * 2;
// }

// console.log(getElementWidth("50px", "8px", "4px")); // 74
// console.log(getElementWidth("60px", "12px", "8.5px")); // 101
// console.log(getElementWidth("200px", "0px", "0px")); // 200

// Модуль 2

// function checkPassword(password) {
//     const correctPassword = "jqueryismyjam";
//     return password === correctPassword ? `Access granted` : `Access denied, wrong password!`;
    
//   }
//   console.log(checkPassword("r3actsux"));
//   console.log(checkPassword("angul4r1sl1f3"));
//   console.log(checkPassword("jqueryismyjam"));


// function isNumberInRange(start, end, number) {
//     const newNumber = start <= number && end >= number ? true : false;

//     console.log(newNumber)
//   }

// isNumberInRange(10, 30, 17);
// isNumberInRange(10, 30, 5);
// isNumberInRange(20, 50, 24);
// isNumberInRange(20, 50, 76);


// function getFileName(file) {
// if ((file.indexOf(".") === -1)) {
//     return file;
// } else {
//     return file.slice(0, file.indexOf('.'));
// }

//     return file.indexOf(".") === -1 ? file : file.slice(0, file.indexOf("."));
//   }

// console.log(getFileName("index"));
// console.log(getFileName("app"));
// console.log(getFileName("index.css"));
// console.log(getFileName("index.js"));


 
// function calculateTotal(number) {
//    let totalNumber = 0;
//     for (let i = 0; i <= number; i +=1){
//       totalNumber += i;
//     }
//     return totalNumber;
//   }
  
//   console.log(calculateTotal(18));
//   console.log(calculateTotal(24));
//   console.log(calculateTotal(3));



