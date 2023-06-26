//数组是泛型接口

// 实际上，JS中的数组在TS中就是一个泛型接口。

// 解释：当我们在使用数组时，TS会根据数组的不同类型，来自动将类型变量设置为相应的类型。

// 技巧：可以通过Ctrl+鼠标左键来查看具体的类型信息。

const strs = ["a", "b", "c"];
strs.forEach((item) => {});

const nums = [1, 3, 5];
nums.forEach((item) => {});
