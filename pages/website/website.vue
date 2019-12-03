<template>
	<view class="web">
		<view hover-class="hover" class="weblist" v-for="(item,index) in webSiteList" :key='index'  @click="toDetail(item.link)" >
			{{item.name}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				webSiteList:[],
			}
		},
		methods: {
			getWebSiteList(){
				this.$ajax(this.$urls._url_website,{},"GET",({data})=>{
					// console.log(data);
					this.webSiteList = data;
				})	
			},
			toDetail(url){
				uni.navigateTo({
					url:"../article_detail/article_detail?url="+url
				})
			}
		},
		onPullDownRefresh(){
			setTimeout(()=>{
				uni.stopPullDownRefresh()
			},2000)
		},
		onReady() {
			uni.startPullDownRefresh()
			this.getWebSiteList();
		}
	}
</script>

<style>
	.web{
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 20px 0;
	}
	.weblist{
		width: 80%;
		height: 50px;
		background-color: #4CD964;
		border-radius: 999rpx;
		margin-top: 15px;
		font-size: 36rpx;
		color: #fff;
		text-align: center;
		line-height: 50px;
		box-shadow: 1px 1px 3px #EEEEEE;
	}
	.hover{
		opacity: 0.8;
	}
</style>
