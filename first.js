let a = 10;
let b = "hello";
let c = true;
let d = null;
let e;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);

let numbers = [100, 200, 300];
let x,
  y,
  z = numbers;
console.log(x, y, z);

const student = {
  name: "Kim",
  age: 18,
  major: "Computer",
};

const { name, age, major } = student;
console.log("이름: " + name);
console.log("나이: " + age);
console.log("전공: " + major);

let arr1 = [1, 2, 3];
let newArr = [...arr1, 4, 5, 6];
console.log(newArr);

console.log(sumAll(1, 2, 3, 4, 5));

function sumAll(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
}

console.log(multiply(3, 4));

const multiply = (a, b) => {
  return a * b;
};

const numbers1 = [1, 2, 3, 4, 5];
const numberss = numbers.map((num) => num * 3);
console.log(numberss);

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8];
const numberss2 = numbers2.filter((num) => num % 2 === 0);
console.log(numberss2);

const numbers3 = [5, 10, 15, 20];
const sum = numbers3.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

const fruits = ["apple", "banana", "orange"];
fruits.forEach((fruit) => console.log(fruit));

const fruits1 = ["apple", "banana", "orange"];
fruits1.map((fruit) => console.log(fruit));

const students = [
  { id: 1, name: "Kim" },
  { id: 2, name: "Lee" },
  { id: 3, name: "Park" },
];

students.map((id) => console.log(id.name));

const scores = [45, 70, 80, 55, 90];
const Scores60 = scores.filter((score) => score >= 60);
console.log("합격자 점수: ", Scores60);
console.log(
  "총합 : ",
  Scores60.reduce((acc, curr) => acc + curr, 0),
);
