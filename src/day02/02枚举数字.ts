// // 枚举：

// //枚举的功能类似于字面量类型+联合类型组合的功能，也可以表示一组明确的可选值
// //枚举:定义一组命名常量。它描述一个值，该值可以是这些命名常量中的一个

// //解释 :
// // 1、使用 enum 关键字定义枚举
// // 2、约定枚举名称、枚举中的值以大写字母开头
// // 3、枚举中的多个值之间通过，( 逗号 )分隔
// // 4、定义好枚举后，直接使用枚举名称作为类型注解.

// //问题: 我们把枚举成员作为了函数的实参，它的值是什么呢 ?
// //解释: 通过将鼠标移入 Direction.Up，可以看到枚举成员 Up 的值为 0。
// //注意:枚举成员是有值的，默认为:从 0 开始自增的数值
// //我们把枚举成员的值为数字的枚举，称为:数字枚举

// enum Direction {
//   Up,
//   Down,
//   Left,
//   Right,
// }

// function changesDirection(direction: Direction) {
//   console.log(direction);
// }

// changesDirection(Direction.Left);

// console.log(Direction);

// // 当然，也可以给枚举中的成员初始化值
enum Direction {
  Up = 2,
  Down = 4,
  Left = 8,
  Right = 16,
}

function changeDirection(direction: Direction) {
  console.log(direction);
}

changeDirection(Direction.Up);

// // 字符串枚举：
// //注意:字符串枚举没有自增长行为，因此，字符串枚举的每个成员必须有初始值
// enum Direction {
//   Up = "UP",
//   Down = "DOWN",
//   Left = "LEFT",
//   Right = "RIGHT",
// }

// function changeDirection(direction: Direction) {
//   console.log(direction);
// }

// changeDirection(Direction.Up);
