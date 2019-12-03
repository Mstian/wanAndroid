<template>
	<view class="main" hover-class="hover" @click="toDetail(dataItem.link)">
		<view class="left">
			<view>
				<text class="title">{{dataItem.title}}</text>
			</view>
			<view>
				<text class="des">{{dataItem.desc}}</text>
			</view>
			<view class="oprate">
				<text @click.stop="collect($event,dataItem.id,dataindex)" :class="['collect_status','iconfont', dataItem.collect ? 'collec_true':'']">&#xe63f</text>
				<text class="time">{{dataItem.niceDate}}</text>
				<text class="author">{{dataItem.author}}</text>
			</view>
		</view>
		<view class="right">
			<image class="imgs" :src="dataItem.envelopePic" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			dataItem:{
				type:Object,
				default: function(e) {
					return {}
				}
			}
		},
		data(){
			return{
				
			}
		},
		created() {
			const domModule = weex.requireModule("dom");
			domModule.addRule('fontFace', {
				'fontFamily': "iconfont",
				'src': 'url("https://at.alicdn.com/t/font_1447575_fav8jsxiuzd.ttf")'
			})
		},
		methods:{
			collect(e, id, index) {
				// #ifdef APP-NVUE
				e.stopPropagation()
				// #endif
				// console.log(id);
				if (this.$store.state.userName.length > 0) {
					if (this.dataItem.collect) { //quxiao
						this.dataItem.collect = false;
						uni.request({
							url: `https://www.wanandroid.com/lg/uncollect_originId/${id}/json`,
							data: {},
							header: {
								'content-Type': 'application/json'
							},
							method: 'POST',
							success: function(data) {
								// console.log(data, '取消')
							}
						})
					} else {
						this.dataItem.collect = true;
						uni.request({
							url: `https://www.wanandroid.com/lg/collect/${id}/json`,
							data: {},
							header: {
								'content-Type': 'application/json'
							},
							method: 'POST',
							success: function(data) {
								// console.log(data, '收藏');
								uni.showToast({
								    title: '收藏成功',
								    duration: 2000,
									position:"bottom"
								});
							},
							complete: function(data) {
								// console.log(data, 'cop')
							}
						})
					}
				} else {
					uni.showModal({
						title: "提示",
						content: "您还未登录，去登录查看更多功能",
						success: function(res) {
							if (res.confirm) {
								uni.navigateTo({
									url: "../login/login"
								})
							} else if (res.cancel) {
								// console.log('用户点击取消');
							}
						}
					})
				}
			},
			toDetail(url){
				// console.log(url)
				uni.navigateTo({
					url:'../article_detail/article_detail?url='+url
				})
			}
		},
	}
	
</script>

<style>
	
	.main {
		flex-direction: row;
		height: 165px;
		align-items: center;
		padding: 10px 5px;
		margin:4px 0;
		background-color: #fff;
		border-radius: 4px;
	}
	
	.right {
		width: 90px;
		height: 150px;
		/* background-color: #566766; */
		margin-left: 5px;
		border-radius: 4px;
		overflow: hidden;
		padding: 5px 0;
	}
	
	.left {
		flex: 1;
		height: 130px;
		/* background-color: #4C6789; */
		flex-direction: column;
		justify-content: space-between;
		padding: 5px 5px;
	}
	
	.title {
		font-size: 14px;
		color: #333;
		/* font-weight: bold; */
		lines: 2;
		justify-content: flex-start;
		text-overflow:ellipsis; 
	}
	
	.des {
		font-size: 12px;
		color: #999;
		/* font-weight: bold; */
		lines: 3;
		text-overflow:ellipsis; 
	}
	
	.oprate {
		flex-direction: row;
		align-items: center;
	}
	
	.time {
		font-size: 12px;
		color: #aaa;
	}
	
	.author {
		font-size: 12px;
		color: #aaa;
		margin-left: 15px;
	}
	.imgs{
		flex: 1;
	}
	.hover{
		/* opacity: 0.9;*/
		background-color: #EFEFEF;
	}
	.collect_status {
		font-size: 10px;
		margin-right: 15px;
		color: #aaa;
	}
	 .iconfont {
	    font-family: iconfont;
		font-size: 16px;
	  }
	.collec_true {
		color: #DD524D;
	}
</style>
