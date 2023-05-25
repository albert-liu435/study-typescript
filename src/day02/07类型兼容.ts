// // 演示类型兼容性：

// let arr = ["a", "b", "c"];

// arr.forEach((item) => {
//   console.log(item);
// });
// arr.forEach((item, index) => {
//   console.log(item);
//   console.log(index);
// });
// arr.forEach((item, index, array) => {
//   console.log(item);
//   console.log(index);
//   console.log(array);
// });

//两种类型系统: 1 Structural Type System (结构化类型系统)2 Nominal Type System ( 标明类型系统).
//TS 采用的是结构化类型系统，也叫做 duck typing( 鸭子类型)类型检查关注的是值所具有的形状
//也就是说，在结构类型系统中，如果两个对象具有相同的形状，则认为它们属于同一类型。
//解释:
//1.Point 和 Point2D 是两个名称不同的类.
//2.变量 p 的类型被显示标注为 Point 类型，但是，它的值却是 Point2D 的实例，并且没有类型错误.
//3.因为 TS 是结构化类型系统，只检查 Point 和 Point2D 的结构是否相同(相同，都具有和y两个属性，属性类型也相同)。
//4.但是，如果在 Nominal Type System 中(比如，C#、Java 等)，它们是不同的类，类型无法兼容。

// 两个类的兼容性演示：
//注意:在结构化类型系统中，如果两个对象具有相同的形状，则认为它们属于同一类型，这种说法并不准确
//更准确的说法:对于对象类型来说，y 的成员至少与  相同，则 兼容 ( 成员多的可以赋值给少的)
//解释 :
//1.Point3D 的成员至少与 Point 相同，则 Point 兼容 Point3D
//2.所以，成员多的 Point3D 可以赋值给成员少的 Point。

// class Point {
//   x: number;
//   y: number;
// }
// class Point2D {
//   x: number;
//   y: number;
// }

// const p: Point = new Point2D();

// 两个类的兼容性演示：
//除了 class 之外，TS 中的其他类型也存在相互兼容的情况，包括: 接口容性 2 函数兼容性等
//接口之间的兼容性，类似于 class。并且，class 和 interface 之间也可以兼容。

// class Point {
//   x: number;
//   y: number;
// }
// class Point2D {
//   x: number;
//   y: number;
// }

// const p: Point = new Point2D();

// class Point3D {
//   x: number;
//   y: number;
//   z: number;
// }

// const p1: Point = new Point3D();

// // 错误演示
// // const p2: Point3D = new Point()

// interface Point {
//   x: number
//   y: number
// }
// interface Point2D {
//   x: number
//   y: number
// }
// interface Point3D {
//   x: number
//   y: number
//   z: number
// }

// let p1: Point
// let p2: Point2D
// let p3: Point3D

// // 正确：
// // p1 = p2
// // p2 = p1
// // p1 = p3

// // 错误演示：
// // p3 = p1

// // 类和接口之间也是兼容的
// class Point4D {
//   x: number
//   y: number
//   z: number
// }
// p2 = new Point4D()

//函数之间兼容性比较复杂，需要考虑 : 1 参数个数 2 参数类型 3 返回值类型
//1. 参数个数，参数多的兼容参数少的( 或者说，参数少的可以赋值给多的 )

// 解释:
//1.参数少的可以赋值给参数多的，所以，f1 可以赋值给 f2。
//2.数组 forEach 方法的第一个参数是回调函数，该示例中类型为: value: string,index: number array: stringl) => void
//3.在JS 中省略用不到的函数参数实际上是很常见的，这样的使用方式，促成了 TS 中函数类型之间的兼容性.
//3.并目因为回调函数是有类型的，所以，TS 会自动推导出参数 item、index、array 的类型。

// // 1 参数个数： 参数少的可以赋值给参数多的
// type F1 = (a: number) => void;
// type F2 = (a: number, b: number) => void;

// let f1: F1;
// let f2: F2;

// f2 = f1;

// // 错误演示：
// // f1 = f2

//2.参数类型，相同位置的参数类型要相同( 原始类型 )或兼容( 对象类型 )。
//解释:函数类型 F2 .容函数类型 F1，因为 F1 和 F2 的第一个参数类型相同

// 2 参数类型： 相同位置的参数类型要相同或兼容

// 原始类型：
// type F1 = (a: number) => void
// type F2 = (a: number) => void

// let f1: F1
// let f2: F2

// f1 = f2
// f2 = f1

// --

