// 在TS中，某些没有明确指出类型的地方，TS的类型推论机制会帮助提供类型。

// 换句话说，由于类型推论的存在，这些地方，类型注解可以省略不写！

// 发生类型推论的两种常见场景：

// 声明变量并立即初始化值，此时，可以省略类型注解
let age1 = 18;

// age = ''

// 注意：如果声明变量但没有立即初始化值，此时，还必须手动添加类型注解
let a: number;

a = 19;
// a = ''

// --

function add(num1: number, num2: number) {
  return num1 + num2;
}

add(1, 3);
// add(false, 3)

console.log("object");
