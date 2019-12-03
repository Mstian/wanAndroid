<template>
	<view class="circle">
		<view class="left">
			<view v-html="dataItem.title" class="title">
			</view>
			<view class="info">
				<text>
					{{dataItem.niceDate ? dataItem.niceDate : '未知'}}
				</text>
				<text>
					{{dataItem.author}}
				</text>
			</view>
		</view>
		<view class="right">
			{{dataItem.superChapterName}}
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
		methods:{
			
		},
		onLoad() {
			// console.log('circle',this.dataItem)
		}
		
	}
</script>

<style>
	.circle{
		padding: 10px 10px;
		width: 100%;
		/* background: #fff; */
		display: flex;
		justify-content: space-between;
		height: 80px;
		
		margin-bottom: 5px;
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
	.info{
		font-size: 14px;
		color: #999;
	}
	.right{
		width: 60px;
		height: 60px;
		background: #4CD964;
		border-radius: 50%;
		line-height: 60px;
		text-align: center;
		font-size: 12px;
		color: #fff;
	}
</style>
