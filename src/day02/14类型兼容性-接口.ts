// 接口之间的类型兼容性
// 除了class之外，TS中的其他类型也存在相互兼容的情况，包括：1、接口兼容性 2、函数兼容性等。

// 接口之间的兼容性，类似于class。并且，class和interface之间也可以兼容。（成员多的可以赋值给少的）

interface Point {
  x: number;
  y: number;
}
interface Point2D {
  x: number;
  y: number;
}
interface Point3D {
  x: number;
  y: number;
  z: number;
}

let p1: Point;
let p2: Point2D;
let p3: Point3D;

p1 = p2;
p1 = p3;
p2 = p3;
// 错误演示：
// p3 = p1    类型 "Point" 中缺少属性 "z"，但类型 "Point3D" 中需要该属性。
