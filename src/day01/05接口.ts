//当一个对象类型被多次使用时，一般会使用接口 ( interface ) 来描述对象的类型，达到复用的目的

// 使用 interface 关键字来声明接口。
// 接口名称(比如，此处的 IPerson )，可以是任意合法的变量名称
// 声明接口后，直接使用接口名称作为变量的类型
// 因为每一行只有一个属性类型，因此，属性类型后没有 ;( 分号 )



interface IPerson {
  name: string;
  age: number;
  sayHi(): void;
}

let person1: IPerson = {
  name: "刘老师",
  age: 23,
  sayHi() {},
};

let person2: IPerson = {
  name: "jack",
  age: 16,
  sayHi() {},
};

// interface ( 接口)和 type ( 类型别名)的对比 :
// 相同点: 都可以给对象指定类型
// 不同点 :
// 接口，只能为对象指定类型
// 类型别名，不仅可以为对象指定类型，实际上可以为任意类型指定别名。

// // 类型别名
// type IPerson = {
//   name: string
//   age: number
//   sayHi(): void
// }

// let person: IPerson = {
//   name: '刘老师',
//   age: 18,
//   sayHi() {}
// }

//如果两个接口之间有相同的属性或方法，可以将公共的属性或方法抽离出来，通过继承来实现复用。
//比如，这两个接口都有 、y 两个属性，重复写两次，可以，但很繁琐。

// interface Point2D {
//   x: number;
//   y: number;
// }

// interface Point3D {
//   x: number;
//   y: number;
//   z: number;
// }

//更好的方式
//使用 extends ( 继承)关键字实现了接口 Point3D 继承 Point2D
//继承后，Point3D 就有了 Point2D 的所有属性和方法(此时，Point3D 同时有 x、y、Z三个属性)
interface Point2D {
  x: number;
  y: number;
}
interface Point3D extends Point2D {
  z: number;
}

let p3: Point3D = {
  x: 1,
  y: 0,
  z: 0,
};
