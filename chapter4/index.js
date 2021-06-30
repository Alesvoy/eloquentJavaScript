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

function reverseArray (arr) {
    let newArr = [];

    while(arr.length > 0){
        let i = arr.pop();
        newArr.push(i);
    }

    return newArr;
}

let test = reverseArray([1,2,3,4]);

for(let i = 0; i < test.length; i++){
    console.log(test[i]);
}