/*  1. Write a code to find area of rectangle
      a. find the formula to count the area of a rectangle which is (area = lenght*width);
      b. define lenght and width value and put that value into variables
      c. combine those variables into formula that have been shown in point (a) and make a new variable 
         on it to represent the area of an rectangle
      d. show that new variable into the console
*/
let rectangleLenght: number = 5;
let rectangleWidth: number = 3;
const rectangleArea: number = rectangleLenght * rectangleWidth;
console.log(rectangleArea);

/*  2. Write a code to find perimeter of rectangle.
      a. find the formula to count the perimeter of a rectangle which is {perimeter = 2*(lenght+width)};
      b. define lenght and width value and put that value into variables
      c. combine those variables into formula that have been shown in point (a) and make a new variable 
         on it to represent the area of an rectangle
      d. show that new variable into the console
*/
rectangleLenght = 5;
rectangleLenght = 3;
const rectanglePerimeter: number = 2 * (rectangleLenght + rectangleWidth)
console.log(rectanglePerimeter);

/*  3. Write a code to find Write a code to find diameter, circumference and area of a circle.
      a. find the formula => 
          - diameter = radius * 2; 
          - circumfrence = π * diameter;
          - area = π * radius squared
      b. put that value into variables
          - to put π value we can add Math.PI() function
          - to exponentiate our number we can add operator (**) with (base ** exponent) represent base to 
            the power of exponent
      c. combine those variables into formula that have been shown in point (a) and make a new variable 
         on it to represent our order
          - to round our number to the third decimal you can the use Math.round() function
          - Multiply our number by 1000 to shift the decimal point three places to the right.
          - Use Math.round() to round the result to the nearest integer.
          - Divide the result by 1000 to shift the decimal back to its original position
          - then put the rounded number into a variable
          - if you want to round your number to the second decimal, then you could multiply and divide 
            your number by 100, if the fourth decimal then it's 10000, so on and so forth.
      d. show that new variable into the console
*/
const circleRadius: number = 5;

const circleDiameter: number = circleRadius * 2;
const circleCircumfrence: number = circleRadius * Math.PI;
const circleArea: number = (circleRadius ** 2) * Math.PI;

const circleCircumfrenceRounded: number = Math.round(circleCircumfrence * 1000) / 1000; // rounded to the 3rd decimal
const circleAreaRounded: number = Math.round(circleArea * 1000) / 1000; // rounded to the 3rd decimal

  
console.log(circleDiameter);
console.log(circleCircumfrenceRounded);

/*  4. Write a code to find angles of triangle if two angles are given.
      a. the sum of the triangle's angles is 180
      b. if two angles are known, then we could know the third by subtracting 180 to 
         the sum of two known angles.
      c. put all angles to variable, then arrange those variable to formula we already known
      d. show that new variable into the console
*/
const triangleAngle1: number = 80;
const triangleAngle2: number = 65;
const triangleAngle3: number = 180 - (triangleAngle1 + triangleAngle2);

console.log(triangleAngle3);

/*  5. Write a code to convert days to years, months and days 
       (Notes: 1 year : 365 days, 1 month : 30 days).
      a. 1 year is 365 days and 1 month is 30 days
      b. to know how many years in given amount of days, you can divide those days by 365 
         and ignore the remaining days
      c. after knowing the years you then can know the months by divide the remaining days 
         by 30 and ignore the rest
      d. to know how many numbers remain after a division you can use operator modullo 
         (x % y = remaining number)
      e. use modullo operator to know the remaining days (x % 365 % 30)
      f. put the result to a variable and show that new variable into the console
*/
const days: number = 400;

const years: number = Math.floor(days/365);
const months: number = Math.floor(days % 365 / 30);
const dayRemaining: number = Math.floor(days % 365 % 30);
console.log(`${years} tahun, ${months} bulan, ${dayRemaining} hari`);

/* 6.Write a code to get difference between dates in days
      a. decide which dates we want to know the difference between
      b. put each dates to a variable
      c. know the diffence by subtracting each date and use Math.abs method 
         to keep the result positive
      d. since the difference are shown in miliseconds, divide the result by (24*60*60*1000)
         to convert the result to days
      e. put the result in a variable and show the variable into the console
*/

const date1: any = new Date('2022-01-20'); 
const date2: any = new Date('2022-01-22');

const daysDifference: any = Math.abs(date1 - date2)/(24*60*60*1000);

console.log(daysDifference);
