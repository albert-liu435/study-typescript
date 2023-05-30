// 1.Partial
// 作用：用来构造（创建）一个类型，将Type的所有属性设置为可选。

//解释：构造出来的新类型PartialProps结构和Props相同，但所有属性都变为可选的。
interface Props {
  id: string;
  children: number[];
}

type PartialProps = Partial<Props>;

let p1: Props = {
  id: "",
  children: [1],
};
let p2: PartialProps = {}; //因为PartialProps是可选的，所以不会报错
