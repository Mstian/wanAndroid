>项目源代码地址：[https://github.com/Mstian/wanAndroid](https://github.com/Mstian/wanAndroid)
>项目博客地址：[https://www.jianshu.com/p/1557569e1b15](https://www.jianshu.com/p/1557569e1b15)
>项目下载地址：[https://www.pgyer.com/pv0D](https://www.pgyer.com/pv0D[图片上传中...(QRCode_258.png-586294-1575623828153-0)]
) 邀请码4566

![扫一扫下载体验](https://upload-images.jianshu.io/upload_images/17538702-760730b139bd5369.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
----
## 1. 项目截图 
----
### 首页

![首页](https://upload-images.jianshu.io/upload_images/17538702-8547dfd0ab6b9e06.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
----
### 登录
![登录](https://upload-images.jianshu.io/upload_images/17538702-60b7ec93bbbd8541.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
----
### 注册
![注册](https://upload-images.jianshu.io/upload_images/17538702-9b532ec48412758e.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
----
### 个人中心
![个人中心](https://upload-images.jianshu.io/upload_images/17538702-4dcbfe53d30d3045.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
----
### 体系
![体系](https://upload-images.jianshu.io/upload_images/17538702-52d528c043478220.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
----
### 公众号
![公众号](https://upload-images.jianshu.io/upload_images/17538702-c210099d0db43ff5.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
----
### 项目
![项目](https://upload-images.jianshu.io/upload_images/17538702-94db8cc44add6240.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
----
### 导航
![导航](https://upload-images.jianshu.io/upload_images/17538702-5293fa9296aa3240.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
----
### 搜索
![搜索](https://upload-images.jianshu.io/upload_images/17538702-c7691a74a12a159a.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
----
### 我的收藏
![我的收藏](https://upload-images.jianshu.io/upload_images/17538702-124a843b521fc55c.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
----

## 2.  项目结构
---
![项目结构](https://upload-images.jianshu.io/upload_images/17538702-fd4e4fd735f22105.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 项目结构脑图

[项目结构脑图](https://upload.cc/i1/2019/12/04/XZn8Ev.png)

## unpackage
unpackage文件夹主要存放打包后的文件，
官方说有的图片，文件可以放到这里，
不过我都放在了static文件夹中

## App.vue
里面的可以监控App的生命周期，
可以随时监控Appshow Apphide，
并做出相应反应操作。

## main.js
入口文件，主要引入公共使用工具，
并挂载到Vue原型上，以作全局方便使用。

## manifest.json
打包配置使用，例如我在项目中使用了
高德地图就需要配置高德地图appkey。
还有打包时的app图标，启动页图片等等。

## pages.json
页面配置，tabbar配置，调试配置

## common
common文件夹主要存放
公用css以及公用js文件 还有
项目中使用到的iconfont以及
自己封装的ajax请求等

## components
components主要用来存放
公用的组件例如弹窗，加载更多，
回到顶部，等等。

## pages
pages文件夹主要存放
正常开发的页面，例如首页，
个人中心，登录页等等

## static
static文件夹我用来存放
本地使用到的一些图片。
例如tabbar的icon等。

## store
store文件夹，vuex数据状态集中管理工具，
vuex中我主要存了用户的一些信息，比如用户名
在各个组件中需要使用时可以公用

## README.md
主要存放一些平时开发中的记录
比如有一些问题当时不能解决的，可以记录下来
或者某处使用的技术不成熟的等等，我当记事本用了

>uni-app 使用vue的语法+小程序的标签和API
>页面文件遵循 [Vue 单文件组件 (SFC) 规范](https://vue-loader.vuejs.org/zh/spec.html)
>组件标签靠近小程序规范，详见[uni-app 组件规范](https://uniapp.dcloud.io/component/README)
>接口能力（JS API）靠近微信小程序规范，但需将前缀 `wx` 替换为 `uni`，详见[uni-app接口规范]
>数据绑定及事件处理同 `Vue.js` 规范，同时补充了App及页面的生命周期
>为兼容多端运行，建议使用flex布局进行开发

项目的结构类似于Vue单页面应用结构，也类似于微信小程序项目结构配置，具体的请查看[uniapp官网](https://uniapp.dcloud.io/)
## 3.  项目功能
* 首页banner,文章列表
* 体系列表
* 搜索文章
* 公众号列表
* 项目列表
* 导航分类
* 个人中心
* 注册登录
* 收藏
* 常用网站
* 本机信息

## 4.  项目技术分析
---
实际上项目中也没有使用到特别复杂的技术，很多东西也都是对照着官方文档去写的，遇到不会的或者自己查不出来的就去社区提提问题，Dcloud社区环境还不错，遇到很多问题可以去社区提问，官方回答也还挺活跃，并且也可以去回答别人问题，总的来说很不错吧。<br/>[点击进入社区地址](https://ask.dcloud.net.cn/explore/)

#### 4.1 顶部导航栏
顶部导航栏根据需求分为两种，一种为***原生导航栏***，一种为禁止原生导航栏从而***自定义导航栏***
两种导航栏各有好处，官网如是说：
>uni-app 自带原生导航栏，在pages.json里配置。
>原生导航的体验更好，渲染新页面时，原生导航栏的渲染无需等待新页面dom加载，可以在新页面进入动画开始时就渲染。
>原生导航还可以避免滚动条通顶，并方便的控制原生下拉刷新。
>通过pages.json的配置，可以简单的、跨端的、高性能的开发业务。
>但原生导航栏的扩展能力有限的。尤其是微信下，没有提供太多导航栏的配置。
>在App下，pages.json里每个页面的app-plus下可以设置titleNView等更多参数，可以得到比微信小程序更丰富的扩展性。
>另外，开发者也可以在必要时取消原生导航栏，使用view自行绘制导航栏。
我在首页中禁止了原生导航栏，使用了可自由发挥制作的自定义导航栏

![首页顶部栏](https://upload-images.jianshu.io/upload_images/17538702-9ad57fe3e8b8ff7b.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
顶部栏分为***状态栏***和***内容区域***，状态栏即为显示时间运营商等状态的最上面一栏，安卓手机状态栏高度不统一，uniapp提供css变量***（--status-bar-height）***自动获取不同机型状态栏高度，为了风格统一下面content区域一般都固定为44px，如有特殊需求，可以适当增加高度。<br/>左边头像区域可点击，进入个人主页，右边搜索按钮可点击进入搜索页面
部分代码如下：
```
{
	"path": "pages/home/home",
	"style": {
		"navigationStyle": "custom",         //pages.json中禁用原生导航栏
		"enablePullDownRefresh": true,
		"app-plus": {
			"pullToRefresh": {
				"support": true,
				"color": "#DD524D",
				"offset": "70px"
			}
		}
	}
}

//自定义导航栏
<view class="header">
	<view class="status_bar"></view>
	<view class="header_content">玩安卓</view>
	<view class="pendant">
		<view @click="toMine()" class="avatar bgimg" :style="{ backgroundImage: 'url(' + bgImg + ')' }"></view>
		<view @click="toSearch()" class="search iconfont icon-sousuo"></view>
	</view>
</view>

<style>
.status_bar{
	height: var(--status-bar-height);
	width: 100%;
}
.header_content{
	width: 100%;
	height: 44px;
	line-height: 44px;
	text-align: center;
	color: #fff;
}
</style>

```




#### 4.2 列表渲染
因为这个开源项目由于大多数都是文章列表所以列表的渲染部门比较多，我在项目中才用了两种方式，***一种就是普通的vue页面列表渲染***，另外一种就是使用***nvue组件<list>去渲染***；第一种没什么好说的，直接使用v-for遍历数据进行渲染，可以触发pages.json配置的下拉刷新、页面触底onReachBottomDistance、titleNView的transparent透明渐变等。
部分代码如下：
```
onPullDownRefresh() { //下拉刷新  监听到下拉操作时进行逻辑操作
	this.reload = true;
	this.pageSize = 0;
	this.getArticleData(this.pageSize);
},
onReachBottom() { //上拉加载  监听到上拉操作时进行逻辑操作
	this.reload = false;
	this.pageSize++;
	this.getArticleData(this.pageSize);
}
```
同时还有一个列表滑动到一定位置，出现回到顶部按钮，点击回到顶部按钮回到顶部。

```
onPageScroll(scrollTop){ //控制回到顶部按钮显示与隐藏
	if(scrollTop.scrollTop >= 200){
		this.isTop = true
	}else{
		this.isTop = false
	}
},
toTop(){  //点击按钮调用api回到顶部
      uni.pageScrollTo({
		scrollTop: 0,
		duration: 300
	});
}
```
使用场景首页

第二种则不同，第二种是由于我要做tab选项卡的功能，最后决定采用nvue <list> 组件，并且同时使用了<refresh> <loading>组件添加下拉刷新，上拉加载功能。<br/>[nvue是什么？怎么用？](https://uniapp.dcloud.io/use-weex?id=nvue%E5%BC%80%E5%8F%91%E4%B8%8Evue%E5%BC%80%E5%8F%91%E7%9A%84%E5%B8%B8%E8%A7%81%E5%8C%BA%E5%88%AB)

顶部选项卡部分处理的不是特别好，使用了***scroll-view***和***swiper***结合去做，第一次加载一组数据，每切换一次选项卡，再重新加载一次数据，相当于就是说，每一组数据渲染了当前所有的swiper所以体验不好，很难受，看官方说每次缓存当前选项卡附近三条，具体的没有研究，项目里的选项卡处理是一个后续待优化的问题。<br/>
部分代码如下：
```
//tab部分
<scroll-view class="scroll_top" show-scrollbar="false" scroll-with-animation="true" scroll-x="true" :scroll-into-view="scrollIntoView">
	<view v-for="(item,index) in tabsList" :key="index" class="tabs" :id="'tabId'+index">
	       <text @click="changeTabs(index)" class="tabtxt" :class="tabIndex == index ? 'active' : ''">{{item.name}}</text>
	</view>
</scroll-view>

//内容部分
<swiper class="swiper" :current="tabIndex" :indicator-dots="false" :autoplay="false" :interval="3000" :duration="1000" @change="swiperChange">
	<swiper-item class="swiper_item" v-for="(item,index) in tabsList" :key="index">
		<list class="list" loadmoreoffset="15" @loadmore="loadMore(index)">
			<refresh class="refresh" @refresh="onrefresh(index)" @pullingdown="onpullingdown" :display="refreshing ? 'show' : 'hide'">
				<loading-indicator class="loading-icon" animating="true" v-if="refreshing"></loading-indicator>
		 		<text class="loading_txt">{{refreshTxt}}</text> 
			</refresh>
			<cell class="cell" v-for="(dataitem,dataindex) in contentList" :key="dataindex">
				<listItem :dataItem="dataitem" :dataindex="dataindex"></listItem>
			</cell>
			<cell class="loading-more" v-if="isLoading">
				<text class="loading-more-text">{{loadingText}}</text>
			</cell>
		</list>
	</swiper-item>
</swiper>
```
实际上uniapp提供了丰富的插件，插件市场有很多官方人员与开发者共同开发的优质插件，如果有一些特殊需求也可以在插件市场提出，如果有人感兴趣，可以帮你开发哦。
[点击去插件市场](https://ext.dcloud.net.cn/)

#### 4.3 数据请求
数据请求使用uniapp自身的api，***uni.request(OBJECT)***,在此基础上做了简单的封装，有利于统一部分的实现，比如showLoading,hideLoading,还有利于自己调试。
请求部分代码如下：
```
const ajaxJs = function(url,data,method,success,fail,complete){
	uni.showLoading({
		title: '加载中',
	});
	uni.request({
		url:url,
		data:data,
		header: {
			'content-Type': 'application/json'
		},
		method:method,
		responseType:'text',
		dataType: 'json',
		responseType: 'text',
		success:function({data}){
			// console.log(data);
			if(data.errorCode == 0){
				uni.hideLoading()
				if( success && typeof (success) == "function"){
					success(data)
					console.log(data,'请求成功'+"--"+url);
				}
				
			}else{
				uni.hideLoading()
				// console.log(data,'error');
			}
		},
		fail:function(data){
			uni.hideLoading()
			if( fail && typeof (fail) == "function"){
				fail(data)
			}
			console.log(data,'请求出错'+"--"+url);
		},
		complete:function(data){
			
			uni.hideLoading()
			if( complete && typeof (complete) == "function"){
				complete(data)
			}
			console.log(data,'complete'+"--"+url);
		}	
	})
}
export default{
	ajaxJs
}
```
为了统一管理请求地址，在common文件夹中建立requesturl文件夹用来存放所有接口：

```
const baseUrl = "https://www.wanandroid.com";

export default{
	// 首页
	_url_home_banner : baseUrl + "/banner/json",
	_url_home_article : function(pageSize){
		return baseUrl + "/article/list/" + pageSize + "/json"
	},
	_url_register : baseUrl + "/user/register",
	_url_login : baseUrl + "/user/login",
	_url_system : baseUrl + "/tree/json",
	_url_nav : baseUrl + "/navi/json",
	_url_website:baseUrl + "/friend/json",
	_url_hotkey: baseUrl + "/hotkey/json",
	_url_search: function(pageSize,k){
		return baseUrl + "/article/query/"+ pageSize +"/json?k="+k
	},
	_url_logout:baseUrl + "/user/logout/json",
	_url_collect_list: function (pageSize){
		return baseUrl + "/lg/collect/list/"+ pageSize +"/json"
	} 
}
```
全部暴露出去，在main.js中挂载到Vue原型上，方便调用。
*注意：在nvue中无法访问到Vue原型上属性，因此在nvue中我是单独写的接口。*

#### 4.4 其他技术应用
**webview**:在加载文章详情页的时候使用了webview组件；<br/>
web-view 是一个 web 浏览器组件，可以用来承载网页的容器，会自动铺满整个页面。
```
<web-view :webview-styles="webviewStyles" :src="url"></web-view>
```
其中可以配置webviewStyles，加载进度等，具体可查看官方文档。

**高德地图**：调用uniapp的api获取当前地址，然后通过本机地图打开，这里我使用的是高德地图，使用高德地图需要去成为开发者，获取appkey,打包时在manifest.json文件中进行配置。
[点击去高德地图开发平台](https://lbs.amap.com/api/)

**事件通讯**：使用uniapp通讯api，uni.$emit()注册事件，使用uni.$on()监听事件，使用场景，例如登录之后，首页渲染的数据列表都是未登录的状态，（因为登录后收藏过的文章收藏按钮需要变色），所以登录完成之后需要通知首页去刷新，重新携带用户数据去拉取数据，所以采用这个通讯机制。包括退出也是。
```
//登录后通知其他页面已登录			
uni.$emit("login")

uni.$on("login", function() { //监听登录账号
	uni.startPullDownRefresh();
});

uni.$on("logout", function() { //监听退出账号
	uni.startPullDownRefresh();
});

```
**本地存储**：历史搜索数据，存到了本地内存中，当当前用户退出登录时清理掉本地存储，在搜索按钮点击之后先获取本地key为history的数据，如果存在将该数据转换为数组，将此时搜索栏中搜索的关键词push进当前数组，然后转换为字符串存储在本地，如果本地没有key为history的数据那么直接将此时的关键字存到一个数组里，转为字符串形式存到key为history的本地存储中。
```
onNavigationBarSearchInputConfirmed(e) { //原生导航栏软键盘搜索
	//本地化搜索历史
	var _this = this;
	uni.getStorage({   //获取本地数据
		key:'history',
		complete:function(res){
			if(res.data){       //如果本地数据存在
				var arr = JSON.parse(res.data);
				arr.push(e.text);
				_this.historyList = arr;
				uni.setStorage({
					key:'history',
					data:JSON.stringify(arr)
				})
			}else{    //如果本地数据不存在
				var arr = []
				arr.push(e.text);
				_this.historyList = arr;
				uni.setStorage({
					key:'history',
					data:JSON.stringify(arr)
				})
			}
		}
	});
}
```
## 5.  存在的问题
#### 5.1 顶部选项卡问题
公众号，项目，体系二级页面，都使用了顶部选项卡来完成这部分的功能，但是体验效果确实不好，有时候数据加载慢的时候已经切换到下一个选项卡，数据还没有加载过来，依然显示上一个选项卡的数据，体验很不好。

#### 5.2 uniapp存在的一些问题
不知道是不是我使用方法的问题，uni.$on()监听到事件之后有时候会不执行下面的逻辑，很奇怪这个问题查了很久，没有找到问题。

#### 5.3 登录注册input框聚焦问题
聚焦时不能上推页面，也就是说，软键盘会遮挡input输入框，按照官方文档，设置必要的选项但是没用，我下载了hello uniapp官方体验版，也存在这个问题。

#### 5.4 第一次打开App卡顿问题
第一次打开App,切换到公众号，项目，导航时会非常卡顿，得等很长时间才能流畅运行，第一次切换之后就好多了。收藏也是，第一次在某个列表收藏某个文章时，会明显感到很慢，之后就会好点了。

#### 5.5 nvue使用问题
nvue采用weex基于原生引擎的渲染，体验与渲染效率比较好，但是在使用过程中踩了不少坑，因为之前没有使用和研究过weex，所以连最基本的样式刚开始都写不顺，如果使用熟练了weex写起来也很方便。比如文本只能最好写在<text>组件里，而且文字与text标签不能换行排列，否则用过你就知道了哈。
[点击到weex官网](https://weex.apache.org/zh/guide/introduction.html)

#### 5.6 安装包体积比较大
大概37M左右，还是比较大的。

先写这么多，以后有想起来的需要补充的定期补充一些内容。

最后真的很感谢鸿洋大神提供的开发api,与他的安卓开发社区，项目中的所有api均来自www.wanandroid.com网站纯属学习交流使用，不得用于商业用途。点击到[玩安卓社区](https://www.wanandroid.com/)
最初看到很多人在鸿洋大神的鼓励下，去使用kotlin,flutter,reactNative，java等去开发玩安卓app,自己也很羡慕，也就诞生了自己开发的念头，但局限于自己技术原因，因为前期接触过dcloud其他产品，所以开始学习了解使用uniapp去开发了这个安卓版本的《玩安卓App》
还要感谢uniapp官方以及该框架使用者，在开发过程中，在社区提出很多问题，有很多问题都得到了解决，并且还推荐了不少相关文档与知识。我是一名前端开发代码搬运工，等到有机会学会了reactNative 和 flutter，有机会还想使用flutter 和 reactNative再开发出自己的App。体验不同的体验。
玩安卓社区还有很多优秀的开源的kotlin,flutter,RN等开发的各种版本的玩安卓，有兴趣的大家可以自己去体验。
以上都是开发过程中遇到的问题和一些总结。
欢迎大家多多交流学习。转载请注明出处。
>项目源代码地址：[https://github.com/Mstian/wanAndroid](https://github.com/Mstian/wanAndroid)
>项目博客地址：[https://www.jianshu.com/p/1557569e1b15](https://www.jianshu.com/p/1557569e1b15)
>项目下载地址：[https://www.pgyer.com/pv0D](https://www.pgyer.com/pv0D[图片上传中...(QRCode_258.png-586294-1575623828153-0)]
) 邀请码4566

![扫一扫下载体验](https://upload-images.jianshu.io/upload_images/17538702-760730b139bd5369.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


——————————————————————————————————————————
##2019-12-6更新
增加功能：
1.分享文章：
客户端支持分享文章，分享的文章可以在登录状态下我的文章列表查看。（暂无删除功能，后续会补上）；
2.查看我分享的文章列表：

![分享文章](https://upload-images.jianshu.io/upload_images/17538702-1205d669d100cd77.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![我的文章查看](https://upload-images.jianshu.io/upload_images/17538702-a1309424d67fb660.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




















