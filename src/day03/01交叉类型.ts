// //交叉类型（&）：功能类似于接口继承（extends），用于组合多个类型为一个类型（常用于对象类型）。

// interface Person {
//   name: string;
//   say(): number;
// }
// interface Contact {
//   phone: string;
// }

// type PersonDetail = Person & Contact;
// //解释：使用交叉类型后，新的类型PersonDetail就同时具备了Person和Contact的所有属性类型。
// let obj: PersonDetail = {
//   name: "jack",
//   phone: "133....",
//   say() {
//     return 1;
//   },
// };

// //相同点：都可以实现对象类型的组合。
// // 不同点：两种方式实现类型组合时，对于同名属性之间，处理类型冲突的方式不同。

// // 对比：
// interface A {
//   fn: ( value: number) => string
// }
// interface B extends A {
//   fn: ( value: string) => string
// }
// //接口继承会报错：不能将类型“(value: string) => string”分配给类型“(value: number) => string”。

// interface A {
//         fn: ( value: number) => string
//     }
// interface B {
//         fn: ( value: string) => string
//     }
// type C = A & B
// //说明：以上代码，接口继承会报错（类型不兼容）；交叉类型没有错误，可以简单地理解为：
// let c: C = {
// 	fn(value: number | string) {
// 			return '1'
// 	}
// }
// //let c: C
// //c.fn('a')
// //c.fn(6)
