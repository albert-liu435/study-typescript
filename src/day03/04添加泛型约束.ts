// C.多个泛型变量的情况（添加类型约束）

// 泛型的类型变量可以有多个，并且类型变量之间还可以约束（比如，第二个类型变量受第一个类型变量约束）。

// 比如，创建一个函数来获取对象中属性的值：

function getProp<Type, Key extends keyof Type>(obj: Type, key: Key) {
  //keyof 获取后面这个类型中所有键的一个集合/所有键名称的联合类型
  return obj[key];
}
let person = { name: "jack", age: 18 };
getProp(person, "age");

//getProp({ name: 'jack', age: 18 }, 'age')
getProp({ name: "jack", age: 18 }, "name");

//错误实例：只能访问Type对象中存在的属性
// getProp({ name: 'jack', age: 18 }, 'name1')

// 补充：（了解）
getProp(18, "toFixed");
getProp("abc", "split");
getProp("abc", 1); //此处 1 表示索引
getProp(["a"], "length");
getProp(["a"], 1000);

// 解释：

// 添加了第二个类型变量Key，两个类型变量之间使用（，）逗号分隔。
// keyof关键字接收一个对象类型，生成其键名称（可能是字符串或数字）的联合类型。
// 本示例中keyof Type实际上获取的是person对象所有键的联合类型，也就是：‘name’|‘age’。
// 类型变量Key受Type约束，可以理解为：Key只能是Type所有键中的任意一个，或者说只能访问对象中存在的属性。
// ————————————————
// 版权声明：本文为CSDN博主「蜡笔雏田学前端」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/xuxuii/article/details/126724000
