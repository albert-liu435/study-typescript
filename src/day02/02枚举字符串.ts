// // 字符串枚举：
// //注意:字符串枚举没有自增长行为，因此，字符串枚举的每个成员必须有初始值
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

function changeDirection(direction: Direction) {
  console.log(direction);
}

changeDirection(Direction.Up);

// 枚举的特点及原理
// 枚举是TS为数不多的非JavaScript类型级扩展（不仅仅是类型）的特性之一。

// 因为：其他类型仅仅被当做类型，而枚举不仅用作类型，还提供值（枚举成员都是有值的）。

// 也就是说，其他类型会在编译为JS代码时自动移除。但是，枚举类型会被编译为JS代码！

// 说明： 枚举与前面讲到的字面量类型+联合类型组合的功能类似，都用来表示一组明确的可选值列表。

// 一般情况下，推荐使用字面量类型+联合类型组合的方式，因为相比枚举，这种方式更加直观，简洁，高效。
