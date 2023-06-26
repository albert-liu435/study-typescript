// 3. 类型断言
// 有时候你会比TS更加明确一个值的类型，此时，可以使用类型断言来指定更具体的类型。

// 比如，

// 注意：getElementById方法返回值的类型是HTMLElement，该类型只包含所有标签公共的属性或方法，不包含a标签特有的href等属性。

// 因此，这个类型太宽泛（不具体），无法操作href等a标签特有的属性或方法。

// 解决方式：这种情况下就需要使用类型断言指定更加具体的类型。

// 如何使用类型断言

// 解释：

// 使用 as 关键字实现类型断言。
// 关键字 as 后面的类型是一个更加具体的类型（HTMLAnchorElement是HTMLElement的子类型）
// HTMLAnchorElement是a标签对应的dom元素类型，因此通过类型断言，aLink的类型变得更加具体，这样就可以访问a标签特有的属性或方法了（比如href属性）。
// 另一种语法，使用<>语法，这种语法形式不常用知道即可：
// ————————————————
// 版权声明：本文为CSDN博主「蜡笔雏田学前端」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/xuxuii/article/details/126569192


const aLink = document.getElementById('link') as HTMLAnchorElement
// const aLink = <HTMLAnchorElement>document.getElementById('link')
aLink.href
