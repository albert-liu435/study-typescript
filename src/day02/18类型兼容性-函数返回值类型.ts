// C. 返回值类型，只关注返回值类型本身即可：
// 3 返回值类型，只需要关注返回值类型本身即可
// 原始类型：
type F5 = () => string;
type F6 = () => string;

let f5: F5;
let f6: F6;

f6 = f5;
f5 = f6;

// 对象类型：
type F7 = () => { name: string };
type F8 = () => { name: string; age: number };

let f7: F7;
let f8: F8;

f7 = f8;
// 错误演示：
// f8 = f7

// 解释：

// 如果返回值类型是原始类型，此时两个类型要相同，比如，左侧类型F5和F6。
// 如果返回值类型是对象类型，此时成员多的可以赋值给成员少的，比如，右侧类型F7和F8。
