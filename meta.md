<p>在看一个页面的时候，发现html meta配置牛牛的，先贴一下源码</p>
<pre><code>&lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=utf-8&quot;&gt;
&lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;
&lt;meta http-equiv=&quot;Pragma&quot; CONTENT=&quot;no-cache&quot;&gt; 
&lt;meta http-equiv=&quot;Cache-Control&quot; CONTENT=&quot;no-cache&quot;&gt; 
</code></pre>

<p>解析一下：</p>
<p>1、解决乱码问题，如果支持html5就更简单了：
<code>&lt;meta charset='utf-8'/&gt;</code></p>
<p>2、解决IE打开时的兼容模式问题</p>
<p>3、html不缓存（开发的时候很有用）</p>
<p>对于具体的meta配置详情，可以参考<a href="http://www.metatags.info/meta_name_expires" title="metatag info">http://www.metatags.info/meta<em>name</em>expires</a></p>
