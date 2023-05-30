//创建泛型类

// 解释：

// 类似于泛型接口，在class名称后面添加< <<类型变量> >>，这个类就变成了泛型类。
// 此处的add方法，采用的是箭头函数形式的类型书写方式。
// ————————————————
// 版权声明：本文为CSDN博主「蜡笔雏田学前端」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/xuxuii/article/details/126724000

//类似于泛型接口，在创建class实例时，在类名后面通过<类型>来指定明确的类型。
//可以在类名后面省略类型的示例：
class GenericNumber<NumType> {
  defaultValue: NumType;
  add: (x: NumType, y: NumType) => NumType;

  constructor(value: NumType) {
    //可以省略<number>是因为这里有一个参数，参数的类型就是NumType，
    //当你在传入一个具体的值时，class可以根据你传入的这个值来推断出NumType的类型。
    this.defaultValue = value;
  }
}
// 可以省略<number>不写
// const myNum = new GenericNumber<number>(100)
const myNum = new GenericNumber(100);
myNum.defaultValue = 10;

// // class GenericNumber<NumType> {
// //   defaultValue: NumType
// //   add: (x: NumType, y: NumType) => NumType

// //   constructor(value: NumType) {
// //     this.defaultValue = value
// //   }
// // }
// // 此时，可以省略 <类型> 不写。因为 TS 可以根据传入的参数自动推导出类型
// // const myNum = new GenericNumber(100)
// // myNum.defaultValue = 10

// // --

// class GenericNumber<NumType> {
//   defaultValue: NumType
//   add: (x: NumType, y: NumType) => NumType
// }

// // 这种情况下，推荐明确指定 <类型>。因为 TS 无法推导出类型
// const myNum = new GenericNumber()
// myNum.defaultValue = 10
