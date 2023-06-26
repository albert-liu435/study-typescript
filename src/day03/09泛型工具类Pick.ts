//https://blog.csdn.net/p1967914901/article/details/127292145
// 3. Pick<Type, Keys>
// 作用：从Type中选择一组属性来构造新类型。

// 解释：

// Pick工具类型有两个类型变量：1、表示选择谁的属性 2、表示选择哪几个属性。
// 其中第二个类型变量，如果只选择一个则只传入该属性名即可。
// 第二个类型变量传入的属性只能是第一个类型变量中存在的属性。
// 构造出来的新类型PickProps，只有id和title两个属性类型。

interface Props {
  id: string;
  title: string;
  children: number[];
}

type PickProps = Pick<Props, "id" | "title">;
