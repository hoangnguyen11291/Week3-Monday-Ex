// const name = "parrot";
// const colors = ["red", "green", "blue", "yellow"];

// const bird = {
//   name: name,
//   colors: colors,
// };

// console.log(bird);

// 2.1 Shorthand object
// const name = "Parrot";
// const colors = ["Red", "Green", "Blue", "Yellow"];
// const talons = true;

// const bird = {
//   name: name,
//   colors: colors,
//   talons,
// };

// console.log(bird);

// 2.2
// const capital = "Hanoi";
// const continent = "Asia";

// const vietnam = {
//   capital,
//   continent,
// };

// console.log(vietnam);

// 2.3
// const wheelsCount = 4;
// const doorsCount = 4;
// const color = "black";

// const car = {
//   wheelsCount,
//   doorsCount,
//   color,
// };

// console.log(car);

// 3.1 Destructuring
// function getAverage() {
//   const obj = { x: 3.6, y: 7.8, z: 4.3 };
//   const { x, y, z } = obj;
//   return Math.floor((x + y + z) / 3.0);
// }
// console.log(getAverage());

// 3.2
// function getAddress() {
//   const address = {
//     city: "HCMC",
//     country: "Vietnam",
//     address: {
//       number: 12,
//       street: "Ton Dan",
//       district: "4",
//     },
//   };
//   const {
//     city,
//     country,
//     address: { street },
//   } = address;
//   return city === "HCMC" && country === "Vietnam" && street === "Ton Dan";
// }
// console.log(getAddress());

// 3.3
// function objectElements() {
//   const elements = [0, 1, 2, 3, 4, 5, 6, 7, 8];
//   const [, , , , fourth] = elements;
//   return { fourth };
// }
// console.log(objectElements([0, 1, 2, 3, 4, 5, 6, 7, 8]).fourth === 4);

// 3.4
// function getFoodItems() {
//   const food = [
//     ["carrots", "beans", "peas", "lettuce"],
//     ["apples", "mangos", "oranges"],
//     ["cookies", "cake", "pizza", "chocolate"],
//   ];
//   const [[carrot], [, mangos], [cookies]] = food;
//   return { carrot, mangos, cookies };
// }
// console.log(getFoodItems().mangos === "mangos");

// 3.5
// function getHistoricPrices(index) {
//   const bingo = index[0];
//   return bingo;
// }

// console.log(getHistoricPrices([true, false, true]));

// 3.6
// function getHistoricPrices(index) {
//   const bingo = index[0][0];
//   return bingo;
// }
// console.log(
//   getHistoricPrices([
//     [true, false],
//     [false, true],
//   ])
// );

// 3.7
// function getHistoricPrices(index) {
//   const bingo = index[0][0][0];
//   return bingo;
// }

// console.log(
//   getHistoricPrices([
//     [
//       [true, false],
//       [true, false],
//     ],
//   ])
// );

// 3.8
// function getHistoricPrices(index) {
//   const bingo = index[0][0][0];
//   return bingo;
// }

// console.log(getHistoricPrices([[[{}, {}]]]));

// 4.1 Rest & Spread
// function restParams(first, ...rest) {
//   console.log(first);
//   console.log(rest);
//   return first === "first" && rest[0] === "second";
// }
// console.log(restParams("first", "second"));

// 4.2
// function restParams2(first, ...rest) {
//   console.log(first);
//   console.log(rest);
//   return first === "first" && rest[0] === "second" && rest[1] === "third";
// }

// console.log(restParams2("first", "second", "third")); // CHANGE ME

// 4.3
// function restParams3(first, ...rest) {
//   console.log(first);
//   console.log(rest);
//   return (
//     first === "first" &&
//     rest[0] === "second" &&
//     rest[1] === "third" &&
//     rest[2] === undefined
//   );
// }

// console.log(restParams3("first", "second", "third"));

// 4.4
// function ontoAnObject() {
//   const array = [1, 2, 3, 4, 5, 6];
//   const object = {};
//   // CHANGE BELOW
//   // object.one = array[0];
//   // object.two = array[1];
//   // object.three = array[2];
//   // object.rest = array.slice(3);
//   // CHANGE ABOVE

//   [object.one, object.two, object.three, ...object.rest] = array;

//   return object;
// }

// console.log(ontoAnObject());

// 4.5
// function findTheMax() {
//   const arr1 = [1, 7, 2, 4];
//   const arr2 = [1, 9, 5, 8];
//   return Math.max(...arr1, ...arr2);
// }
// console.log(findTheMax());

// 4.6
// function concatenateArrays() {
//   const arr1 = [0, 1, 2, 3];
//   const arr2 = [4, 5, 6];
//   const arr3 = [7, 8, 9];
//   const result = [...arr1, ...arr2, ...arr3];
//   return result;
// }
// console.log(concatenateArrays());

// 4.7
// function mergeObjects() {
//   const obj1 = {
//     a: "a from obj1",
//     b: "b from obj1",
//     c: "c from obj1",
//     d: {
//       e: "e from obj1",
//       f: "f from obj1",
//     },
//   };
//   const obj2 = {
//     b: "b from obj2",
//     c: "c from obj2",
//     d: {
//       g: "g from obj2",
//       h: "h from obj2",
//     },
//   };
//   const result = { ...obj1, ...obj2 };
//   console.log(result);
//   return (
//     result.a === "a from obj1" &&
//     result.b === "b from obj2" &&
//     result.c === "c from obj2" &&
//     result.d.e === undefined &&
//     result.d.f === undefined &&
//     result.d.g === "g from obj2" &&
//     result.d.h === "h from obj2"
//   );
// }
// console.log(mergeObjects());

// 5.1
// function multiArgument() {
//   // const divide = function (a, b) {
//   //   return a / b;
//   const divide = (a, b) => a / b;
//   return divide(40, 10);
// }
// console.log(multiArgument());

// 5.2
// function spreadWithArrow() {
//   // const asArray = function (...args) {
//   //   return args;
//   // };
//   const asArray = (...args) => args;
//   return asArray(1, 2, 3, 4);
// }
// console.log(spreadWithArrow());

// 5.3
// function withObject() {
//   // // CHANGE BELOW
//   // const getObject = function (favoriteCandy) {
//   //   return { favoriteCandy };
//   // };
//   const getObject = (favoriteCandy) => favoriteCandy;
//   return getObject("twix");
// }
// console.log(withObject());

// 5.4
// function withMultiLineExpression() {
//   // CHANGE BELOW
//   // const getString = function (name) {
//   //   return `
//   //       Hello there ${name}
//   //       How are you doing today?
//   //     `;
//   // };
//   const getString = (name) => `Hello there ${name},
//                               How are you doing today?`;
//   return getString("Ryan");
// }
// console.log(withMultiLineExpression());

// 5.5
function curryAdd() {
  // CHANGE BELOW
  // function curryAddition(a) {
  //   return function (b) {
  //     return function (c) {
  //       return a + b + c;
  //     };
  //   };
  // }
  const curryAddition = (a) => (b) => (c) => a + b + c;
  return curryAddition(9)(3)(5);
}
console.log(curryAdd());
