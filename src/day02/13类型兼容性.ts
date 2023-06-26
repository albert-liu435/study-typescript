// 类型兼容性
// 两种类型系统：

// Structural Type System（结构化类型系统）
// Nominal Type System（标明类型系统）
// TS采用的是结构化类型系统，也叫做ducktyping（鸭子类型），类型检查关注的是值所具有的形状。

// 也就是说，在结构类型系统中，如果两个对象具有相同的形状，则认为它们属于同一类型。
// ————————————————
// 版权声明：本文为CSDN博主「蜡笔雏田学前端」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/xuxuii/article/details/126723923

//两个类的兼容性演示
class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
class Point2D {
  x: number;
  y: number;
}
const p: Point = new Point2D();

// 解释：

// Point和Point2D是两个名称不同的类。
// 变量p的类型被显示标注为Point类型，但是，它的值却是Point2D的实例，并且没有类型错误。
// 因为TS是结构化类型系统，只检查Point和Point2D的结构是否相同（相同，都具有x和y两个属性，属性类型也相同）。
// 但是，如果在Nominal Type System中（比如，C#，Java等），它们是不同的类，类型无法兼容。
// ————————————————
// 版权声明：本文为CSDN博主「蜡笔雏田学前端」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/xuxuii/article/details/126723923
