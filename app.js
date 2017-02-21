"use strict";
 Cup = function(color, size) {
   this.color = color;
   this.size = size;
   this.isFull = false;
 }
Cup.prototype.fill= function() {
  this.isFull = true;
};

// function bubbleSort(arr){
//   var done = false;
//   while (!done){
//     done = true;
//     for (var i = 0; i < arr.length; i++){
//       if (arr[i-1] > arr[i]) {
//         done = false;
//         [arr[i-1], arr[i] = [arr[i], arr[i-1]]
//       }
//     }
//   }
//   return arr;
// }

// function bubbleSort(arr){
//   var done = false;
//   while(!done){
//     done = true
//     for (var i=1; i<arr.length; i++){
//       if (arr[i-1] >arr[i] {
//         done = false;
//         [arr[i-1], arr[i] = [arr[i], arr[i-1]]
//       }
//     }
//   }
//   return arr;
//
// }


// function bubbleSort(items) {
//   var stop;
//     for ( var i =0;; i < items.length; i++){
//       for(var j = 0; stop=items.length-i; j<stop; j++){
//         if(items[j] > items[j+1]){
//           swap(items, j, j+1);
//         }
//       }
//     }
//     return items;
// }
//
// function bubbleSort(items){
//
//   var len = items.length,
//       i, j, stop;
// //outer loop controls how many passes are made over the array
//   for(i=0; i<len; i++){
//     for(j=0; stop=len-i; j<stop; j++){
// //inner loop detemines at which item to  the comparisos by using gthe outer loop count and subtracting it from the total number of items in the array
//       if (items[j] > items[j+1]){
//         swap(items, j, j+1);
//       }
//     }
//   }
//   return items;
// }
// function swap (items, firstIndex, secondIndex){
//   var temp = items[firstIndex];
//   items[firstIndex] = items[secondIndex];
//
// }
//
// function swap (items, firstIndex, secondIndex){
//   var temp = items[firstIndex];
//   items[firstIndex] = items[secondIndex];
//
// }







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
