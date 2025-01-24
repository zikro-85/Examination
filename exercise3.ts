/*Write a code to display the multiplication table of a given integer.
Example : Number → 9
Output : 
9 x 1
9 x 2
…
9 x 10
*/

const q1: number = 9;
for(let i:number = 1; i <= 10; i++){
  console.log(`${q1} * ${i} = ${q1 * i}`);
};

/*Write a code to check whether a string is a palindrome or not.
Example : ‘madam’ → palindrome*/

let q2: string = "madam";
q2 = "a man, a plan, a canal, panama";

const pureAlpha: string = q2.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
let palindrome: string = pureAlpha.split("").reverse().join("");
const answer2: string = palindrome === pureAlpha ? "palindrome" : "bukan palindrome"

console.log(answer2);

/*Write a code to convert centimeter to kilometer.
Example : 100000 → “1 km”*/

const q3: number = 1000000;
const km: number = q3/1000000;
const answer3: string = `${q3} cm sama dengan ${km} km`;

console.log(answer3);

//Write a code to format number as currency (IDR)
//Example : 1000 → “Rp. 1.000,00”


const q4: number = 1000;
const rupiah: string = q4.toLocaleString();
const answer4: string = `Rp.${rupiah},00`;

console.log(answer4);

//Write a code to remove the first occurrence of a given “search string” from a string
//Example : string = “Hello world”, search string = “ell” → “Ho world”

const q5: string = "Hello world!";
const search: string = "ell"
const answer5 = q5.replace(search,'') ;

console.log(answer5);

//Write a code to capitalize the first letter of each word in a string
//Example : “hello world” → “Hello World”

const q6: string = "hello world";
const capital: string = q6.replace(/\b\w/g, letter => letter.toUpperCase());

console.log(capital);

//Write a code to swap the case of each character from string 
//Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’

const q7: string = 'The QuiCk BrOwN Fox';
const swap : string = 
  q7.split("")  
    .map(letter => 
      letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase())
    .join(""); 

console.log(swap);

//Write a code to find the largest of two given integers
//Example : num1 = 42, num2 = 27 → 42

let num1: number = 42;
let num2: number = 27;
let hasil: string = num1 > num2 ? `${num1} lebih besar dari ${num2}` : `${num1} lebih kecil dari ${num2}`;

console.log(hasil);

//Write a conditional statement to sort three numbers
//Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42

num1 = 42;
num2 = 27;
let num3: number = 18;

if (num1 > num2) {
  let sort = num1;
  num1 = num2;
  num2 = sort;
};

if (num2 > num3) {
  let sort = num2;
  num2 = num3;
  num3 = sort;
};

if (num1 > num2) {
  let sort = num1;
  num1 = num2;
  num2 = sort;
};

console.log(num1,num2,num3);

//Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type.
//Example : “hello” → 1

const q9: any = 'hello';

if (typeof q9 === "string" ) {
  console.log(1);
}

else if (typeof q9 === "number"){
  console.log(2);
}

else{
  console.log(3);
}

//Write a code to change every letter a into * from a string of input
//Example : ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*y`

const q10: string = "An apple a day keeps the doctor away";
const answer10: string = q10.replace(/a/gi, '*');

console.log(answer10);