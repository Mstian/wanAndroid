<template>
	<view class="share">
		<view class="title">
			<input type="text" v-model="title" placeholder="请输入分享文章标题">
		</view>
		<view class="link">
			<input type="text" v-model="link" placeholder="请输入分享文章链接">
		</view>
		<view class="btn">
			<button @click="postArticle()" type="warn">确认分享</button>
		</view>
		<view @click="onItemClick" class="gif">
			<image src="../../static/timg2.gif" mode="aspectFit"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:"",
				link:"",
			}
		},
		methods: {
			onItemClick(event) {
				uni.previewImage({
					urls: ["../../static/timg.gif","../../static/timg2.gif"]
				})
			},
			postArticle(){
				this.$ajax(this.$urls._url_user_article(this.title,this.link),{},"POST",(data)=>{
					if(data.errorCode == 0){
						uni.showModal({
							title: "提示",
							content: "分享成功，去我的分享列表查看？",
							success: function(res) {
								if (res.confirm) {
									uni.navigateTo({
										url:"../collectList/collectList?type=mat"
									})
								} else if (res.cancel) {
									console.log('用户点击取消');
								}
							}
						})
					}
				},()=>{},(data)=>{
					console.log(data)
					if(data.data.errorCode == -1){
						uni.showToast({
							title:data.data.errorMsg,
							position:'bottom'
						})
					}
				})
			}
		}
	}
</script>

<style>
.share{
	padding: 20px;
}
.share view{
	padding: 5px;
	margin: 10px 0;
}
input{
	border: 1px solid #eee;
	padding: 10px;
	font-size: 14px;
	color: #666666;
}
</style>
