// 类型别名（自定义类型）：为任意类型起别名。

// 使用场景：当同一类型（复杂）被多次使用时，可以通过类型别名，简化该类型的使用。

// 解释：

// 使用 type 关键字来创建类型别名。
// 类型别名（比如：此处的CustomArray），可以是任意合法的变量名称。
// 创建类型别名后，直接使用该类型别名作为变量的类型注解即可。

let arr1: (number | String)[] = [1, "X", 2, "y"];
console.log(arr1);

//类型别名，为任意类型起别名
//使用场景:当同一类型(复杂)被多次使用时，可以通过类型别名，简化该类型的使用。
type CustomArray = (number | string)[];

let arr2: CustomArray = [1, 2, 3, 4, "a", "b"];
console.log(arr2);
let arr3: CustomArray = [1, "x", 3, "X"];
console.log(arr3);
