"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var division_1 = __importDefault(require("./division"));
var number = {
    MAX_SAFE_INTEGER: 100000,
    caseinArray: false
};
//creates an array
var array = [];
/**
 * This function generates random numbers
 * @param max the highest value of numbers acceptable
 * @returns random numbers from 0 to highest value of numbers acceptable
 */
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
for (var index = 0; index < 100; index++) {
    array.push(getRandomInt(number.MAX_SAFE_INTEGER));
}
// Final printing of random numbers
console.log("Random Numbers: ", array);
//creates an arrayEven
var arrayEven = [];
// Sorts numbers divisible by 2 and push them into arrayEven
division_1.default.divisionNo(array, arrayEven, 2);
// Final printing of Even Numbers  
console.log("Even Numbers: ", arrayEven);
console.log("Divided by 2:", arrayEven);
//creates an arrayDiv4
var arrayDiv4 = [];
// Sorts numbers divisible by 4 and push them into arrayDiv4
division_1.default.divisionNo(array, arrayDiv4, 4);
// Final printing of Numbers divided by 4
console.log("divided by 4: ", arrayDiv4);
//creates an arrayDiv6
var arrayDiv6 = [];
// Sorts numbers divisible by 6 and push them into arrayDiv6
division_1.default.divisionNo(array, arrayDiv6, 6);
// Final printing of Numbers divided by 6  
console.log("divided by 6: ", arrayDiv6);
//creates an arrayDiv8
var arrayDiv8 = [];
// Sorts numbers divisible by 8 and push them into arrayDiv8
division_1.default.divisionNo(array, arrayDiv8, 8);
// Final printing of Numbers divided by 8  
console.log("divided by 8: ", arrayDiv8);
//creates an arrayOdd
var arrayOdd = [];
// Sorts numbers that are not divisible by 2 and push them into arrayOdd
array.forEach(function (el) {
    var b = 2;
    if (el % b !== 0) {
        arrayOdd.push(el);
    }
});
// Final printing of Odd Numbers  
console.log("Odd numbers: ", arrayOdd);
//creates an arrayDiv7
var arrayDiv7 = [];
// Sorts odd numbers divisible by 7 and push them into arrayDiv7  
division_1.default.divisionNo(arrayOdd, arrayDiv7, 7);
// Final printing of Odd Numbers divided by 7
console.log("divided by 7: ", arrayDiv7);
