//作用：用来构造一个类型，将Type的所有属性都设置为readonly（只读）。

interface Props {
	id: string
	children: number[]
}

type ReadonlyProps = Readonly<Props>

// 解释：构造出来的新类型Readonly结构和Props相同，但所有属性都变为只读的。

//当我们想重新给id属性赋值时，就会报错：无法分配到"id"，因为它是只读属性。

