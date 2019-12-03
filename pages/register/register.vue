<template>
	<view class="register">
		<view class="head">
			<view class="header">
				<view class="imgs"></view>
				<view class="txt">注册</view>
			</view>
		</view>
		<view class="content">
			<view class="main">
				<view class="name">
					<text>用户：</text>
					<input type="text" adjust-position=true v-model="userName" placeholder="请输入用户名">
				</view>
				<view class="password">
					<text>密码：</text>
					<input type="text" password="true" adjust-position=true v-model="passWord" placeholder="请输入密码">
				</view>
				<view class="re_password">
					<text>确认密码：</text>
					<input class="re_password_input" type="text" password="true" v-model="rePassWord" adjust-position=true placeholder="请再次输入密码">
				</view>
			</view>
		</view>
		<view class="register_btn">
			<button @click="registerNow()" type="warn">立即注册</button>
			<view class="to_login">已有账号? <text @click="to_login()">去登录</text></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userName:'',
				passWord:'',
				rePassWord:'',
			}
		},
		methods: {
			to_login(){
				uni.navigateBack({
				    delta: 1
				});
			},
			registerNow(){
				if(!this.userName || !this.passWord){
					uni.showToast({
						position:'bottom',
						icon:'none',
					    title: '用户名或密码不能为空',
					    duration: 2000
					});
					return
				}
				if(this.userName.length<3){
					uni.showToast({
						position:'bottom',
						icon:'none',
					    title: '用户名长度必须大于3',
					    duration: 2000
					});
					return;
				}
				if(this.passWord.length<6){
					uni.showToast({
						position:'bottom',
						icon:'none',
					    title: '密码的长度必须大于6',
					    duration: 2000
					});
					return;
				}
				if(this.passWord != this.rePassWord){
					uni.showToast({
						position:'bottom',
						icon:'none',
					    title: '请保持两次输入的密码一致',
					    duration: 2000
					});
					return;
				}
				var obj = {
					username:this.userName,
					password:this.passWord,
					repassword:this.rePassWord
				}
				this.$ajax(this.$urls._url_register+"?username="+this.userName+"&password="+this.passWord+"&repassword="+this.rePassWord,{},'POST',()=>{},()=>{},(data)=>{
					if(data.data.errorCode == -1){
						uni.showToast({
							title:data.data.errorMsg,
							icon:"none",
							position:"bottom"
						});
					}else if(data.data.errorCode == 0){
						uni.showModal({
						    title: '注册',
						    content: '注册成功，去登录？',
						    success: function (res) {
						        if (res.confirm) {
						            uni.navigateBack({
						                delta: 1
						            });
						        } else if (res.cancel) {
						            console.log('用户点击取消');
						        }
						    }
						});
					}
				})
			}
		}
	}
</script>

<style>
	@import url("./register.css");
</style>
