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



// function calculateTotal(number) {
//     let sum = 0;
//     for (let i = 0; i <= number; i += 1){
//         // console.log(i);
//       sum += 1 * i;
//     }
//    return sum;
//   }

//   console.log(calculateTotal(24));
//   console.log(calculateTotal(18));
//   console.log(calculateTotal(7));
//   console.log(calculateTotal(0));
//   console.log(calculateTotal(1));



// function calculateEvenTotal(number) {
//   let sum = 0;
// for (let i = 0; i <= number; i += 1) {
//   if ( i % 2 === 0) {
//     sum += i;
//   }
// };
//   return sum;
// };

// console.log(calculateEvenTotal(1)); //0
// console.log(calculateEvenTotal(3));//2
// console.log(calculateEvenTotal(7));//12
// console.log(calculateEvenTotal(18));//90
// console.log(calculateEvenTotal(27));//182


// const start = 17;
// const end = 25;
// let number = 0;
// for (let i = start; i <= end; i++) {
//   if (i % 5 === 0) {
//     number = i;
//    console.log(i);
//     break;
//   }
// }

// task-1.js

// function makeTransaction(quantity, pricePerDroid, customerCredits){
//   const totalPrice = quantity * pricePerDroid;
//   if (customerCredits < totalPrice) {
//     return `Insufficient funds!`;
//   } else {
//     return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
//   };
// };

// console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
// console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
// console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"


// task-2.js

// function formatMessage(message, maxLength){
//   if (message.length <= maxLength) {
//     return message;
//   } else {
//     return message.slice(0, maxLength) + '...';
//   }
// }

// console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
// console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
// console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
// console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"

// task-3.js

// function checkForSpam(message){
//   const newMessage = message.toLowerCase();
//   if (newMessage.includes("spam")) {
//     return true;
//   } else if(newMessage.includes("sale")) {
//     return true;
//   } else{
//     return false;
//   }
// };

// console.log(checkForSpam("Latest technology news")); // false
// console.log(checkForSpam("JavaScript weekly newsletter")); // false
// console.log(checkForSpam("Get best sale offers now!")); // true
// console.log(checkForSpam("Amazing SalE, only tonight!")); // true
// console.log(checkForSpam("Trust me, this is not a spam message")); // true
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// task-4.js

// function getShippingCost(country){
//   let price;
//   switch (country) {
//     case "China":
//       price = 100;
//       return `Shipping to ${country} will cost ${price} credits`;
//       break;

//       case "Chile":
//       price = 250;
//       return `Shipping to ${country} will cost ${price} credits`;
//       break;

//       case "Australia":
//       price = 170;
//       return `Shipping to ${country} will cost ${price} credits`;
//       break;

//       case "Jamaica":
//       price = 120;
//       return `Shipping to ${country} will cost ${price} credits`;
//       break;

//       default:
//        return "Sorry, there is no delivery to your country";
//   }
// };

// console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
// console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
// console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
// console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
// console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"


//  Модуль 3


// function getSlice(array, value) {
//   if (array.indexOf(value) === -1) {
//     return [];
//   } else {
//     return array.slice(0, array.indexOf(value) + 1);
//   }
// };
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly"));
// //["Mango", "Poly"]
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Ajax"));
// //["Mango", "Poly", "Ajax"]
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Mango"));
// //["Mango"]
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Jacob"));
// //[]
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Casey"));
// //[]



// function createArrayOfNumbers(min, max) {
//   const array = [];
//    for (let i = min; i <= max; i++) {
//      array.push(i);
//    }
//    return array;
//  };

//  console.log(createArrayOfNumbers(1, 3));
//  console.log(createArrayOfNumbers(14, 17));
//  console.log(createArrayOfNumbers(29, 34));
//  
 

// function calculateTotalPrice(order) {
//   let totalPrice = 0;
//   for (let i = 0; i < order.length; i += 1) {
//     totalPrice += order[i];
//   };
//   return totalPrice;
// };
// console.log(calculateTotalPrice([12, 85, 37, 4]));//138
// console.log(calculateTotalPrice([164, 48, 291]));//503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));//1116


// function getEvenNumbers(start, end) {
//   const array = [];
//  for (let i = start; i <= end; i++) {
//   if (i % 2 === 0) {
//     array.push(i);
//   } 
//  }
//  return array;
// };

