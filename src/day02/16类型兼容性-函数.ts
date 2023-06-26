// 函数之间的类型兼容性
// 函数之间兼容性比较复杂，需要考虑：1、参数个数 2、参数类型 3、返回值类型。
// A. 参数个数，参数多的兼容参数少的（或者说，参数少的可以赋值给多的）。

// 1 参数个数：参数少的可以赋值给参数多的
type F1 = (a: number) => void;
type F2 = (a: number, b: number) => void;

let f1: F1;
let f2: F2;

f2 = f1;
// 错误演示：
// f1 = f2
// 演示类型兼容性：
let arr = ["a", "b", "c"];

arr.forEach(() => {});
arr.forEach((item) => {});
arr.forEach((item, index) => {});
arr.forEach((item, index, array) => {});

// 解释：

// 参数少的可以赋值给参数多的，所以，f1可以赋值给f2。
// 数组forEach方法的第一个参数是回调函数，该实例中类型为：（value: string, index: number, array: string[]）=>void。
// 在JS中省略用不到的函数参数实际上是很常见的，这样的使用方式，促成了TS中函数类型之间的兼容性。
// 并且因为回调函数是有类型的，所以，TS会自动推导出参数item，index，array的类型。
// ————————————————
// 版权声明：本文为CSDN博主「蜡笔雏田学前端」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/xuxuii/article/details/126723923
