type Props = { x: number; y: number };

export { Props };

// 操作步骤：

// 创建index.d.ts类型声明文件。
// 创建需要共享的类型，并使用export导出（TS中的类型也可以使用import/export实现模块化功能）。
// 在需要使用共享类型的.ts文件中，通过import导入即可（.d.ts后缀导入时，直接省略）。