// console.log(getEvenNumbers(2, 5));//[2, 4]
// console.log(getEvenNumbers(3, 11));//[4, 6, 8, 10]
// console.log(getEvenNumbers(6, 12));//[6, 8, 10, 12]
// console.log(getEvenNumbers(8, 8));//[8]
// console.log(getEvenNumbers(7, 7));//[]


// function checkStorage(storage, item) {
// return storage.includes(item.toLowerCase()) ? `${item.toLowerCase()} is available to order!` : "Sorry! We are out of stock!";
// }

// console.log(checkStorage(["apple", "plum", "pear"], "plum"));
// console.log(checkStorage(["apple", "plum", "pear"], "pLuM"));
// console.log(checkStorage(["apple", "plum", "pear"], "pear"));
// console.log(checkStorage(["apple", "plum", "pear"], "pEAr"));
// console.log(checkStorage(["apple", "plum", "pear"], "orange"));
// console.log(checkStorage(["apple", "plum", "pear"], "carrot"));



// function getCommonElements(array1, array2) {
//   newArray = [];
//   for (let i = 0; i <= array1.length; i++) {
//     if (array2.includes(array1[i])) {
//       newArray.push(array1[i]);
//     };
//   };
// return newArray;
// };

// console.log(getCommonElements([1, 2, 3], [2, 4]));//[2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));//[1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));//[12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));//[10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));//[]


// task-1.js


//  const slugify = function(title){
// return slug = title.toLowerCase().split(" ").join("-");
// };

// console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
// console.log(slugify("English for developer")); // "english-for-developer"
// console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"


// task-2.js


// const makeArray = function(firstArray, secondArray, maxLength){
//   return firstArray.concat(secondArray).slice(0, maxLength);
// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []


// task-3.js


// const filterArray = function(numbers, value){
//   let array = [];
//  for (const number of numbers) {
//    if (number > value) {
//      array.push(number);
//    };
//  };
//  return array;
// };

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]


// Модуль 4


// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   const prop = [];

//    for (let product of products) {
//      if (propName in product) {
//        prop.push(product[propName]);

//      };
//    };
//   return prop;
//  };
// console.log(getAllPropValues("name"));//["Radar", "Scanner", "Droid", "Grip"]
// console.log(getAllPropValues("quantity"));//[4, 3, 7, 9]
// console.log(getAllPropValues("price"));//[1300, 2700, 400, 1200]
// console.log(getAllPropValues("category"));//[]


// function calculateTotalPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   for (let product of products) {
//     let total = product.price * product.quantity;
//     if (product.name === productName) {
//        return total;
//     };
//   };return `Product ${productName} not found!`

// };
// console.log(calculateTotalPrice("Blaster")); //"Product Blaster not found!"
// console.log(calculateTotalPrice("Radar")); // 5200
// console.log(calculateTotalPrice("Droid")); // 2800
// console.log(calculateTotalPrice("Grip")); // 10800
// console.log(calculateTotalPrice("Scanner")); // 8100


// task-1.js


// const isEnoughCapacity = function(products, containerSize) {
//     const values = Object.values(products);
// let total = 0;
// for (const value of values) {
//     total += value;
//     };
//     return total <= containerSize ? true : false;
// };


// console.log(
//   isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
// ); // true

// console.log(
//   isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
// ); // false

// console.log(
//   isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
// ); // true

// console.log(
//   isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
// ); // false


// task-2.js


// const calcAverageCalories = function(days) {

// let totalCalories = 0;

// for (const day of days) {
//     totalCalories += day.calories;
//    }; 
//    if (days.length >= 1) {
//         return totalCalories / days.length;
//     }
//     return 0;
// };

// console.log(
//     calcAverageCalories([
//       { day: "monday", calories: 3010 },
//       { day: "tuesday", calories: 3200 },
//       { day: "wednesday", calories: 3120 },
//       { day: "thursday", calories: 2900 },
//       { day: "friday", calories: 3450 },
//       { day: "saturday", calories: 3280 },
//       { day: "sunday", calories: 3300 }
//     ])
//   ); // 3180
  
//   console.log(
//     calcAverageCalories([
//       { day: "monday", calories: 2040 },
//       { day: "tuesday", calories: 2270 },
//       { day: "wednesday", calories: 2420 },
//       { day: "thursday", calories: 1900 },
//       { day: "friday", calories: 2370 },
//       { day: "saturday", calories: 2280 },
//       { day: "sunday", calories: 2610 }
//     ])
//   ); // 2270
  
