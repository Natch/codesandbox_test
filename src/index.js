/**
 * スプレッド構文
 */
const array1 = [1, 2];
const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(...array1);

const array2 = [1, 2, 3, 4, 5];
const [num1, num2, ...array3] = array2;
console.log(num1);
console.log(num2);
console.log(array3);

const array4 = [10, 20];
const array5 = [30, 40];

const array6 = [...array4];
console.log(array6);

const array7 = [...array4, ...array5];
console.log(array7);
