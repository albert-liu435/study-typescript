// 注意：此处的’Hello TS‘, 就是一个字面量类型。也就是说某个特定的字符串也可以作为TS中的类型。

// 除字符串外，任意的JS字面量（比如，对象，数字等）都可以作为类型使用。

// 使用模式：字面量类型配合联合类型一起使用。
// 使用场景：用来表示一组明确的可选值列表。
// 比如，在贪吃蛇游戏中，游戏的方向的可选值只能是上，下，左，右中的任意一个。
// ————————————————
// 版权声明：本文为CSDN博主「蜡笔雏田学前端」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/xuxuii/article/details/126569192

function changeDirection(direction: "up" | "down" | "left" | "right") {
  console.log(direction);
}

// 解释：参数direction的值只能是up/down/left/right中的任意一个。

// 优势：相比于string类型，使用字面量类型更加精确，严谨。
