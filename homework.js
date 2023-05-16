//Homework

//Complete the Following Coding Questions in JavaScript.

//Question #1

//Write a function that takes a string (sentence) and an array of strings (in this example dog_names) and check if one of the list members (dog names) is in the string (sentence). Return an array of the dog names found in the array

//hint: filter, includes

//for information on includes see:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

var dogNames = ["Max","Fido","Gizmo","Nala"]

//Test Cases
let testString1 = "Hello, my dog is Max, and they have purple eyes!"
//Expect ['Max']

let testString2 = "My Dog is fast, her name is Tippi"
//Expect []

let testString3 = "Come here Fido and Gizmo come here"
//Expect['Fido','Gizmo']
function problem_1(aString, anArray) {
    return anArray.filter((name) => aString.includes(name))
}
console.log(problem_1(testString1, dogNames))
console.log(problem_1(testString2, dogNames))
console.log(problem_1(testString3, dogNames))
//Question #2

//Write a Function using map to convert an array of number from inches to feet

//1 foot = 12 inches

const heightsInInches = [66, 64, 60, 52, 72, 80, 51]
// Expect
// [
//   5.5,
//   5.333333333333333,
//   5,
//   4.333333333333333,
//   6,
//   6.666666666666667,
//   4.25
// ]
function problem_2(anArray) {
    return anArray.map((height) => height/12)
}
    
console.log(problem_2(heightsInInches))

///Question #3

//Using the Ternary Operator and map create an array that adds is eating pizza to every name from the array tmnt that ends with o and add is being rude to any other name.

const tmnt = ["Leonardo", "Michelangelo", "Donatello", "Raphael"]
// expect
// [
//   'Leonardo is eating pizza',
//   'Michelangelo is eating pizza',
//   'Donatello is eating pizza',
//   'Raphael is being rude'
// ]
function problem_3(anArray) {
    return anArray.map((name) => name.endsWith("o") ? `${name} is eating pizza` : `${name} is being rude`)
}
console.log(problem_3(tmnt))

//Question #4

//Write an arrow function to find the max number in a list. Do not use the Math.max Function.

//The List will be all positive numbers
let findAMax=[123,5436,45784,1234,34,65,234125,645,3452,13216,49]
//Expect
// 234125
const problem_4 = anArray => anArray.reduce((max, num) => num > max ? num : max)
console.log(problem_4(findAMax))
//Question #5

//At the end of the third Iteration (the third time the loop has ran) of this for Loop define the state of all the variables used in the cell

//var bingo = "B-I-N-G-O"
//var ognib = ""
// for(let i=bingo.length-1; i>=0; i--){
//     ognib+=(bingo[i])
//     //define state from this line on the third iteration
// }
//bingo = "B-I-N-G-O"

//ognib = "O-G"

// i value is 6


// Question #6

// Complete 3 Codewars problems using JavaScript, start with ones you have already solved in python. Paste a link hear to the 3 questions you completed

// 1:
https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript
function solution(str){
   list = []
   if (str.length % 2 == 0) {
         for (let i = 0; i < str.length; i+=2) {
              list.push(str[i] + str[i+1])
         }
         return list
   }
    else {
            for (let i = 0; i < str.length-1; i+=2) {
                list.push(str[i] + str[i+1])
            }
            list.push(str[str.length-1] + "_")
            return list
        }
}



// 2:
https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript
function openOrSenior(data){
    return data.map((member) => member[0] >= 55 && member[1] > 7 ? "Senior" : "Open")
}

// 3:
https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript
function XO(str) {
    let x = 0
    let o = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "x" || str[i] == "X") {
            x++
        }else if (str[i] == "o" || str[i] == "O") {
            o++
        }
    }
    return x == o
}

function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}
console.log(XO("xxoo"))