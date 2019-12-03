<template>
	<view class="main" hover-class="hover" @click="toDetail(dataItem.link)">
		<view class="left">
			<view><text class="title">{{dataItem.title}}</text></view>
			<view class="oprate">
				<text @click.stop="collect($event,dataItem.id,dataindex)" :class="['collect_status','iconfont',dataItem.collect ? 'collec_true':'']">&#xe63f</text>
				<text class="time">{{dataItem.niceDate}}</text>
				<text class="author">{{dataItem.author}}</text>
			</view>
		</view>
		<view class="right">
			<text class="rtxt">{{dataItem.superChapterName}}</text>
			<!-- <image class="imgs" :src="dataItem.envelopePic" mode=""></image> -->
		</view>
		
	</view>
</template>

<script>
	
	export default {
		props: {
			dataItem: {
				type: Object,
				default: function(e) {
					return {}
				}
			},
			dataindex: {
				type: Number,
				default: function(e) {
					return 0
				}
			}
		},
		data() {
			return {
				
			}
		},
		created() {
			const domModule = weex.requireModule("dom");
			domModule.addRule('fontFace', {
				'fontFamily': "iconfont",
				'src': 'url("https://at.alicdn.com/t/font_1447575_fav8jsxiuzd.ttf")'
			})
		},
		methods: {
			onClick() {

			},
			change() {

			},
			toDetail(url) {
				// console.log(url)
				uni.navigateTo({
					url: '../article_detail/article_detail?url=' + url
				})
			},
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
								// console.log(data, '收藏')
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
			}
		},
		onReady() {
			console.log(this.dataItem);
		}
	}
</script>

<style>
	.main {
		flex-direction: row;
		height: 100px;
		align-items: center;
		padding: 10px 5px;
		margin: 2px 0;
		background-color: #fff;
		border-radius: 4px;
	}

	.iconfont {
		font-family: iconfont;
		font-size: 16px;
	}

	.right {
		width: 60px;
		height: 60px;
		margin-left: 5px;
		border-radius: 50%;
		overflow: hidden;
		padding: 10px 0px;
		background-color: #F24544;
		align-items: center;
		justify-content: center;
	}
	.left {
		flex: 1;
		height: 90px;
		/* background-color: #4C6789; */
		flex-direction: column;
		justify-content: space-between;
		padding: 10px 5px;
	}

	.title {
		font-size: 14px;
		color: #333;
		/* font-weight: bold; */
		lines: 3;
		justify-content: flex-start;
		text-overflow: ellipsis;
	}

	.des {
		font-size: 12px;
		color: #999;
		/* font-weight: bold; */
		lines: 3;
		text-overflow: ellipsis;
	}

	.oprate {
		flex-direction: row;
		align-items: center;
	}

	.time {
		font-size: 12px;
		color: #aaa;
		margin-left: 20px;
	}

	.author {
		font-size: 12px;
		color: #aaa;
		margin-left: 20px;
	}

	.imgs {
		flex: 1;
	}

	.hover {
		background-color: #efefef;
	}

	.rtxt {
		color: #fff;
		font-size: 12px;
		
	}

	.collect_status {
		font-size: 12px;
		color: #aaa;
	}

	.collec_true {
		color: #DD524D;
	}
</style>
