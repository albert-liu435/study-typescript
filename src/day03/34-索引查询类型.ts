// 索引查询类型（1 基本使用）
// 刚刚用到的T[P]语法，在TS中叫做索引查询（访问）类型。

// 作用：用来查询属性的类型。

type Props = { a: number; b: string; c: boolean };

type TypeA = Props["a"];

// 模拟 Partial 类型：
type MyPartial<T> = {
  [P in keyof T]?: T[P];
};

type PartialProps = MyPartial<Props>;

// 解释：Props[‘a’]表示查询类型Props中属性’a’对应的类型number。所以，TypeA的类型为number。

// 注意：[]中的属性必须存在于被查询类型中，否则就会报错。
