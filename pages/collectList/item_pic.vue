<template>
	<view class="circle">
		<view class="left">
			<view class="title">
				{{dataItem.title}}
			</view>
			<view v-html="dataItem.des" class="des">
				<!-- 我么爱我么爱我么爱我么爱我么爱我么爱我么爱我么爱我么爱我么爱我么爱我么爱我么爱我么爱我么爱我么爱我么爱我么爱我么爱 -->
			</view>
			<view class="info">
				<text @click.stop="collect($event,dataItem.id,dataItem.originId)" :class="['collect_status','iconfont','icon-collection','collec_true']">
				
				</text>
				<text>
					{{dataItem.niceDate}}
				</text>
				<text>
					{{dataItem.author}}
				</text>
			</view>
		</view>
		<view class="right">
			<image :src="dataItem.envelopePic" mode=""></image>
		</view>
	</view>
</template>
	
<script>
	export default{
		props:{
			dataItem:{
				type:Object,
				default:function(){
					return{}
				}
			}
		},
		data(){
			return{
				
			}
		},
		methods:{
			collect(e, id, originId) { //收藏
				e.stopPropagation()
				this.$ajax("https://www.wanandroid.com/lg/uncollect/" + id + "/json?originId="+originId, {}, "POST", (data) => {
					console.log(data, '取消')
					if(data.errorCode == 0){
						uni.showToast({
							title: '取消收藏',
							duration: 2000,
							position: "bottom"
						});
					}
				})
			}
		},
		onLoad() {
			console.log('pic',this.dataItem);
			
		}
	}
</script>

<style>
	.circle{
		padding: 10px 10px;
		width: 100%;
		
		display: flex;
		justify-content: space-between;
		height: 120px;
		margin-bottom: 5px;
		/* background: #007AFF; */
	}
	.left{
		
		flex: 1;
		display: flex;
		align-items: flex-start;
		justify-content: space-around;
		flex-direction: column;
	}
	.title{
		width: 500rpx;
		overflow:hidden;
		text-overflow:ellipsis;
		white-space:nowrap;
		font-size: 16px;
		color: #333;
	}
	.des{
		width: 500rpx;
		overflow:hidden;
		text-overflow:ellipsis;
		white-space:nowrap;
		font-size: 14px;
		color: #666;
	}
	.info{
		font-size: 14px;
		color: #999;
	}
	.info text{
		margin-right: 10px;
	}
	.right{
		width: 70px;
		height: 100px;
		/* background: #4CD964; */
		display: flex;
	}
	.right image{
		flex: 1;
		width: 100%;
		height: 100%;
	}
	
	.collect_status {
		font-size: 16px;
	}
	
	.collec_true {
		color: #DD524D;
		font-size: 16px;
	}
</style>
