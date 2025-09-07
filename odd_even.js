
//  print the numbers from 1 to 10.

for(let i = 1; i<=10; i++){
// console.log(i);
}



// print sum of all the natural numbers upto 10.
let sum = 0;
for(let i = 1; i<=10; i++){
sum = sum + i;
}
// console.log(sum);




// print all even number from 0 to 100.
for(let i=0;i<=100; i++){
if (i%2==0){
    // console.log(i);
}
}



// print all even number from 100 to 0 backward.
for(let i = 100; i>=0; i--){   
if (i%2 == 0){

    // console.log(i);
}
}


// print all odd number from 100 to 0 backward.

for(let i=100;i>=0;i--){
    if(i%2!==0){
// console.log(i);
    }
}


// write a program to add 5 oadd numbers in a array.
// function oddArray (n){
//     let result = [];
//     for(let i=1;i<=(2*n-1);i=i+2){
// result.push(i);
//     }
//     return result;
// }
// console.log(oddArray(5));  //output ---> [1,3,5,7,9]


// addArray = [1,3,5,7,9] find the total sum of this odd array.
let oddArray = [1,3,5,7,9]
    let result = 0;
    for(let i=0;i<oddArray.length;i++){
        result = result + oddArray[i];
    }
    console.log(result);


    //Print the string reserve without in-built method.

    // let str = "hello";
// let row = "";
// for(i=str.length-1;i>=0;i--){
// row = row + str[i];
// }
// console.log(row);




    //Print the string reserve with in-built method.

    // let str = "hello";
   // let str ="hello";
   // let reversed = str.split('').reverse().join('');
  // console.log(reversed);  

  //check the number is palindrome no. or not ?

// let num = "121";
// reversed = num.toString().split('').reverse().join('');
// if(num === reversed){
//   console.log("true");
// }else{
//   console.log("false")
// }


//check the str is palindrome no. or not ?

// let str = "level";
// reversed = str.split('').reverse().join('');
// if(str === reversed){
//   console.log("true");
// }else{
//   console.log("false")
// }
