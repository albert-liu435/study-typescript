// B. 参数类型，相同位置的参数类型要相同（原始类型）或兼容（对象类型）
// 参数为原始类型
type F1 = (a: number) => void
type F2 = (a: number) => void
let f1: F1
let f2: F2
f1 = f2
f2 = f1

//解释：函数类型F2兼容函数类型F1，因为F1和F2的第一个参数类型相同。

// 参数为对象类型
interface Point2D { x: number; y: number }
interface Point3D { x: number; y: number; z: number }

type F2 = (p: Point2D) => void //相当于有2个参数
type F3 = (p: Point3D) => void //相当于有3个参数

let f2: F2
let f3: F3

f3 = f2
// 错误示范：
// f2 = f3
// 解释：

// 注意，此处与前面讲到的接口兼容性冲突。
// 技巧：将对象拆开，把每个属性看做一个个参数，则，参数少的（f2）可以赋值给参数多的（f3）。