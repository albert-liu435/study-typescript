// 索引查询类型（2 同时查询多个）
// 索引查询类型的其他使用方式：同时查询多个索引的类型。

type Props = { a: number; b: number; c: boolean };

// 其他使用方式：
type TypeA = Props["a" | "b"];

type TypeB = Props[keyof Props];

//解释：使用字符串字面量的联合类型，获取属性a和b对应的类型，结果为：string|number。
//解释：使用keyof操作符获取Props中所有键对应的类型，结果为：string|number|boolean。
