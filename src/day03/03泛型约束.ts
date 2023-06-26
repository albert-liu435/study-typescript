// 泛型约束
// 默认情况下，泛型函数的类型变量Type可以代表多个类型，这导致无法访问任何属性。

// 比如，id(‘a’)调用函数时获取参数的长度：

// function id<Type>(value: Type): Type {
//   console.log(value.length); //这里的length会报错
//   return value;
// }

// 解释：Type 可以代表任意类型，无法保证一定存在length属性，比如number类型就没有length。

// 此时，就需要为泛型添加约束来收缩类型（缩窄类型取值范围）。

// 添加泛型约束收缩类型，主要有以下两种方式：1、指定更加具体的类型 ，2、添加约束。

// A.更加具体的类型
// function id<Type>(value: Type[]): Type[] {
//   console.log(value.length);
//   return value;
// }

// 比如，将类型修改为Type[]（Type类型的数组），因为只要是数组就一定存在length属性，因此就可以访问了。

//B.添加约束
interface ILength {
  length: number;
}

function id<Type extends ILength>(value: Type): Type {
  //extends：满足后面指定类型的一个约束
  console.log(value.length);
  return value;
}

id(["a", "k"]);
id({ length: 10, name: "jack" });

// 解释：

// 创建描述约束的接口ILength，该接口要求提供length属性。
// 通过extends关键字使用该接口，为泛型（类型变量）添加约束。
// 该约束表示：传入的类型必须具有length属性。
// 注意：传入的实参（比如，数组）只要有length属性即可，这也符合前面讲到的接口的类型兼容性
// ————————————————
// 版权声明：本文为CSDN博主「蜡笔雏田学前端」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/xuxuii/article/details/126724000
