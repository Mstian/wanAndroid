<template>
	<view class="circle">
		<view class="left">
			<view v-html="dataItem.title" class="title">
				
			</view>
			<view v-html="dataItem.des" class="des">
				<!-- 我么爱我么爱我么爱我么爱我么爱我么爱我么爱我么爱我么爱我么爱我么爱我么爱我么爱我么爱我么爱我么爱我么爱我么爱我么爱 -->
			</view>
			<view class="info">
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
</style>
