function largest(nums) {
    return nums.reduce((x, y) => y >= x ? y : x);
}
console.log(largest([3, 7, 9, 8, 1]));


function lettersWithStrings(arr, char) {
    return arr.filter(string => string.indexOf(char) != -1);
}
console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!"));


function isDivisible(num1, num2) {
    return num1 % num2 === 0 ? true : false;
}
console.log(isDivisible(4, 2)); // => true
console.log(isDivisible(9, 3)); // => true
console.log(isDivisible(15, 4)); // => false


// The '.reduce' method reduces an array to a single value
// It is a loop that runs the function once for every item in the array
// in the end it returns only the first parameter which is called
// the accumulator or total.
// More verbose version:
// return nums.reduce((largestNum, currentNum) => {
//     return (currentNum >= largestNum) ? currentNum : largestNum
// });
