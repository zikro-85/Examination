const q1: number = 9;
for(let i:number = 1; i <= 10; i++){
  console.log(`${q1} * ${i} = ${q1 * i}`
)};

const q2: string = "a man, a plan, a canal, panama";
const pureAlpha: string = q2.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
let palindrome: string = pureAlpha.split("").reverse().join("");

console.log(palindrome === pureAlpha ? "palindrome" : "bukan palindrome");

const q3: number = 1000000;
const km: number = q3/1000000;
console.log(`${q3} cm sama dengan ${km} km`);

const q4: number = 1000;
const rupiah: string = q4.toLocaleString();
console.log(`Rp.${rupiah},00`);

const q5: string = "Hello world!";
console.log(q5.replace("ell", ""));

const q6: string = "hello world";
const capital: string = q6.replace(/\b\w/g, char => char.toUpperCase())
console.log(capital)


const q7: string = 'The QuiCk BrOwN Fox'
const swap : string = 
q7.split("")  
  .map(char => 
    char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase())
  .join(""); 
  console.log(swap)


  