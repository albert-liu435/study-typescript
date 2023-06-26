// 使用泛型创建一个函数：
function id<Type>(value: Type): Type {
  return value;
}

//调用泛型函数：
// 1 以number类型调用泛型函数
const num = id<number>(10);

// 2 以string类型调用泛型函数
const str = id<string>("a");

// 3 以boolean类型调用泛型函数
const ret = id<boolean>(true);

console.log(num, str, ret);

// 解释：

// 语法：在函数名称后面添加< > <><>(尖括号)，尖括号中指定具体的类型，比如，此处的number。
// 当传入类型number后，这个类型就会被函数声明时指定的类型变量Type捕捉到。
// 此时，Type的类型就是number，所以，函数id参数和返回值类型也都是number。
// 同样，如果传入类型string，函数id参数和返回值的类型就都是string。

// 这样，通过泛型就做到了让id函数与多种不同的类型一起工作，实现了复用的同时保证了类型的安全。

// 简化调用泛型函数
let num1 = id(100);
let str1 = id("abc");

console.log(num1, str1);
// 解释：

// 在调用泛型函数时，可以省略<类型>来简化泛型函数的调用。
// 此时，TS内部会采用一种叫做类型参数推断的机制，来根据传入的实参自动推断出类型变量Type的类型。
// 比如，传入实参10，TS会自动推断出变量num的类型number，并作为Type的类型。
// 推荐：使用这种简化的方式调用泛型函数，使代码更短，更易于阅读。

// 说明：当编译器无法推断类型或者推断的类型不准确时，就需要显式地传入类型参数。
// ————————————————
// 版权声明：本文为CSDN博主「蜡笔雏田学前端」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/xuxuii/article/details/126724000
