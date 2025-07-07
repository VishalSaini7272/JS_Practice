// // write a program to add 5 odd numbers in ana array.

// // function oddArray(n) {
// //   let result = [];
// //   for (let i = 1;i<=n*2-1;i=i+2) {
// //         result.push(i);
// //     }
// //     return result;
// //   }
// // console.log(oddArray(5));




// // write a program to add 5 even numbers in ana array.

// // function evenArray(n) {
// //   let result = [];
// //   for (let i = 0;i<=n*2-1;i=i+2) {
// //         result.push(i);
// //     }
// //     return result;
// //   }
// // console.log(evenArray(5));



// // * find the largest number in the given array:-

// // let numbers =[10,20,30,50,80,60,90,100,101];
// // let max = numbers[0];
// // for(let i=0;i<numbers.length;i++){
// //     if (max,numbers[i]){
// //         max=numbers[i];
// //     }

// // }
// // console.log(`max value is:${max}`);

// ------------------------------------xxxxxx-------------x----------x-x-x-x-x-x--------------------
// (2D -Array's topic start)

//  * write a program to double each element of the matrix .

// let arr =[
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ];
// for(let i=0;i<arr.length;i++){
//   for(let j=0;j<arr[i].length;j++){
//     arr[i][j]= arr[i][j]*2;
//   }
// }
// console.log(arr);


// * Boundary traversal of matrix, print the boundary elements in a clock-wise direction. 

// [
// [5, 4, 6, 3]
// [1, 4, 3, 5]
// [5, 1, 9, 6]
// ]
// function boundaryTraversal(m, n, matrix) {
  
// 	// Write your code here
//   let result =[];
//   // top row(left to right)
//   for(let i = 0; i<n; i++){
//     result.push(matrix[0][i]);
//   }
//   // right column (top to bottom)
//   for(let i=1;i<m;i++){
//     result.push(matrix[i][n-1]);
//   }
// 	//  bottom row(right to left)
//   if(m>1){
//     for(let i=n-2;i>=0;i--){
//       result.push(matrix[m-1][i]);
//     }
//   }
// //  left column (bottom to top)
// if(n>1){
//   for(let i=m-2;i>=1;i--){
//     result.push(matrix[i][0]);
//   }
// }
// //  each element in a new line (\n)
// console.log(result.join('\n'));
// }