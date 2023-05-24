//函数的类型实际上指的是:函数参数和返回值的类型
//为函数指定类型的两种方式:1 单独指定参数、返回值的类型 2 同时指定参数、返回值的类型
//1、单独指定参数、返回值的类型
function add(num1, num2) {
    return num1 + num2;
}
var add1 = function (num1, num2) {
    return num1 + num2;
};
console.log(add(1, 2));
console.log(add1(3, 4));
// 2. 同时指定参数、返回值类型：
var add2 = function (num1, num2) {
    return num1 + num2;
};
console.log(add2(4, 4));
//如果函数没有返回值，那么，函数返回值类型为 : void。
function greet(name) {
    console.log("Hello", name);
}
greet("jack");
//使用函数实现某个功能时，参数可以传也可以不传。这种情况下，在给函数参数指定类型时，就用到可选参数了
//比如，数组的 slice 方法，可以 slice() 也可以 slice(1) 还可以 slice(1,3)。
//可选参数:在可传可不传的参数名称后面添加 ?(问号)。
//注意:可选参数只能出现在参数列表的最后，也就是说可选参数后面不能再出现必选参数
// function mySlice(start?: number,end?: number): void {
// 	console.log('起始索引：', start, '结束索引：', end)
// }
function mySlice(start, end) {
    console.log("起始索引：", start, "结束索引：", end);
}
mySlice(10);
mySlice(1);
mySlice(1, 3);
