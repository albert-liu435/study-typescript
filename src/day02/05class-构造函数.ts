// 2. 类的构造函数
// 作用是一般用来为类的实例属性设置一个初始值，通过constructor()来指定构造函数的，constructor是配合class去实现实例对象的实例化这个过程的。

// 解释：因为类是抽象的，所以需要实例化对象才能使用类。对象是类通过实例化得出的一个具体的个体 ，实例化就是从类到个体的过程。

// 成员初始化（比如，age：number）后，才可以通过this.age来访问实例成员。
// 需要为构造函数指定类型注解，否则会被隐式推断为any；构造函数不需要返回值类型。
// 在构造函数里，通过this访问到实例成员，完成初始值的设置。
// this在类里面表示类的实例对象，实例对象访问到的属性就是实例属性了
// ————————————————
// 版权声明：本文为CSDN博主「蜡笔雏田学前端」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/xuxuii/article/details/126656135
// ps：this有代指这个的含义，这里的this就是指当前类。例如this.name就是指当前类中的name也就是这个成员变量。
// var array = new Array()
// //new Array()一个标准的构造函数,“var” 声明了一个 “array” 对象,
// //用构造函数 “new Array()” 来初始化这个 “array” 对象为它赋初始值.

class Person {
  age: number;
  gender: string;

  constructor(age: number, gender: string) {
    this.age = age;
    this.gender = gender;
  }
}

const p = new Person(18, "男");
console.log(p.age, p.gender);
