//Write a code to check whether the number is odd or even
//Example: 25 → odd number, 2 → even number

const question1: number = 25;
const a1: string = question1 % 2 === 0 ? 'bilangan genap' : 'bilangan ganjil';

console.log(a1);

//Write a code to check whether the number is prime number or not
//Example: 7 → 7 is a prime number
//Example: 6 → 6 is not a prime number

const question2: number = 5;
let isPrime: boolean = question2 > 1 ? true : false;

for(let i = 2; i < question2; i++){
  if (question2 % i === 0){
    isPrime = false
    break
  } 
}
const a2: string = isPrime ? "bilangan prima" : "bilangan komposit"
console.log(a2)

//Write a code to find the sum of the numbers 1 to N
//Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
//Example: 3 → 1 + 2 + 3 = 6

const question3: number = 5;
let sumNumber: number = 0;

for (let i = 1; i <= question3; i++) {
  sumNumber += i;  
}

console.log(sumNumber)

//Write a code to find factorial of a number
//Example: 4! → 4 x 3 x 2 x 1 = 24
//Example: 6! → 6 x 5 x 4 x 3 x 2 x 1 = 720

const question4: number = 6
sumNumber = 1

for (let i = question4; i > 0; i--){
  sumNumber *= i
}

console.log(sumNumber)

//Write a code to print the first N fibonacci numbers
//Example: 15 → 610

const question5: number = 15

let fibPrevious: number = 0
let fibCurrent: number = 1
let fibNext;

for (let i = 0; i <= question5; i++){
  fibNext = fibCurrent + fibPrevious 
  fibCurrent = fibPrevious 
  fibPrevious = fibNext
}

console.log(fibCurrent)