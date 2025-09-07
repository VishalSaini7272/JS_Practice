//   // * printing the any diamond from this method(prefer this method):-
// //   (*Pls use this method for any diamond printing*)

// 	let n =5;
	
// 		for (let i=1;i<=n;i++){
// 			let row = "";
// 			for(let j=1;j<=n-i;j++){
// 				row = row + "  ";
// 			}
// 				for(let k=1;k<=i*2-1;k++){
//                  row = row + "* ";
// 				}
// 			console.log(row);
// 			}
// 			for(let i=n-1;i>=1;i--){
// 				let row = "";
// 				for(let j=1;j<=n-i;j++){
// 					row = row + "  ";
// 				}
// 				for(let k=1;k<=i*2-1;k++){
// 					row = row + "* ";
// 				}
// 				console.log(row);
// 			}






// // * this is also a method of any diamond ( this is also second method prefer.):-
// (but don't use this method)
// // let n =10;
// for(let i=1; i<=n; i++){
//   let row ="";
//   for(let j=1; j<=n-i;j++){
//     row = row+"  ";
//   }
//   for(let k=1;k<=i*2-1;k++){
//     row = row + "* ";
//   }
// //   console.log(row);
// }
// for(let i=1; i<=n; i++){
//   let row ="";
//   for(let j=1; j<=i;j++){
//     row = row+"  ";
//   }
//   for(let k=1;k<=2*(n-i)-1;k++){
//     row = row + "* ";
//   }
// //   console.log(row);
// }




// // * pls prefer this method of any pyramid(method):-

    //   let n =5;
	
	// 	for (let i=1;i<=n;i++){
	// 		let row = "";
	// 		for(let j=1;j<=n-i;j++){
	// 			row = row + "  ";
	// 		}
	// 			for(let k=1;k<=i*2-1;k++){
    //              row = row + "* ";
	// 			}
	// 		console.log(row);
	// 		}




//     // * for right side turn pyramid:-

    // let n =5;
	
	// 	for (let i=1;i<=n;i++){
	// 		let row = "";
	// 		for(let j=1;j<=i;j++){
	// 			row = row + "* ";
	// 		}
	// 		console.log(row);
	// 		}

	// 		for(let i=n-1;i>=1;i--){
	// 			let row = "";
	// 			for(let j=1;j<=i;j++){
	// 				row = row + "* ";
	// 			}
	// 			console.log(row);
	// 		}


//  print the right angle traingle.

// let n = 5;
// for (let i=1; i<=n; i++){
// let row = ""
//     for(let j=1; j<=i; j++){
//         row = row + "* ";
//     }
//     console.log(row);
// }


// print the numbers pattern in (right angle traingle).

// let n=5;
// for(let i=1;i<=n;i++){
// let row = "";
// for(let j=1;j<=i;j++){
// 	row = row + `${j} `;
// } 
// console.log(row);
// }


// print the reverse number/star.

// let n = 5;
// for(let i=n;i>=1;i--){
// 	let row = "";
// 	for(let j=1;j<=i;j++){
// 		row = row + `${j} `;
// 	}
// 	console.log(row);
// }



//Continue alphabets character printing:-

// let n =5;
// for(let i=1;i<=n;i++){
//   let ch = String.fromCharCode(64+i);
//   let row = "";
//   for(j=1;j<=i;j++){
//     row = row + ch;
//   }
//   console.log(row)
// }


//Print Alphabets printing :-

// let n =5;
// for(let i=0;i<n;i++){
//     let row = "";
//     for(let j=0;j<=i;j++){
//       let char = 65 + (i+j);
//        row = row + String.fromCharCode(char);
//     }
// console.log(row)
//   }
