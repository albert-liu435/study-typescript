// class Person {
//   // age1: number;
//   // gender = "男";
//   // // gender: string = '男'
//   age: number;
//   gender: string;
//   //成员初始化(比如，age: number ) 后，才可以通过 this.age 来访问实例成员
//   //需要为构造函数指定类型注解，否则会被隐式推断为 any;造函数不需要返回值类型
//   constructor(age: number, gender: string) {
//     this.age = age;
//     this.gender = gender;
//   }
// }
// const p = new Person(18, "男");
// console.log(p.age, p.gender);

// class Point {
//   x: number = 1;
//   y: number = 2;

//   scale(n: number) {
//     this.x *= n;
//     this.y *= n;
//   }
// }

// const p = new Point();

// p.scale(10);

// console.log(p.x, p.y);

//通过 extends 关键字实现继承
//子类 Dog 继承父类 Animal，则 Dog 的实例对象 dog 就同时具有了父类 Animal 和子类 Dog 的所有属性和方法

class Animal {
  move() {
    console.log("走两步");
  }
}

class Dog extends Animal {
  name = "二哈";

  bark() {
    console.log("旺旺！");
  }
}

const d = new Dog();
d.move();
d.bark();
console.log(d.name);

//通过 implements 关键字让 class 实现接口。
//Person 类实现接口 Singable 意味着，Person 类中必须提供 Singable 接口中指定的所有方法和属性。
interface Singale {
  sing(): void;
  name: string;
}

class Person implements Singale {
  name = "jack";

  sing() {
    console.log("你是我的小呀小苹果");
  }
}
