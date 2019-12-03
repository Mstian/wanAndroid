<template>
	<view>
		<view class="header">
			<view @click="$tools.closeWin()" class="close_btn iconfont icon-close"></view>
			<view class="imgs"></view>
			<view class="txt">登录</view>
			<view class="square"></view>
		</view>
		<view class="login">
			<view class="main">
				<view class="name">
					<text>用户：</text>
					<input type="text" adjust-position=true v-model="userName" placeholder="请输入用户名">
				</view>
				<view class="password">
					<text>密码：</text>
					<input type="text" password="true" adjust-position=true v-model="passWord" placeholder="请输入密码">
				</view>
			</view>
		</view>
		<view class="login_btn">
			<button type="warn" @click="loginNow()">立即登录</button>
			<view class="to_register">没有账号? <text @click="to_register()">立即注册</text></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userName:'',
				passWord:'',
			}
		},
		methods: {
			to_register(){
				uni.navigateTo({
					url:'../register/register'
				})
			},
			loginNow(){
				// var _this = this;
				console.log(1)
				if(!this.userName || !this.passWord){
					uni.showToast({
						position:'bottom',
						icon:'none',
					    title: '请输入用户名和密码',
					    duration: 2000
					});
					return;
				}
				
				this.$ajax(this.$urls._url_login+"?username="+this.userName+"&password="+this.passWord,{},"POST",(data)=>{
					
					if(data.errorCode == 0){
						this.$store.dispatch('setUserName',data.data.nickname);
						uni.setStorage({
							key:"userName",
							data:data.data.nickname,
							success() {
								console.log('success');
							}
						})
						
						//通知其余页面已登录
						
						uni.$emit("login")
						
						uni.navigateBack({
						    delta: 2
						});
					}
				},(data)=>{
					console.log(data,'err')
				},(data)=>{
					if(data.data.errorCode == -1){
						
						uni.showToast({
							position:'bottom',
							icon:'none',
							title: data.data.errorMsg,
							duration: 2000
						})
					}
				})
			}
		}
	}
</script>

<style>
	@import url("./login.css");
</style>
