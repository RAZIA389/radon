

//  write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7]


//  let arr1 = [1, 2, 3, 5, 6, 7]
//  let total = 0;

//  arr1.forEach(function (arr1) {
//      total = total + arr1

//  })

//   let lastDigit= arr1.pop()
//    let consecutiveSum= lastDigit * (lastDigit+1) /2
//   let missingNumber= consecutiveSum - total
//    console.log  (missingNumber)



  
// -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33, 34, 35, 37, 38]

let arr2 = [33, 34, 35, 37, 38]
let len= arr2.length

let total = 0;

arr2.forEach(function (arr2) {
    total = total + arr2

})
  let firstDigit= arr2[0]
  let lastDigit= arr2.pop()
  let consecutiveSum= (len+1) * (firstDigit+lastDigit) /2
  let missingNumber= consecutiveSum - total
  console.log (missingNumber)



