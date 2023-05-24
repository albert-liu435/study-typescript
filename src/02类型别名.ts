let arr1: (number | String)[] = [1, "X", 2, "y"];
console.log(arr1);

//类型别名，为任意类型起别名
//使用场景:当同一类型(复杂)被多次使用时，可以通过类型别名，简化该类型的使用。
type CustomArray = (number | string)[];

let arr2: CustomArray = [1, 2, 3, 4, "a", "b"];
console.log(arr2);
let arr3: CustomArray = [1, "x", 3, "X"];
console.log(arr3);
