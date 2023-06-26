// b.protected：
// 表示受保护的，仅对其声明所在类和子类中（非实例对象）可见。

//父类
class Animal {
  // 这个方法是受保护的
  protected move() {
    console.log("走两步");
  }
  run() {
    this.move();
    console.log("跑两步");
  }
}
const b = new Animal();
// b.move(); // 通过父类实例对象访问不到move()这个方法的,只能在类“Animal”及其子类中访问。
b.run();

//子类继承父类
class Dog extends Animal {
  bark() {
    this.move();
    console.log("汪！");
  }
}
const dog = new Dog();
//   dog.move() 通过子类实例对象也访问不到move()这个方法的,只能在类“Animal”及其子类中访问。

// 解释：

// 在类属性或方法前面添加protected关键字，来修饰该属性或方法是受保护的。
// 在子类的方法内部可以通过this来访问父类中受保护的成员，但是，对实例不可见！！！
