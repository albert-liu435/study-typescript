// A. 项目内共享类型
// 如果多个.ts文件中都用到同一个类型，此时可以创建.d.ts文件提供该类型，实现类型共享。
// a.ts
import { Props } from "./index"; //通过import导入
// type Props = { x: number; y: number }

let p1: Props = {
  x: 1,
  y: 2,
};
