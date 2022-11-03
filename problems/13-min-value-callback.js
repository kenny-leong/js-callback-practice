/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/

function minValueCallback(arr, cb) {
    if(cb === undefined){

      return arr.reduce((acc, ele) => {
        if(acc > ele){
          return ele
        }

        return acc

      })
    }

    let emptyArr = [];
    for(let i = 0; i < arr.length; i++){
        emptyArr.push(cb(arr[i]))
    };


    return emptyArr.reduce((acc, ele) => {
      if(acc > ele){
        return ele
      }

      return acc

    })


}



console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
  module.exports = minValueCallback;
} catch(e) {
  return null;
}
