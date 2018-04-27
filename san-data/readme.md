# a hello world for san
## 关于数据校验
- string 类型没什么好说的直接使用内建的DataTypes就行了
- number 这个如果使用内建的DataTypes 可能会出点问题，因为输入默认是字符串，校验可能会有些问题，且文档中说的也不是很详细，所以这里使用了自定义的function进行判断，一般来说我们因为是年龄所以要限定输入不能是以0开头的任意长度数字， 可以使用这个正则表达式^[1-9]\d*$判断。

![hello world for the ife](http://p7ue6lwfm.bkt.clouddn.com/check.gif)