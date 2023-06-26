//https://www.jianshu.com/p/d24a998c14a8

// //对象类型可以是匿名的：
// function greet(person: { name: string; age: number }) {
//   return "Hello " + person.name;
// }

// const p = { name: "zhangsan", age: 23 };
// console.log(greet(p));

// //或者也可以使用一个接口来命名：
// interface Person {
//   name: string;
//   age: number;
// }

// function greet(person: Person) {
//   return "Hello " + person.name;
// }

// const p = { name: "zhangsan", age: 23 };
// console.log(greet(p));

// //或者使用一个类型别名来命名：
// type Person = {
//   name: string;
//   age: number;
// };

// function greet(person: Person) {
//   return "Hello " + person.name;
// }
// const p = { name: "zhangsan3", age: 23 };
// console.log(greet(p));

// interface PaintOptions {
//   shape: Shape;
//   xPos?: number;
//   yPos?: number;
// }

// function paintShape(opts: PaintOptions) {
//   // ...
// }

// const shape = getShape();
// paintShape({ shape });
// paintShape({ shape, xPos: 100 });
// paintShape({ shape, yPos: 100 });
// paintShape({ shape, xPos: 100, yPos: 100 });
