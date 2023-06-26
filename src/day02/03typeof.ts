//众所周知，JS中提供了typeof操作符，用来在JS中获取数据的类型。

// console.log(typeof 'Hello TS') // string

//实际上，TS也提供了typeof操作符：可以在类型上下文中引用变量或属性的类型（类型查询）。
// 使用场景：根据已有变量的值，获取该值的类型，来简化类型的书写。

let p = { x: 1, y: 2 };

function formatPoint(point: typeof p) {}
// function formatPoint(point: { x: number; y: number }) {}
formatPoint({ x: 1, y: 100 });

// 解释：

// 使用typeof操作符来获取变量p的类型，结果与第一种（对象字面量形式的类型）相同。
// typeof出现在类型注解的位置（参数名称的冒号后面）所处的环境就在类型上下文（区别于JS代码）。
// 注意：typeof只能用来查询变量或属性的类型，无法查询其他形式的类型（比如，函数调用的类型）。
// ————————————————
// 版权声明：本文为CSDN博主「蜡笔雏田学前端」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/xuxuii/article/details/126569192

// // --

// let num: typeof p.x

// function add(num1: number, num2: number) {
//   return num1 + num2
// }

// let ret: typeof add1(1, 2)
