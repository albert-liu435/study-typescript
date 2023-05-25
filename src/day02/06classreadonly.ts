//readonly: 表示只读，用来防止在构造函数之外对属性进行赋值
//使用 readonly 关键字修饰该属性是只读的，注意只能修饰属性不能修饰方法。
//注意:属性 age 后面的类型注解(比如，此处的 number)如果不加，则 age 的类型为 18 (字面量类型)
//接口或者0 表示的对象类型，也可以使用 readonly。

/* class Person {
  // 只读属性
  readonly age: number = 18

  constructor(age: number) {
    this.age = age
  }

  // 错误演示：
  // readonly setAge() {
  //   // this.age = 20
  // }
} */

class Person {
  // 只读属性
  // 注意：只要是 readonly 来修饰的属性，必须手动提供明确的类型
  readonly age: number = 18;

  constructor(age: number) {
    this.age = age;
  }
}

// --

// interface IPerson {
//   readonly name: string
// }

// let obj: IPerson = {
//   name: 'jack'
// }

let obj: { readonly name: string } = {
  name: "jack",
};

obj.name = "rose";
