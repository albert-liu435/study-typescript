//接口也可以配合泛型来使用，以增加其灵活性，增强其复用性。
interface IdFunc<Type> {
  id: (value: Type) => Type;
  ids: () => Type[];
}

let obj: IdFunc<number> = {
  id(value) {
    return value;
  },
  ids() {
    return [1, 3, 5];
  },
};

// 解释：

// 在接口名称的后面添加< <<类型变量> >>，那么，这个接口就变成了泛型接口。
// 接口的类型变量，对接口中所有其他成员可见，也就是接口中所有成员都可以使用类型变量。
// 使用泛型接口时，需要显式指定具体的类型（比如，此处的IdFunc< <<number> >>)。
// 此时，id方法的参数和返回值类型都是number；ids方法的返回值类型是number[]。
// ————————————————
// 版权声明：本文为CSDN博主「蜡笔雏田学前端」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/xuxuii/article/details/126724000




