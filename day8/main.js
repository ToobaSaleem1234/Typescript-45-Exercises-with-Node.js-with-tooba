"use strict";
//que 22:"International Error":
let friends = ["rameeza", "faiza", "fariha", "ramsha"];
console.log(friends[4]); //international error...
console.log(friends[3]); // correcting error...
//que 23:"conditional test";
let num1 = 15;
let num2 = 20;
console.log(num1 == num2); // false
console.log(num1 != num2); //true
console.log(num1 > num2); //false
console.log(num1 < num2); //true
console.log(num1 > 18); //false
console.log(num1 <= num2); //true
console.log(num1 + num2 == num1); //false
console.log(num1 * num2 != num2); //true
console.log(num2 / num1 != num2); //true
console.log(num1 - num2 == num1); //false
//que 24:"more tests":
//equality with strings:
console.log("Testing with equality strings");
console.log("apple" == "apple"); //true
console.log("kiwi" != "kiwi"); //false
//using the lower case function:
console.log("Testing with lower case function");
console.log("Apple".toLowerCase() == "apple"); //true
console.log("BANANA".toLowerCase() != "banana"); //false
//and & or:
console.log("Testing with and or");
console.log((4 > 2) && (4 > 6)); // false
console.log((2 == 2) || (2 < 5)); //)true
console.log(!(5 > 9)); //false
//an items in array:
let fruits = ["apple", "mango", "cherry"];
console.log("is apple include is in fruits");
console.log(fruits.includes("apple"));
let vegetables = ['onion', 'potato', 'carrot'];
console.log("is'carrot', is in vagetables ");
console.log(!vegetables.includes('carrot'));
