//映射类型除了根据联合类型创建新类型外，还可以根据对象类型来创建：(keyof)

type Props = { a: number; b: string; c: boolean };
type Type3 = { [key in keyof Props]: number };

// 解释：

// 首先，先执行keyof Props获取到对象类型Props中所有键的联合类型即，‘a’ | ‘b’ | ‘c’。
// 然后，Key in ...就表示Key可以是Props中所有的键名称中的任意一个。
