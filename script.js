// 1. write a function that greets, someone, taking name for an input
const greeter = (name) => 
  "Hello " + name;
console.log(greeter("Lisa"));


// 2. write a function which returns the type of the argument we pass in 
const checkType = (x) => {
if (x >= 0) {
    return "number";
  } else if (x < 0) {
    return "negative number";
  } else if (x = " "){
    return "string";
  } else {
  return "undefined";
  }
  }

console.log(checkType(2324));
console.log(checkType(-23));
console.log(checkType("Hello World"));
console.log(checkType([5, "array", 23]));
//array comes back as undefined, because arrays are neither, string nor number, but can hold multiple arguments


// 3. write a function which returns the length of the string we pass in
const checkLength = (x) => 
  x.length;
console.log(checkLength("Founders and Coders"));
//.length does not return length of arrays
console.log(checkLength[1, "March", 1995]);


// 4. write a function that returns the sum of two numbers
const add = (x,y) => 
  x + y;
console.log(add(3, 5));
let result = add(12, 4);
console.log(result);
console.log(add(result, 15));


// 5. Write a function that accepts four arguments, each will be a number. The function should add the first two numbers together; add the third and fourth numbers; and return the result of multiplying both sums together
const addAndMultiply = (a, b, c, d) => 
  (a+b) * (c+d);
console.log(addAndMultiply(3, 4, 5, 6));
console.log(addAndMultiply(-10, 1, 3, -6));


// 6. Write a function which accepts two numbers. The function should return the larger number.
//need to compare value of x to y
// x-y > 0 or y-x > 0? 
const checkLarger = (x, y) => 
  {if (x - y > 0 ){
    return x;
  } else if (x - y == 0) {
    return "equal";
  } else {
    return y;
  }}
console.log(checkLarger(8, 4));
console.log(checkLarger(2, 10));
console.log(checkLarger(9, 9));


// 7. Write a function which accepts an array as an argument. Each item in the array will be a number. The function should add all the numbers in the array and return the result.
//function needs to loop through all the elements in an array and then add all of them together
const sumElements = (arr) => {
  for (let i = 0; i < arr.length; i++){
    let sum = 0;
    sum += arr[i];
    return sum;
  }};
console.log(sumElements([1, 2, 3, 4, 5]));
//This only returns 1, im not exactly sure why though
//I googled and found out about the reduce method
let array = [1, 2, 3, 4, 5];
let sumTotal = array.reduce(function (array, number) {
    return array + number;
});
console.log(sumTotal); 


// 8. Write a function which accepts one number and returns the square of that number
const square = (x) =>
  x ** 2;
console.log(square(3));
console.log(square(4));


// 9. write a function which accepts one number and returns whether the number is even or odd
//use division remainder %, if 0 return even, else odd
const evenOdd = (x) =>
  x % 2 ==0 ? "even" : "odd";
console.log(evenOdd(6));
console.log(evenOdd(7));


// 10. Write a function which accepts an array as an argument. The function should add up all the positive numbers from the array and return the sum. If there are no positive numbers to sum, return zero.
//if there are only negative numbers, return 0

numbers = [2, 3, 5, -2, -4];

//filter out negative numbers and put in new array
const positiveNumbers = numbers.filter(number => number > 0);
console.log(positiveNumbers);

//add up new array
//if positiveNumber is > 0 return sum; else return 0;
//can i nest an if statement inside a callback function?

const positiveSum = positiveNumbers.reduce((positiveNumbers, number) => positiveNumbers + number);
console.log(positiveSum);

const returnsNum = (numbers) => {
  if (positiveSum > 0) {
  return (positiveSum);
} else {
  return (0);
};
}
console.log(returnsNum(numbers));

