//1. 实例属性初始化

// 解释：

// 声明成员age，类型为number（没有初始值）。
// 声明成员gender，并设置初始值，此时，可省略类型注解（TS类型推论为string类型）。
class Person {
  age: number;
  gender = "男";
  // gender: string = '男'
}

const p = new Person();

p.age;
p.gender;

// TypeScript全面支持ES2015中引入的class关键字，并为其添加了类型注解和其他语法（比如，可见性修饰符等）。

// class基本使用，如下：

// class Person {}  //创建类：class关键字+类的名称 {}
// const p = new Person() //创建实例对象 p就是Person这个class的实例对象
