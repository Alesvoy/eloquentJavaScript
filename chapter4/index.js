// Sum of a range

// function range (start, end, step = 1){
//     let result = [start];

//     if(step < 0){
//         while(result[result.length - 1] > end){
//             start += step;
//             result.push(start);
//             if(result[result.length - 1] < end){
//                 result.pop();
//                 return result;
//             }
//         }

//         return result;
//     }

//     while(result[result.length - 1] < end){
//         start += step;
//         result.push(start);
//         if(result[result.length - 1] > end){
//             result.pop()
//             return result;
//         }
//     }

//     return result;

// }

// function sumArrays(arr){
//     let sum = 0;

//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i]
//     }

//     return sum;
// }

// let test = range(5,2, -1);

// for(let i = 0; i < test.length; i++){
//     console.log(test[i]);
// }

// Reversing an Array

// function reverseArray (arr) {
//     let newArr = [];

//     while(arr.length > 0){
//         let i = arr.pop();
//         newArr.push(i);
//     }

//     return newArr;
// }

// function reverseArrayInPlace(array) {
//     for (let i = 0; i < Math.floor(array.length / 2); i++) {
//       let old = array[i];
//       array[i] = array[array.length - 1 - i];
//       array[array.length - 1 - i] = old;
//     }
//     return array;
//   }

// let test = reverseArrayInPlace([1,2,3,4]);

// for(let i = 0; i < test.length; i++){
//     console.log(test[i]);
// }

// A List

// function arrayToList(arr) {
//   if (arr.length === 0) return { value: arr[0], rest: null };

//   const num = arr[0];
//   arr.shift();

//   return {
//     value: num,
//     rest: arrayToList(arr),
//   };
// }

// const list = arrayToList([1, 2, 3]);

// console.log(list);
