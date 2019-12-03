<template>
	<view class="circle">
		<view class="left">
			<view class="title">
				{{dataState.title}}
			</view>
			<view class="info">
				<text @click.stop="collect($event,dataState.id,dataState.originId)" :class="['iconfont','icon-collection','collec_true',dataState.collect ? 'collect_status' : '']">

				</text>
				<text>
					{{dataState.niceDate ? dataState.niceDate : '未知'}}
				</text>
				<text>
					{{dataState.author ? dataState.author : '未知'}}
				</text>
			</view>
		</view>
		<view class="right">
			{{dataState.chapterName}}
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
			}
		},
		data() {
			return {
				dataState:this.dataItem
			}
		},
		methods: {
			collect(e, id, originId) { //收藏
			// console.log(e,id,originId)
				e.stopPropagation()
				var _this = this;
				
				if(!this.dataState.collect){
					console.log('取消')
					this.$ajax("https://www.wanandroid.com/lg/uncollect/" + id + "/json?originId="+originId, {}, "POST", (data) => {
						if(data.errorCode == 0){
							var collect = {
								collect:true,
							}
							this.dataState = {...this.dataState, ...collect};
							uni.showToast({
								title: '取消收藏',
								duration: 2000,
								position: "bottom"
							});
						}
					})
				}else{
					console.log('收藏')
					this.$ajax("https://www.wanandroid.com/lg/collect/" + id + "/json", {}, "POST", (data) => {
						console.log(data,'收藏');
						if(data.errorCode == 0){
							var collect = {
								collect:false,
							}
							this.dataState = {...this.dataState, ...collect};
							uni.showToast({
							    title: '收藏成功',
							    duration: 2000,
								position:"bottom"
							});
						}
					})
				}
			}
		},
		onLoad() {
			// console.log('circle',this.dataItem)
			// this.dataState = this.dataItem;
		}

	}
</script>

<style>
	.circle {
		padding: 10px 10px;
		width: 100%;
		/* background: #fff; */
		display: flex;
		justify-content: space-between;
		height: 80px;

		margin-bottom: 5px;
	}

	.left {

		flex: 1;
		display: flex;
		align-items: flex-start;
		justify-content: space-around;
		flex-direction: column;
	}

	.title {
		width: 500rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 16px;
		color: #333;
	}

	.info {
		font-size: 14px;
		color: #999;
	}

	.info text {
		margin-right: 10px;
	}

	.right {
		width: 60px;
		height: 60px;
		background: #4CD964;
		border-radius: 50%;
		line-height: 60px;
		text-align: center;
		font-size: 12px;
		color: #fff;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.collec_true {
		color: #DD524D;
		font-size: 16px;
	}
	.collect_status {
		color: #999999;
		font-size: 16px;
	}
	
</style>
