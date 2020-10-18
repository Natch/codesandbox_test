/**
 * アロー関数
 */

// 従来の記法
function func1(str) {
  return str;
}

console.log(func1("従来の記法"));

// アロー関数 - ベーシック
// const func2 = (str) => {
//   return str;
// };

// アロー関数 - 単一のreturn
const func2 = (str) => str;

console.log(func2("arrow function"));

// アロー関数使用例
const func3 = (num1, num2) => num1 + num2;

console.log(func3(10, 20));
