// Your code here.

function isEven(number) {
  console.log("-------")
  console.log("start", number)
  if (number == 1) {
    console.log(number)
    return true
  } else if (number == 0) {
    console.log(number)
    return false
  } else {
    number = number - 2
    console.log("after substraction", number)
    return isEven(number)
  }
}

console.log(isEven(2));
//console.log(isEven(50));
// → true
// console.log(isEven(75));
// → false
// console.log(isEven(-1));
// → ??