// 4. 类的继承
// 类继承的两种方式：
// extends（继承父类）
// implements（实现接口）。
// 说明：JS中只有extends，而implements是TS提供的。

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

// 解释：

// 通过extends关键字实现继承。
// 子类Dog继承父类Animal，则Dog的实例对象dog就同时具有了父类Animal和子类Dog的所有属性和方法。
