"use strict";

 Cup = function(color, size) {
   this.color = color;
   this.size = size;
   this.isFull = false;
 }
Band.prototype.fill= fn() {
  this.isFull = true;
};





//O(1) example


// "use strict";
// an example of
//
// O(1)
//
// function hello() {
//     console.log(“Hello world”)
//
// }
//   var arr = [1,2,3,4,5,6];
//     for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// }
//
// //this is dependent on the number of iterations in this case would be 6
//
//
// //0(n^2);
//
// function exampleOfBigO2(){
//   for (var i = 0; i < array.length; i++) {
//         console.log(array[i]);
//   }
//     for (var j = 0; j < array.length; j++) {
//         console.log(array[j]);
//     }
// }
//
// //There are 2 different for loops so this is an example of 0(n^2);
//
//
// // function bigONExample (){
// //   var arr = [1,2,3,4,5,6];
// //   for (var i = 0; i < arr.length; i++) {
// //     console.log(arr[i]);
// //   }
// // }
// //
// // function findFirstItem(items) {
// //   var items = ["color", 1, 5, "Bob"];
// //   for (var i = 0; i < items.length; i++) {
// //     console.log(items[0]);
// //     return items[0];
// //   }
// }
// findFirstItem();
