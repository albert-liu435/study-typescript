// 6. readonly(只读修饰符)
// 表示只读，用来防止在构造函数之外对属性进行赋值。（只能在构造函数里进行赋值）

class Person {
	// 只读属性
	//注意：只要是readonly来修饰的属性，无论有没有默认值，都要指定类型
	 readonly age: number = 18 
	constructor(age: number) {
			this.age = age
	}
}
// 错误演示
	readonly setAge() {  //"readonly" 修饰符仅可出现在属性声明或索引签名中。
			this.age = 20  //无法分配到 "age" ，因为它是只读属性。
	}

// 	解释：

// 使用readonly关键字修饰该属性是只读的，注意只能修饰属性不能修饰方法。
// 注意：属性age后面的类型注解（比如，此处的number）如果不加，则age的类型为18（字面量类型）。
// 接口或者{}表示的对象类型，也可以使用readonly。

//α.在接口中使用：
interface IPerson {
	readonly name: string
}

let obj: IPerson = {
	name: 'jack'
}
obj.name = 'rose' //代码提示：无法分配到 "name" ，因为它是只读属性。

//β.在普通的类型对象中：
let obj: {readonly name: string} = {
	name: 'jack'
}
obj.name = 'rose' //代码提示：无法分配到 "name" ，因为它是只读属性。
