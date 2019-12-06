<template>
	<view class="content">
		<backtop v-if="isTop"></backtop>
		<!-- 头部自定义导航栏 -->
		<view class="header">
			<view class="status_bar"></view>
			<view class="header_content">玩安卓</view>
			<view class="pendant">
				<view @click="toMine()" class="avatar bgimg" :style="{ backgroundImage: 'url(' + bgImg + ')' }"></view>
				<view @click="toSearch()" class="search iconfont icon-sousuo"></view>
			</view>
		</view>
		<!-- banner -->
		<view class="margin_top_status"></view>
		<!-- 占位 -->
		<view class="banner">
			<swiper class="swiper" circular='true' @change='changeSwiper'>
				<swiper-item v-for="(item,index) in bannerArr" :key='index' @click="jump(item.url)">
					<view :style="{backgroundImage:'url('+ item.imagePath +')',backgroundSize:'cover'}" class="swiper-item bgimg"></view>
				</swiper-item>
			</swiper>
			<view class="tabindex">
				<view v-html="bannerArr[nowIndex-1].title"></view>
				<view>{{nowIndex}}/{{bannerArr.length}}</view>
			</view>
		</view>
		<!-- main -->
		<view class="main">
			<view hover-class="media-item-hover" v-for="(item,index) in articleListArr" :key='index' class="main_list" @click="jump(item.link)">
				<view class="main_left">
					<view class="text text_overflow">{{item.title}}</view>
					<view class="status">
						<view @click.stop="collect($event,item.id,index)" :class="['collect_status','iconfont','icon-collection', item.collect ? 'collec_true' : '']">

						</view>
						<view class="times">
							{{item.niceDate ? item.niceDate : ''}}
						</view>
						<view class="author">
							{{item.shareUser ? item.shareUser : item.author}}
						</view>
					</view>
				</view>
				<view class="main_right">{{item.superChapterName ? item.superChapterName : '暂未分类'}}</view>
			</view>
			<!-- loadmore -->
			<uni-load-more :status="loadingConfig.status" :content-text="loadingConfig.contentText"></uni-load-more>
		</view>
	</view>
</template>

<script>
	import backtop from '../../components/toTop/toTop.vue'
	export default {
		data() {
			return {
				isTop:false,
				title: 'Hello',
				bgImg: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3209370120,2008812818&fm=26&gp=0.jpg',
				nowIndex: 1,
				bannerArr: [],
				articleListArr: [],
				pageSize: 0,
				loadingConfig: {
					status: 'more',
					contentText: {
						contentdown: "上拉显示更多",
						contentrefresh: "正在加载...",
						contentnomore: "没有更多数据了"
					}
				},
				reload: false,
			};
		},
		components:{
			backtop
		},
		onReady() {
			this.getBannerData();
			this.getArticleData(this.pageSize);
		},
		onLoad() {
			uni.$on("login", function() {
				uni.startPullDownRefresh();
			});

			uni.$on("logout", function() {
				uni.startPullDownRefresh();
			});
			
			uni.$on("backtop",function(){
				uni.pageScrollTo({
				    scrollTop: 0,
				    duration: 300
				});
			})
		},
		onUnload() {
			uni.$off();
		},
		onPageScroll(scrollTop){
			if(scrollTop.scrollTop >= 200){
				this.isTop = true
			}else{
				this.isTop = false
			}
		},
		methods: {
			
			collect(e,id, index) { //收藏
				
				e.stopPropagation()
				
				if (this.$store.state.userName.length > 0) {
					if (this.articleListArr[index].collect) { //quxiao
						this.articleListArr[index].collect = false;
						this.$ajax("https://www.wanandroid.com/lg/uncollect_originId/" + id + "/json", {}, "POST", (data) => {
							// console.log(data, '取消')
						})
					} else {
						this.articleListArr[index].collect = true;
						this.$ajax("https://www.wanandroid.com/lg/collect/" + id + "/json", {}, "POST", (data) => {
							// console.log(data, '收藏');
							uni.showToast({
							    title: '收藏成功',
							    duration: 2000,
								position:"bottom"
							});
						})
					}
				} else {
					uni.showModal({
						title: "提示",
						content: "您还未登录，去登录查看更多功能",
						success: function(res) {
							if (res.confirm) {
								uni.navigateTo({
									url:"../login/login"
								})
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					})
				}
			},
			getBannerData() { //获取banner
				var _this = this;
				this.$ajax(this.$urls._url_home_banner, {}, "GET", function(data) {
					if (data) {
						_this.bannerArr = data.data;
					}
				})
			},
			getArticleData(pageSize = 0) { //文章列表
				// var _this = this;
				this.$ajax(this.$urls._url_home_article(pageSize), {}, "GET", (data) => {
					// console.log(data,'13');
					if (this.reload) {
						this.articleListArr = data.data.datas;
					} else {
						this.loadingConfig.status = 'loading';
						this.articleListArr = this.articleListArr.concat(data.data.datas);
					}
					uni.stopPullDownRefresh();
				})
			},
			toMine() {
				// console.log(234);
				uni.navigateTo({
					url: '../mine/mine',
					animationType: 'slide-in-left',

				});
			},
			changeSwiper(e) {
				this.nowIndex = e.detail.current + 1;
			},
			toSearch() {
				uni.navigateTo({
					url: "../search/search"
				})
			},
			jump(url) {
				uni.navigateTo({
					url: "../article_detail/article_detail?url=" + url,
					animationType: 'slide-in-bottom',
				})
			}
		},
		onPullDownRefresh() { //下拉
			this.reload = true;
			this.pageSize = 0;
			this.getArticleData(this.pageSize);
		},
		onReachBottom() { //上拉
			this.reload = false;
			this.pageSize++;
			this.getArticleData(this.pageSize);
		}
	};
</script>

<style>
	@import url('./home.css');
</style>
