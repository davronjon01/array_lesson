"use strick";

const arr = [1, 2, 3, 4,];


// arr.unshift(0);
// console.log(arr);

arr.shift();
console.log(arr);


// --------- massivga qoshish va olib tawaw 

// arr.pop();

// arr.push(5);

// console.log(arr);


// -------- 

// for(let i = 0; i < arr.length; i++) {
//     console.log("HI" + arr[i]);
// }


// for(let key of arr) {
//     console.log(arr);
// }

// const colors = ["red", "black", "crimson"];

// colors.forEach(function (item, index, arr) {
//    console.log(item, index, arr);
// });

/// ----------------------------

// const question = prompt("", "");

// const answers = question.split(", ");

// console.log(answers.join(";"));


// ----------

const number = [2, 3, 12, 43, 23];
number.sort(sortArray);
console.log(number);

function sortArray(a, b) {
    return a - b;
}