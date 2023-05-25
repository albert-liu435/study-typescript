// //public: 表示公有的、公开的，公有成员可以被任何地方访问，默认可见性
// //在类属性或方法前面添加 public 关键字，来修饰该属性或方法是共有的.
// //因为 public 是默认可见性，所以，可以直接省略。

// // // 父类
// // class Animal {
// //   public move() {
// //     console.log("走两步");
// //   }
// // }

// // const a = new Animal();
// // a.move();

// // // 子类
// // class Dog extends Animal {
// //   bark() {
// //     console.log("旺旺！");
// //   }
// // }

// // const d = new Dog();
// // d.move();

// //protected : 表示受保护的，仅对其声明所在类和子类中(非实例对象)可见

// //在类属性或方法前面添加 protected 关键字，来修饰该属性或方法是受保护的。
// //在子类的方法内部可以通过 this 来访问父类中受保护的成员，但是，对实例不可见!
// // 父类
// class Animal {
//   // 这个方法是受保护的
//   protected move() {
//     console.log("走两步");
//   }

//   run() {
//     this.move();
//     console.log("跑起来");
//   }
// }

// const a = new Animal();
// // a.move()

// // 子类
// class Dog extends Animal {
//   bark() {
//     this.move();
//     console.log("旺旺！");
//   }
// }

// const d = new Dog();
// // d

//private : 表示私有的，只在当前类中可见，对实例对象以及子类也是不可见的。
//在类属性或方法前面添加 private 关键字，来修饰该属性或方法是私有的
//私有的属性或方法只在当前类中可见，对子类和实例对象也都是不可见的
// 父类
class Animal {
  private __run__() {
    console.log("Animal 内部辅助函数");
  }

  // 受保护的
  protected move() {
    this.__run__();
    console.log("走两步");
  }

  // 公开的
  run() {
    this.__run__();
    this.move();
    console.log("跑起来");
  }
}

const a = new Animal();
// a.

// 子类
class Dog extends Animal {
  bark() {
    // this.
    console.log("旺旺！");
  }
}

const d = new Dog();
// d.
