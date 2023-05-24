//: boolean就是类型注解，为变量添加类型约束
//解释:约定了什么类型，就只能给变量赋值该类型的值，否则，就会报错.
//布尔值
let isDone: boolean = false;
console.log(isDone);

//数字
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
console.log(decLiteral);
console.log(hexLiteral);
console.log(binaryLiteral);
console.log(octalLiteral);

//字符串
let name: String = "bob";
console.log(name);

let name1: string = `Gene`;
let age: number = 37;
let sentence: string = `Hello, my name is ${name1}.

I'll be ${age + 1} years old next month.`;

console.log(sentence);

//数组
let list: number[] = [1, 2, 3];
console.log(list);

let list1: Array<number> = [1, 2, 3];
console.log(list1);

//元组 Tuple
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK

// Initialize it incorrectly
//x = [10, "hello"]; // Error
console.log(x[0].substr(1)); // OK
// console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'

//枚举
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;
console.log(c);

export {};
