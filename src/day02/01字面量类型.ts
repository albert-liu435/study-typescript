// 通过 TS 类型推论机制，可以得到答案
// 1.变量 str1 的类型为: string。
// 2. 变量 str2 的类型为:Hello Ts解释:
// 1. str1 是一个变量( let)，它的值可以是任意字符串，所以类型为 : string。
// 2. str2 是一个常量( const )，它的值不能变化只能是 Hello Ts’，所以，它的类型为 : Hello Ts
//注意:此处的“Hello Ts’就是一个字面量类型。也就是说某个特定的字符串也可以作为 TS 中的类型除字符串外，任意的JS 字面量( 比如，对象、数字等)都可以作为类型使用。

let str1 = "Hello TS";
// const str2: "Hello TS" = "Hello TS";
const str2 = "Hello TS";

let age12: 18 = 18;

// 使用模式:字面量类型配合联合类型一起使用
// 使用场景:用来表示一组明确的可选值列表
// 比如，在贪吃蛇游戏中，游戏的方向的可选值只能是上、下、左、右中的任意一个。

//解释:参数 direction 的值只能是 up/down/left/right 中的任意一个
//优势:相比于 string 类型，使用字面量类型更加精确、严谨
function changeDirection(direction: "up" | "down" | "left" | "right") {
  console.log(direction);
}

changeDirection("left");
//changeDirection("lefts");
