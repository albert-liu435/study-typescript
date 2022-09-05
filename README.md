ts-node : 无法加载文件 C:\Users\Dell\AppData\Roaming\npm\ts-node.ps1，因为在此系统上禁止运行脚本。有关详细信息 3. 具体步骤

以管理员身份打开终端(或者 vs code)；
在终端执行: get-ExecutionPolicy，显示 Restricted(表示状态是禁止的)；
在终端执行: set-ExecutionPolicy RemoteSigned；
在终端执行: get-ExecutionPolicy，显示 RemoteSigned；
喝杯枸杞水庆祝成功。
————————————————
版权声明：本文为 CSDN 博主「想念如果有声音\_\_\_」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/qq_19249021/article/details/121355440

配置运行环境
https://blog.csdn.net/falwat/article/details/122165181

https://www.php.cn/tool/vscode/470137.html

Terminal ->run task tsc:build-tsconfig.json
