// // 类型
// type Props = { a: number; b: string; c: boolean }

// // 可执行代码
// function add(num1: number, num2: number) {
//   return num1 + num2
// }
// console.log(add(1, 5))

import { count, songName, add, Point } from "./utils";

type Person = {
  name: string;
  age: number;
};

let p: Partial<Person> = {
  name: "jack",
};

let p1: Point = {
  x: 10,
  y: 20,
};

// console.log('项目启动了')
console.log("count", count);
console.log("songName", songName);
console.log("add()", add(1, 4));
