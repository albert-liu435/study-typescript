//JS 中的对象是由属性和方法构成的，而 TS 中对象的类型就是在描述对象的结构(有什么类型的属性和方法)。
//对象类型的写法:

// let person: { name: string; age: number; sayHi(): void } = {
//   name: 'jack',
//   age: 19,
//   sayHi() {}
// }

let person: {
  name: string;
  age: number;
  sayHi(): void;
  greet(name: string): void;
} = {
  name: "刘老师",
  age: 18,
  sayHi() {},
  greet(name) {},
};
// 解释：

// 直接使用{}来描述对象结构。属性采用属性名：类型的形式；方法采用方法名（）：返回值类型的形式。
// 如果方法有参数，就在方法名后面的小括号中指定参数类型（比如：greet (name: string): void）。
// 在一行代码中指定对象的多个属性类型时，使用；（分号）来分隔。
// 如果一行代码只指定一个属性类型（通过换行来分隔多个属性类型），可以去掉分号；（分号）。
// 方法的类型也可以使用箭头函数形式（比如：{sayHi：() => void}）。
// ————————————————
// 版权声明：本文为CSDN博主「蜡笔雏田学前端」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/xuxuii/article/details/126569177

//对象可选属性
//对象的属性或方法，也可以是可选的，此时就用到可选属性了。
//比如，我们在使用 axios( ... ) 时，如果发送 GET 请求，method 属性就可以省略
//可选属性的语法与函数可选参数的语法一致，都使用 ?( 问号)来表示

function myAxios(config: { url: string; method?: string }) {}

myAxios({
  url: "",
});
