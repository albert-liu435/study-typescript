//1、类型注解
let age: number = 18;
console.log(age);
// 说明：代码中的 : number就是类型注解。

// 作用：为变量添加类型约束。比如，上述代码中，约定 变量age的类型为number（数值类型）。

// 解释：约定了什么类型，就只能 给变量赋值该类型的值，否则，就会报错。
// ————————————————
// 版权声明：本文为CSDN博主「蜡笔雏田学前端」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/xuxuii/article/details/126569177

// 可以将 TS 中的常用基础类型细分为两类：1. JS 已有类型，2.TS 新增类型。

// JS已有类型
// 原始类型：number/string/boolean/null/undefined/symbol。
// 对象类型：Object（包括：数组，对象，函数等）。
// TS 新增类型
// 联合类型、自定义类型（类型别名）、接口、元组、字面量类型、枚举、void、any等。
// 3. 原始类型
// number/string/boolean/null/undefined/symbol。

// 特点：简单。这些类型，完全按照 JS 中类型的名称来书写。
// ————————————————
// 版权声明：本文为CSDN博主「蜡笔雏田学前端」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/xuxuii/article/details/126569177

let myName: String = "刘老师";
let isLoading: boolean = false;

//数组类型的两种写法：（推荐使用number[]写法）
// 数组类型：
let numbers: number[] = [1, 3, 5];
let strings1: string[] = ["a", "b", "c"];
let strings2: Array<string> = ["a", "b", "c"];
console.log(numbers);
console.log(strings1);
console.log(strings2);

//联合类型
// 需求：数组中既有 number 类型，又有 string 类型，这个数组的类型应该如何写？

// 联合类型：
//解释：|（竖线）在 TS 中叫做联合类型（由两个或多个其他类型组成的类型，表示可以是这些类型中的任意一种）。
//注意：这是 TS 中联合类型的语法，只有一根竖线（ | ），不要与 JS 中的或（||）混淆了。

// 添加小括号，表示：首先是数组，然后，这个数组中能够出现 number 或 string 类型的元素
let arr1: (number | string)[] = [1, "a", 3, "b"];

let arr: (number | string | boolean)[] = [1, 3, 5, "a", "b", false];

console.log(arr1);
console.log(arr);

// 不添加小括号，表示：arr1 既可以是 number 类型，又可以是 string[]
// let arr1: number | string[] = ['a', 'b']
// let arr1: number | string[] = 123
