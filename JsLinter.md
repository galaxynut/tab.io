作为码js代码，基本的语法校验以及潜藏bug可以通过相关的检测工具提前检测出来，    
下面对比当前流行的4中javascript linter工具

## 1. JSLint   
JSLint由Douglas大神(Douglas Crockford js之父)根据自己经验编写的一套js校验规则，可以看出这套工具的牛逼之处。    

**优点**   
- 大神之作，而且根据经验所得，必然全而精，尤其是对于初学者，看看对应规则会对JS有更深一步的了解   

**缺点**
- 没有对应的配置文件，由于相关相互依赖修改默认配置可能会出现相关错误
- 配置不方便
- 不能自定义相关配置
- 文档不多，不详细
- 不能根据对应的配置项显示对应的错    

## 2. JSHint   
JSHint由JSLint fork而来，使得每条规则都可以定制是否开启，对于大型项目来说非常有用，并且Doc很详细，集成到editor里非常容易。   

**优点**   
- 每条规则都可以定制（是否开启）
- 支持配置文件的方式，适合大型项目
- 支持相关js类库，比如jQuery，QUnit，NodeJS等等
- 还有一点对ES6有一定的支持    

**缺点**
- 和JSLint一样，对于对应的错误不知道是对应的哪条规则引起的
- 仅仅支持是否开启对应校验项
- 不支持自定义检测项

## 3. JSCS

JSCS和其它三种linter tools，主要是针对**js code style**校验，并不能对潜藏bug进行检测，   
支持自定义规则自定义校验（配置文件方式），同时也支持对JS相关类库    
如JQuery等校验，总共规则有超过90种，并且也是有对应的相关插件。    
对于项目中统一编程风格倒是挺适合的。   

**优点**
- 支持用户自定义配置，易集成
- 有对应的编程风格模板（如google style等），对于养成对应的编程风格很适合
- 错误能对应到出错的规则
- 支持对应的自定义插件

**缺点**
- 仅仅是针对代码风格的，对于检测bug，无能为力
- 4中工具中，性能最低，最慢的一个

## 4.ESLint

ESLint，个人最推荐的，易集成，对应插件多，报错能对应上规则，支持自定义，支持配置文件配置，  
并且文档详细，可以[参考](http://eslint.org/docs/rules/)，   
有行业标杆规范：[airbnb规范](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)

**有点**
- 所有的配置项都支持配置，并且支持扩展配置，可以配置到对应的配置文件中
- 易扩展，插件多
- 错误对应出错的规则明显
- 可以检测出潜藏bug，并且规则比其他几种多
- 对ES6完美支持，并且是唯一支持JSX语法的校验工具

**缺点**
- 需要对对应的配置规则要有所了解
- 工具检测反应比较慢

## 总结

从整体来说，检测工具个人觉得对于基本的bug可以检测是最好的，所以个人偏向于ESLint，并且对于ES6完美支持，  
对于IDE来说，我选择的是WEB Storm，默认支持ESLint。
Linter tools 只是针对最基本的代码的检测，对于js编码有一定的提高，也不要过于依赖。

**附上** webstorm中开启eslint的配置
- 1. nodejs安装
- 2. npm安装
- 3. `npm install eslint -g` 全局安装eslint,本地运行时如果报对应安装包不存在，请继续npm安装对应包
- 4. `npm install eslint-config-airbnb -g` 安装airbnb默认规则
- 5. 默认配置.eslintrc
    ```
  {
        "extends": "eslint-config-airbnb"
  }
    ```
- 6. 对应配置webstorm中的nodejs路径、eslint以及.eslintrc路径即可
