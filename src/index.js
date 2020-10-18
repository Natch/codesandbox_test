/**
 * 分割代入 オブジェクト
 *
 */
// const myProfile = {
//   name: "mario",
//   age: 45
// };

// const message = `my name is ${myProfile.name}, age is ${myProfile.age}`;
// console.log(message);

// const { name, age } = myProfile;
// const message2 = `my name is ${name}, age is ${age}`;
// console.log(message2);

/**
 * 分割代入 配列
 */

const myProfile = ["mario", 45];
const [name, age] = myProfile;
const message3 = `my name is ${name}, age is ${age}`;
console.log(message3);
