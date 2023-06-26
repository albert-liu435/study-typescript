//场景:在地图中，使用经纬度坐标来标记位置信息
//可以使用数组来记录坐标，那么，该数组中只有两个元素，并且这两个元素都是数值类型.
//使用 numberl] 的缺点: 不严谨，因为该类型的数组中可以出现任意多个数字。

// let position: number[] = [39, 114, 1, ,3, 4]

// 使用 元组 ：
//更好的方式 :元组 ( Tuple )
//元组类型是另一种类型的数组，它确切地知道包含多少个元素，以及特定索引对应的类型
//1元组类型可以确切地标记出有多少个元素，以及每个元素的类型
//2该示例中，元素有两个元素，每个元素的类型都是 number。
let position: [number, string] = [39, "114"];
console.log(position);
