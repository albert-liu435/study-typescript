// 5. 类成员可见性
// 可以使用TS来控制class的方法或属性对于class外的代码是否可见。

// 可见性修饰符包括
// public（公有的）
// protected（受保护的）
// private（私有的）

// a. public：
// 表示公有的，公开的，公有成员可以被任何地方访问，默认可见性。

// 父类
class Animal {
  public move() {
    console.log("走两步");
  }
}

const a = new Animal();
a.move();

// 子类
class Dog extends Animal {
  bark() {
    console.log("旺旺！");
  }
}

const d = new Dog();
d.move();

// 解释：

// 在类属性或方法前面添加public关键字，来修饰该属性或方法是共有的。
// 因为public是默认可见性，所以，可以直接省略。
