// Looping triangle

// let str = "#";
// let count = 0;

// while (count < 7) {
//   console.log(str);
//   str += "#";
//   count++;
// }

// FizzBuzz

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 == 0) {
//     console.log("Fizz");
//   } else if (i % 5 == 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// Chess Board

let str = " ";
let lastChar;
let size = 8;

for (let i = 0; i < size; i++) {
  while (str.length < size) {
    if (str[str.length - 1] === "#") {
      str += " ";
      lastChar = " ";
    } else if (str[str.length - 1] === " ") {
      str += "#";
      lastChar = "#";
    }
  }
  console.log(str);
  str = lastChar;
}
