// // 映射类型：基于旧类型创建新类型（对象类型），减少重复，提升开发效率。

// // 比如，类型PropKeys有x/y/z，另一个类型Type1中也有x/y/z，并且Type1中x/y/z的类型相同：
// type PropKeys = "X" | "y" | "z";
// type Type1 = { x: number; y: number; z: number };
// //这样书写没错，但x/y/z重复书写了两次。像这种情况，就可以使用映射类型来进行简化。

type PropKeys = "x" | "y" | "z";
type Type2 = { [Key in PropKeys]: number };

// 解释：

// 映射类型是基于索引签名类型的，所以，该语法类似于索引签名类型，也使用了[]。
// Key in PropKeys表示Key可以是PropKeys联合类型中的任意一个，类似于forin（let k in obj）。
// 使用映射类型创建的新对象类型Type2和类型Type1结构完全相同。
// 注意：映射类型只能在类型别名中使用，不能在接口中使用。
// ————————————————
// 版权声明：本文为CSDN博主「蜡笔雏田学前端」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/xuxuii/article/details/126723923

映射类型除了根据联合类型创建新类型外，还可以根据对象类型来创建：(keyof)

