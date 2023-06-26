// 交叉类型
// 交叉类型（&）：功能类似于接口继承（extends），用于组合多个类型为一个类型（常用于对象类型）。

// 比如，
interface Person {
  name: string;
  say(): number;
}
interface Contact {
  phone: string;
}
type PersonDetail = Person & Contact;
let obj: PersonDetail = {
  name: "jack",
  phone: "aaa",
  say() {
    return 1;
  },
};

// 解释：使用交叉类型后，新的类型PersonDetail就同时具备了Person和Contact的所有属性类型。

// 相当于，
// type PersonDetail = { name: string; phone: string}