//   console.log(
//     calcAverageCalories([])
//   ); // 0


// task-3.js


// const profile = {
//     username: "Jacob",
//   playTime: 300,

//   changeUsername(newName){
// this.username = newName;
//   },

//   updatePlayTime(hours){
// this.playTime = this.playTime + hours;
//   },

//   getInfo(){
// return `${this.username} has ${this.playTime} active hours!`
//   },
// };


// console.log(profile.getInfo()); // "Jacob has 300 active hours!"

// profile.changeUsername("Marco");
// console.log(profile.getInfo()); // "Marco has 300 active hours!"

// profile.updatePlayTime(20);
// console.log(profile.getInfo()); // "Marco has 320 active hours!"


// 5 модуль


// function deliverPizza(pizzaName) {
//     return `Delivering ${pizzaName} pizza.`;
//   };
  
//   function makePizza(pizzaName) {
//     return `Pizza ${pizzaName} is being prepared, please wait...`;
//   };
  
//   function makeMessage(pizzaName, callback) {
//     return callback();
//   };

// console.log(makeMessage("Royal Grand", makePizza));
//    //"Pizza Royal Grand is being prepared, please wait..."
//   console.log(makeMessage("Ultracheese", deliverPizza));
//   //"Delivering Ultracheese pizza."


// function filterArray(numbers, value) {
//     let newArray = [];
    
//   numbers.forEach(function(number) {
    
//      if (number > value) {
//         newArray.push(number);
//       };
//   });
    
//     return newArray;

   
    
//   };
// console.log(filterArray([1, 2, 3, 4, 5], 3));  //[4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4));  //[5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); //[] 
// console.log(filterArray([12, 24, 8, 41, 76], 38));//[41, 76]  
// console.log(filterArray([12, 24, 8, 41, 76], 20));//[24, 41, 76]  


  // function changeEven(numbers, value) {
  //   const numberArray = [];
   
  //     numbers.forEach(number => {
  //       if (number % 2 === 0) {
  //           numberArray.push(number + value);
  //       } else {
  //           numberArray.push(number);
  //       }
  //     });
  //    return numberArray;
  // }

  // console.log(changeEven([1, 2, 3, 4, 5], 10));//[1, 12, 3, 14, 5]
  // console.log(changeEven([2, 8, 3, 7, 4, 6], 10));//[12, 18, 3, 7, 14, 16]
  // console.log( changeEven([17, 24, 68, 31, 42], 100));//[17, 124, 168, 31, 142]
  // console.log(changeEven([44, 13, 81, 92, 36, 54], 100));//[144, 13, 81, 192, 136, 154]


//   const players = [
//     { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//     { name: "Poly", playtime: 469, gamesPlayed: 2 },
//     { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//     { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
//   ];
 
//   const totalAveragePlaytimePerGame = players.reduce((total, player) => {
   
//     return total + (player.playtime / player.gamesPlayed);
//   },0);
  
// console.log(totalAveragePlaytimePerGame);//1023


// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// Правильне рішення!!!
// const calculateTotalBalance = users.reduce((total, user) => {
//   return total + user.balance}, 0);

//      console.log(calculateTotalBalance)

// Рішення що прийняв lms

// const calculateTotalBalance = (users) => users.reduce((total, user) => {
//   return total + user.balance}, 0);


// task-1.js

// const getUserNames = users => {
// return users.map(user => user.name);
// };

// console.log(
//   getUserNames([
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     balance: 2811
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     balance: 3821
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     balance: 3793
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     balance: 2278
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     balance: 3951
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     balance: 1498
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     balance: 2764
//   },
// ])
// ); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]


// task-2.js


// const getUsersWithFriend = (users, friendName) => {
//  return users.filter(user => user.friends.includes(friendName));
  
// }

// const allUsers = [
//   {
//     name: "Moore Hensley",
//     friends: ["Sharron Pace"]
//   },
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"]
//   },
//   {
//     name: "Ross Vazquez",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"]
//   },
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"]
//   },
//   {
//     name: "Carey Barr",
//     friends: ["Jordan Sampson", "Eddie Strong"]
//   },
//   {
//     name: "Blackburn Dotson",
//     friends: ["Jacklyn Lucas", "Linda Chapman"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ];

