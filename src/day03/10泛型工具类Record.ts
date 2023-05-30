//作用：构造一个对象类型，属性键为Keys，属性类型为Type。

type RecordObj = Record<"a" | "b" | "c", string[]>;
// type RecordObj = {
//     a: string[]
//     b: string[]
//     c: string[]
// }

let obj: RecordObj = {
  a: ["a"],
  b: ["b"],
  c: ["c"],
};

//解释：

// Record工具类型有两个类型变量：1、表示对象有哪些属性 2、表示对象属性的类型。
// 构建的新对象类型RecordObj表示：这个对象有三个属性分别为a/b/c，属性值的类型都是string[]。
