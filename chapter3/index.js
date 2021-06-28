// Minimum

// function giveMin (a, b) {
//     if(a < b){
//         return a;
//     } else {
//         return b;
//     }
// }

// console.log(giveMin(18,9));

// Recursion

// function isEven (x) {
//     x = Math.abs(x);
//     if (x === 0) {
//         return 'Even'
//     }else if (x === 1){
//         return 'Odd'
//     } else {
//         return isEven(x - 2);
//     }
// }

// console.log(isEven(-50));

// Bean Counting

// function countBs (str) {
//     return countChar(str,'B');
// }

// function countChar (str, chr){
//     count = 0;
//     for(let i = 0; i < str.length; i++){
//         if(str[i] === chr){
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countBs('BBBBaaaB'));
