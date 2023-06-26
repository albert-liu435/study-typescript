class Point {
  x = 10; //指定类的实例属性，设置默认值来实现的
  y = 10;
  //解释：方法的类型注解（参数和返回值）与函数用法相同。
  scale(n: number): void {
    this.x *= n;
    this.y *= n;
  }
}
const p = new Point();
p.scale(10);

console.log(p.x, p.y);