// console.log(getUsersWithFriend(allUsers, "Briana Decker")); 
// // [
// //   {
// //     name: "Sharlene Bush",
// //     friends: ["Briana Decker", "Sharron Pace"]
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"]
// //   }
// // ]

// console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
// // [
// //   {
// //     name: "Elma Head",
// //     friends: ["Goldie Gentry", "Aisha Tran"]
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"]
// //   }
// // ]

// console.log(getUsersWithFriend(allUsers, "Adrian Cross" )); // []


// task-3.js


// const sortByDescendingFriendCount = users => {
//   return users.toSorted((a, b) => b.friends.length - a.friends.length
//   );
// };

// console.log(
//   sortByDescendingFriendCount([
//     {
//       name: "Moore Hensley",
//       friends: ["Sharron Pace"],
//       gender: "male"
//     },
//     {
//       name: "Sharlene Bush",
//       friends: ["Briana Decker", "Sharron Pace"],
//       gender: "female"
//     },
//     {
//       name: "Ross Vazquez",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       gender: "male"
//     },
//     {
//       name: "Elma Head",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       gender: "female"
//     },
//     {
//       name: "Carey Barr",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       gender: "male"
//     },
//     {
//       name: "Blackburn Dotson",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       gender: "male"
//     },
//     {
//       name: "Sheree Anthony",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       gender: "female"
//     }
//   ])
// );
// [
//   {
//     name: "Ross Vazquez",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"],
//     gender: "female"
//   },
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     gender: "female"
//   },
//   {
//     name: "Moore Hensley",
//     friends: ["Sharron Pace"],
//     gender: "male"
//   }
// ]


// task-4.js


// const getTotalBalanceByGender = (users, gender) => {
//   return users
//   .filter(user => user.gender === gender)
//   .reduce((total, user) => (total + user.balance), 0);
// };

// const clients = [
// 	{
//     name: "Moore Hensley",
//     gender: "male",
//     balance: 2811
//   },
//   {
//     name: "Sharlene Bush",
//     gender: "female",
//     balance: 3821
//   },
//   {
//     name: "Ross Vazquez",
//     gender: "male",
//     balance: 3793
//   },
//   {
//     name: "Elma Head",
//     gender: "female",
//     balance: 2278
//   },
//   {
//     name: "Carey Barr",
//     gender: "male",
//     balance: 3951
//   },
//   {
//     name: "Blackburn Dotson",
//     gender: "male",
//     balance: 1498
//   },
//   {
//     name: "Sheree Anthony",
//     gender: "female",
//     balance: 2764
//   }
// ];

// console.log(getTotalBalanceByGender(clients, "male")); // 12053

// console.log(getTotalBalanceByGender(clients, "female")); // 8863



// Практичне заняття 23.03


// const calculator ={
//     read(a,b) {
//         this.a = a;
//         this.b =b;
//     },A
//     sum() {
//         return !this.a || !this.b ? false : this.a + this.b;
//     },
//     mult() {
//         return this.a *this.b;
//     }
// };
// calculator.read(2,2);
// console.log("calculator:", calculator)



// Напишіть ф-цію calcTotalPrice(stones, stonesName),
// яка приймає масив об'єктів і
// Рядок з назвою каменю.
// Функція повертає загальну вартість каменів
// з ​​таким ім'ям

// const stones = [
// { name: "Смарагд", price: 1300, quantity: 4 },
// { name: "Діамант", price: 2700, quantity: 6 },
// { name: "Сапфір", price: 400, quantity: 7},
// { name: "Щебінь", price: 150, quantity: 100 },
// ];

// const calcTotalPrice = (stones, stonesName) => {
// for ( const stone of stones){

//     if(stone.name === stonesName){
// return stone.price * stone.quantity;
    
// }
// }
// return `No find`
// }
// calcTotalPrice(stones, "Смарагд")

//Напишіть дві функції
//makeProduct(name, price, callback) - приймає
//ім'я та ціну товару, а також callback.
//Функція створює об'єкт товару, додаючи йому унікальний
//ідентифікатор як id і викликає callback
//Передаючи йому створений об'єкт.
//showProduct(product) - коллбек приймаючий об'єкт
//продукту і логірующий їх у консоль

// const makeProduct = (name, price, callback) => {
// const product = {
//     name,
//     price,
//     id: Math.random(),
// };
// callback(product);
// };

// const showProduct = product => {
//     console.log(product)
// };

// makeProduct("iPhone", 1000, showProduct);


























