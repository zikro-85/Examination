const q1: number = 9;
for(let i:number = 1; i <= 10; i++){
  console.log(`${q1} * ${i} = ${q1 * i}`);
};


let q2: string = "madam";
q2 = "a man, a plan, a canal, panama";

const pureAlpha: string = q2.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
let palindrome: string = pureAlpha.split("").reverse().join("");
const answer2: string = palindrome === pureAlpha ? "palindrome" : "bukan palindrome"

console.log(answer2);

const q3: number = 1000000;
const km: number = q3/1000000;
const answer3: string = `${q3} cm sama dengan ${km} km`;

console.log(answer3);


const q4: number = 1000;
const rupiah: string = q4.toLocaleString();
const answer4: string = `Rp.${rupiah},00`;

console.log(answer4);


const q5: string = "Hello world!";
const search: string = "ell"
const answer5 = q5.replace(search,'') ;

console.log(answer5);


const q6: string = "hello world";
const capital: string = q6.replace(/\b\w/g, letter => letter.toUpperCase());

console.log(capital);


const q7: string = 'The QuiCk BrOwN Fox';
const swap : string = 
  q7.split("")  
    .map(letter => 
      letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase())
    .join(""); 

console.log(swap);


let num1: number = 42;
let num2: number = 27;
let hasil: string = num1 > num2 ? `${num1} lebih besar dari ${num2}` : `${num1} lebih kecil dari ${num2}`;

console.log(hasil);


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


const q10: string = "An apple a day keeps the doctor away";
const answer10: string = q10.replace(/a/gi, '*');

console.log(answer10);