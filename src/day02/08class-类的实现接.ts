interface Singale {
  sing(): void;
  name: string;
}

class Person implements Singale {
  name = "jack";

  sing() {
    console.log("你是我的小呀小苹果");
  }
}

const p = new Person();
console.log(p.name);
p.sing();

// 解释：

// 通过implements 关键字让class实现接口。
// Person类实现接口Singable意味着，Person类中必须提供Singable接口中指定的所有方法和属性。
