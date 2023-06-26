//可以在类名后面省略类型的示例：
class GenericNumber<Type> {
  defaultValue: Type;

  constructor(value: Type) {
    //可以省略<number>是因为这里有一个参数，参数的类型就是NumType，
    //当你在传入一个具体的值时，class可以根据你传入的这个值来推断出NumType的类型。
    this.defaultValue = value;
  }
  // add: (x: Type, y: Type) => Type;
}
// 可以省略<number>不写
// const myNum = new GenericNumber<number>(100)
const myNum = new GenericNumber(100);
myNum.defaultValue = 10;
console.log(myNum);
