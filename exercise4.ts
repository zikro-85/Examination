/* 1. Create a function that can create a triangle pattern according to the height we provide like the following :
1
1  2
1  2  3
1  2  3  4
1  2  3  4  5

Parameters : height → triangle height
Example input: 5
*/

function pyramidNumber(height: number) {

  for (let i: number = 1; i <= height; i++) {
      let row: string = ''; 

      for (let j: number= 1; j <= i; j++) {
          row += j + ' '; 
      }
     console.log(row.trim());
  }
}
let exampleInput: any = 5;
pyramidNumber(exampleInput);

/* Create a function that receiving array as input, and this function can find maximum value in array without using built in method in javascript.
Parameters : array
Output: number

Example input: [10, 55, 79, 32]
Example output: 79
*/

function findMaxValue(arrInput) {
  let maxValue = arrInput[0];
  for (let i = 0; i < arrInput.length; i++) {

      if (arrInput[i] > maxValue) {
          maxValue = arrInput[i];
      }
  }

  return maxValue; 
}

exampleInput = [10, 55, 79, 32];
let exampleOutput = findMaxValue(exampleInput);
console.log(exampleOutput)

/* Create a function that can create a triangle pattern according to the height we provide like the following :
01
02  03
04  05  06
07  08  09  10

Parameters : height → triangle height
*/

function pyramidNumber2(height) {
  let currentNumber: number = 1; 
  
  for (let i = 1; i <= height; i++) {
      let row = ''; 
      
      for (let j = 1; j <= i; j++) {
          row += currentNumber < 10 ? '0' + currentNumber : currentNumber;
          
          if (j < i) {
              row += ' ';
          }

          currentNumber++;
      }
      console.log(row);
  }
}

exampleInput = 4
pyramidNumber2(exampleInput)

/* Create a function that can loop the number of times according to the input we provide, and will replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with "FizzBuzz".
Parameters : n → total looping
Example: n = 6 →1, 2, Fizz, 4, Buzz, Fizz
Example: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz 
*/

function fizzBuzz(n: number): string {
    let result = ''; 
    
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result += 'FizzBuzz';
        } else if (i % 3 === 0) {
            result += 'Fizz';
        } else if (i % 5 === 0) {
            result += 'Buzz';
        } else {
            result += i.toString();
        }
      
        if (i < n) {
            result += ', ';
        }
    }
    
    return result;
}

exampleInput = 15
exampleOutput = fizzBuzz(exampleInput)
console.log(exampleOutput)

/*
Create a function to calculate Body Mass Index (BMI)
Formula : BMI = weight (kg) / (height (meter))²
Parameters : weight & height
Return values :
< 18.5 return “less weight”
18.5 - 24.9 return “ideal”
25.0 - 29.9 return “overweight”
30.0 - 39.9 return “very overweight”
> 39.9 return “obesity”
*/

function calculateBMI(weight: number, height: number): string {

  let bmi = weight / (height * height);

  if (bmi < 18.5) {
      return "less weight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
      return "ideal";
  } else if (bmi >= 25.0 && bmi <= 29.9) {
      return "overweight";
  } else if (bmi >= 30.0 && bmi <= 39.9) {
      return "very overweight";
  } else {
      return "obesity";
  }
}

let weight = 90
let height = 1.8
exampleOutput = calculateBMI(weight, height)
console.log(exampleOutput)

/*
Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]
*/

function removeOddNumbers(arr: number[]): number[] {
  return arr.filter(num => num % 2 === 0);
}

exampleInput = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
exampleOutput = removeOddNumbers(exampleInput)
console.log(exampleOutput)

/*Write a function to split a string and convert it into an array of words
Example : “Hello World” → [“Hello”, “World”]
*/

function splitStringIntoWords(str: string): string[] {
  return str.split(" ");
}

exampleInput = "Hello World"
exampleOutput = splitStringIntoWords(exampleInput)
console.log(exampleOutput)