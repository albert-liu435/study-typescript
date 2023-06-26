// c.private:
// 表示私有的，只在当前类中可见，对实例对象以及子类也是不可见的。

//父类
class Animal {
  private __run__() {
    console.log("Animal 内部辅助函数");
  }
  // 受保护的
  protected move() {
    this.__run__(); //对当前类是可见的
    console.log("走两步");
  }
  //   公开的
  run() {
    this.__run__();
    this.move();
    console.log("跑两步");
  }
}
const a = new Animal();

//子类
class Dog extends Animal {
  bark() {
    // this.__run__()    对子类以及实例是不可见的
    console.log("汪！");
  }
}
const dog = new Dog();
// dog.__run__()   属性“__run__”为私有属性，只能在类“Animal”内部访问。

// 解释：

// 在类属性或方法前面添加private关键字，来修饰该属性或方法是私有的。
// 私有的属性或方法只在当前类中可见，对子类和实例对象也都是不可见的！
