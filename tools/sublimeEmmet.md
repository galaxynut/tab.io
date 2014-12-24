## sublime3 Emmet 安装之后快捷键无法使用解决 ##

1. 启动sublime时，发现pyv8安装报错
2. 获取pyv8安装包，手动安装，路径`https://github.com/emmetio/pyv8-binaries`
3. 注意放置的路径`Preference > Browser Packages`下，新建文件夹PyV8，再将下载的包解压至该文件夹目录下，重启sublime即可

## Emmet中一些快捷键 ##

1. `Tab`或者`Ctrl+e`执行
2. 相关语法可以参见[http://www.cnblogs.com/WhiteCusp/p/3360468.html](http://www.cnblogs.com/WhiteCusp/p/3360468.html "emmet语法")

<!-- 
    
	    ！html标签
	    > 子嵌入 
	    + 兄弟节点
	    ^ 跳入父层
	    # 添加id
	    . 添加class
	    * 个数
	    $ 序列号 
		[] 自定义属性 key=value键值对 空格隔开
		{} val值
    -->
    <!-- h$[title=item$]{Header $}*3 -->
    <h1 title="item1">Header1</h1>
    <h2 title="item2">Header2</h2>
    <h3 title="item3">Header3</h3>
    <!-- ul>li#item$$$*5 -->
    <ul>
    	<li id="item001"></li>
    	<li id="item002"></li>
    	<li id="item003"></li>
    	<li id="item004"></li>
    	<li id="item005"></li>
    </ul>
    <!-- p>{click}+a{here}+{to continue} -->
 	<p>click<a href="">here</a>to continue</p>

 	<!-- table>thead+(tr#tr$$$>td#td$$$*5)*3 -->
 	<table>
 		<thead></thead>
 		<tr id="tr001">
 			<td id="td001"></td>
 			<td id="td002"></td>
 			<td id="td003"></td>
 			<td id="td004"></td>
 			<td id="td005"></td>
 		</tr>
 		<tr id="tr002">
 			<td id="td001"></td>
 			<td id="td002"></td>
 			<td id="td003"></td>
 			<td id="td004"></td>
 			<td id="td005"></td>
 		</tr>
 		<tr id="tr003">
 			<td id="td001"></td>
 			<td id="td002"></td>
 			<td id="td003"></td>
 			<td id="td004"></td>
 			<td id="td005"></td>
 		</tr>
 	</table>
 	
 	<!-- table>.row>.col -->
 	<table>
 		<tr class="row">
 			<td class="col"></td>
 		</tr>
 	</table>
 	<!-- a:link -->
 	<a href="http://www.baidu.com"></a> 

