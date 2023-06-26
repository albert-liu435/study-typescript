// 分析泛型工具类型Partial的实现：

// 实际上，前面讲到的泛型工具类型（比如，Partial都是基于映射类型实现的）。

// 比如，Partial的实现：
type Partial<T> = {
  [P in keyof T]?: T[P];
};

type Props = { a: number; b: string; c: boolean };
type PartialProps = Partial<Props>;

// 解释：

// keyof T即keyof Props表示获取Props的所有键，也就是：‘a’ | ‘b’ | ‘c’。
// 在[]后面添加？（问号），表示将这些属性变为可选的，以此来实现Partial的功能。
// 冒号后面的T[P]表示获取T中每个键对应的类型。比如，如果是’a’则类型是number；如果是’b’则类型是string。
// 最终，新类型PartialProps和旧类型Props结构完全相同，只是让所有类型都变为可选了。
// ————————————————
// 版权声明：本文为CSDN博主「蜡笔雏田学前端」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/xuxuii/article/details/126723923
