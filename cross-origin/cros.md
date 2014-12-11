# Cross Origin #
## jsonp ##
1. ajax和jsonp这两种技术在调用方式上“看起来”很像，目的也一样，都是请求一个url，然后把服务器返回的数据进行处理，因此jquery和ext等框架都把jsonp作为ajax的一种形式进行了封装；
2. 但ajax和jsonp其实本质上是不同的东西。ajax的核心是通过XmlHttpRequest获取非本页内容，而jsonp的核心则是动态添加\<script\>标签来调用服务器提供的js脚本。
3. 所以说，其实ajax与jsonp的区别不在于是否跨域，ajax通过服务端代理一样可以实现跨域，jsonp本身也不排斥同域的数据的获取。
4. 还有就是，jsonp是一种方式或者说非强制性协议，如同ajax一样，它也不一定非要用json格式来传递数据，如果你愿意，字符串都行，只不过这样不利于用jsonp提供公开服务。
5. **jsonp仅仅ajax下的get方法支持，如果涉及到post等方法，jsonp就无策了。**

总而言之，jsonp不是ajax的一个特例，哪怕jquery等巨头把jsonp封装进了ajax，也不能改变着一点！
## 服务端Access-Control控制 ##
针对服务端进行控制访问配置，基本的参数配置可以参见：

    response.writeHead(200, {
    	// Content-Type
        "Content-Type": "text/plain",

	    // IE8 does not allow domains to be specified, just the *
	    "Access-Control-Allow-Origin": "*",
	 
	    // Note: IE8 doesn't preflight OPTIONS.
	    "Access-Control-Allow-Methods": "POST, GET, PUT, DELETE, OPTIONS",
	 
	    // Note: IE8 doesn't respect this header, might as well set it to false
	    "Access-Control-Allow-Credentials": false,
	 
	    // It seems that this is ignored.
	    "Access-Control-Max-Age": '86400', // 24 hours
	 
	    // All headers you wish to allow for XHR2 requests should be listed here.
	    // Chrome is more strict than Firefox in this regard
	    "Access-Control-Allow-Headers": "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
    });
