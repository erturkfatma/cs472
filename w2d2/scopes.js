//Sample Comments

// function main() {//var x;
//     console.log("x1 is:" + x);//undefined? x is declared but not yet assigned,
//     //there is local varaible with same name.
//     x = 20;
//     console.log("x2 is:" + x);//20? assign local variable
//     if (x > 0) {
//         var x = 30;//
//         console.log("x3 is:" + x);//30?local variable is reassigned.
//     }
//     console.log("x4 is:" + x);//30 (209) var is function scope, so you can read it out of block
//     var x = 40;
//     var f = function (x) {
//         console.log("x5 is:" + x);//50 x is parameter, x is called with 50(217)
//     };
//     f(50);
//     console.log("x6 is:" + x);//40 (213)local variable is assigned 40,
// }
// main();
// console.log("x7 is:" + x);//10 (213, 209) local declaration of x inside the function.



// 1. 
// let grapes = "green"; 
// function fruits(){ 
//      return function(message){ 
//          return grapes; 
//      } 
//  } 
// console.log(fruits()());  // green - grapes is global variable defined as global and assigned green 


// 2. 
// let x = 10; 
// function globalVar(){ 
//    return function(){ 
//         return x; 
//       } 
//  } 
//  x = 20; 
//  let fn = globalVar(); 
//  console.log(fn ()); // 20 - x is a global variable and assigned 20. globalVar function will be return global x. that why output will be 20



 

// 3. 
// function sport(message){ 
//      message = "Hi"; 
//      return function(message){ 
//          return message; 
//      } 
// } 
// let sportFn = sport("Hello"); 
// console.log(sportFn ()); // undefined - because the sportFn function include parameterized function, but when executing here it was run without parameters. so undefined came
 

// // 4. 
// function test(x){ 
//     x = 10; 
//     x++; 
//     return function(){ 
//         return x++; 
//     } 
// } 
// console.log(test(2)()); // 11 - local variable is reassigned inside of the function and incremented by 1, so X gets value 11
 

// 5.
// function car(){ 
//     let color = "white"; 
//     function seat(){ 
//         let color = "brown"; 
//         console.log(color)//it doesn't write anything as output because the function is not executed
//     } 
//     console.log(color)//white - local variable named 'color' is assigned a value of white
// } 
// car("black") 


// 6. 
// function department(){ 
//     let numberOfDepartments = 5; 
//     console.log(numberOfDepartments); //5 - local variable is assigned 5
//     function software(){ 
//         let language = "javascript"; 
//         console.log(language) // it doesn't write anything as output because function didn't call
//     } 
//     console.log(language) // undefined - language is not defined
// } 
// department() 



 

// // 7. 
// function department(language){ 
//     let numberOfDepartments = 5;  
//     console.log(numberOfDepartments) //5 - local variable is assigned 5
//     function software(){ 
//         let language = "javascript"; 
//         console.log(language); // it doesn't write anything as output because function didn't call
//     } 
//     console.log(language) // java - "java" is sent as parameter while running the function
// } 
// department("java"); 

