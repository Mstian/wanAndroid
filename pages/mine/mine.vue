<template>
	<view>
		<view class="topbar">
			<view @click="toLogin" class="user_avatar bgimg" :style='{backgroundImage:"url(" + userAvatar + ")"}'></view>
			<view class="user_name">{{userName}}</view>
			<view @click="toLogin" v-if="userName.length<=0" class="loginbtn">
				登录
			</view>
			<view @click="$tools.closeWin()" class="close_btn iconfont icon-close">
			</view>
		</view>
		<view class="mine_list_menu">
			<uni-list>
				<uni-list-item @click="baidu" title="百度一下" :show-extra-icon="false" thumb="https://ftp.bmp.ovh/imgs/2019/12/ab336722163b29d9.png" :show-arrow="false"></uni-list-item>
			    <uni-list-item @click="toCollect('coc')" title="我的收藏" :show-extra-icon="false" thumb="https://ae01.alicdn.com/kf/H7f039ae57da348b7a4aaa6bcc285e36fz.png" :show-arrow="false"></uni-list-item>
				<uni-list-item @click="toCollect('mat')" title="我的文章" :show-extra-icon="false" thumb="https://ftp.bmp.ovh/imgs/2019/12/7704c05ffef0cef3.png" :show-arrow="false"></uni-list-item>
				<uni-list-item @click="toShare()" title="分享文章" :show-extra-icon="false" thumb="https://ae01.alicdn.com/kf/Hd2c4dda67b56434393429debc266b30ff.png" :show-arrow="false"></uni-list-item>
				<uni-list-item @click="toWebsite()" title="常用网站" :show-extra-icon="false" thumb="https://ae01.alicdn.com/kf/H19bc955dce284e12823e2f6c42d674a1w.png" :show-arrow="false"></uni-list-item>
				<uni-list-item @click="openPopup" title="主题" thumb="https://ae01.alicdn.com/kf/H907aac1ea9d4481d964fe5a50b163d3b0.png" :show-extra-icon="false" :show-arrow="false"></uni-list-item>
				<uni-list-item @click="toAbout()" title="关于作者" :show-extra-icon="false" thumb="https://ae01.alicdn.com/kf/H4364d3b89d9c436bbae3cf60dbdbdef4D.png" :show-arrow="false"></uni-list-item>
				<uni-list-item @click="toInfo()" title="本机信息" :show-extra-icon="false" thumb="https://ftp.bmp.ovh/imgs/2019/12/a5752feb1975f1c1.png" :show-arrow="false"></uni-list-item>
				<uni-list-item v-if="userName.length>0" @click="logout()" title="退出登录" :show-extra-icon="false" thumb="https://ae01.alicdn.com/kf/H0913a9cb156546b18e8013de06aca5efU.png" :show-arrow="false"></uni-list-item>
			</uni-list>
		</view>
		<uni-popup :show="popShow" type="center" @change = "changePopStatus()" >
		    <view class="themeList">
				<view class="red" @click="changeTheme('#FF0000')">#FF0000</view>
				<view class="blue">#00FFFF</view>
				<view class="purple">#800080</view>
				<view class="green">#008000</view>
				<view class="maroon">#800000</view>
				<view>...................</view>
				<view class="red">#FF0000</view>
				<view class="blue">#00FFFF</view>
				<view class="purple">#800080</view>
				<view class="green">#008000</view>
				<view class="maroon">#800000</view>
				<view>......................</view>
				<view class="red">#FF0000</view>
				<view class="blue">#00FFFF</view>
				<view class="purple">#800080</view>
				<view class="green">#008000</view>
				<view class="maroon">#800000</view>
				<view>..................</view>
				<view class="red">#FF0000</view>
				<view class="blue">#00FFFF</view>
				<view class="purple">#800080</view>
				<view class="green">#008000</view>
				<view class="maroon">#800000</view>
			</view> 
		</uni-popup>
	</view>
</template>

<script>
	import uniList from '@/components/uni-list/uni-list.vue';
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue';
	import uniPopup from "@/components/uni-popup/uni-popup.vue";
	import { mapState } from 'vuex'
	export default {
		data() {
			return {
				userAvatar:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3209370120,2008812818&fm=26&gp=0.jpg',
				user:'tian leilei',
				popShow:false,
			}
		},
		methods: {
			baidu(){
				uni.navigateTo({
					url:"../article_detail/article_detail?url="+"https://www.baidu.com"
				})
			},
			openPopup(){
				uni.showToast({
				    title: '该功能暂未开发',
				    duration: 2000
				});
				// this.popShow = true; //待开发
			},
			
			changePopStatus(e){
				this.popShow = e.show;
			},
			changeTheme(color){
				// console.log(color)
				uni.$emit('theme',{color:color})
			},
			toCollect(type){
				if (this.$store.state.userName.length > 0) { //已登录
					uni.navigateTo({
						url:"../collectList/collectList?type="+type
					})
				} else {                                    // 未登录
					uni.showModal({
						title: "提示",
						content: "您还未登录，去登录查看更多功能",
						success: function(res) {
							if (res.confirm) {
								uni.navigateTo({
									url:"../login/login"
								})
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					})
				}
			},
			toShare(){
				if (this.$store.state.userName.length > 0) { //已登录
					uni.navigateTo({
						url:"../share_article/share_article"
					})
				} else {                                    // 未登录
					uni.showModal({
						title: "提示",
						content: "您还未登录，去登录查看更多功能",
						success: function(res) {
							if (res.confirm) {
								uni.navigateTo({
									url:"../login/login"
								})
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					})
				}
			},
			toLogin(){
				uni.navigateTo({
					url:'../login/login'
				})
			},
			toInfo(){
				uni.navigateTo({
					url:'../info/info',
					animationType: 'slide-in-bottom'
				})
			},
			logout(){//退出
				var _this = this;
				uni.showModal({
					title: '退出',
					    content: '确定要退出登录吗？',
					    success: function (res) {
					        if (res.confirm) {
								//清除vuex
								//清除本地userName
					            _this.$ajax(_this.$urls._url_logout,{},"GET",(data)=>{
					            	// console.log(data);
									if(data.errorCode == 0){
										_this.$store.dispatch("setUserName",'');
										uni.clearStorage();
										uni.navigateBack({
										    delta: 1
										});
										//通知其他页面登出
										uni.$emit("logout")
										
									}
					            })
					        } else if (res.cancel) {
					            console.log('用户点击取消');
					        }
					    }
				})
			},
			toWebsite(){
				uni.navigateTo({
					url:"../website/website",
					animationType: 'slide-in-bottom'
				})
			},
			toAbout(){
				uni.navigateTo({
					url:"../aboutA/aboutA",
					animationType: 'slide-in-bottom'
				})
			}
		},
		computed:mapState(['userName']),
		components:{
			uniList,
			uniListItem,
			uniPopup
		}
	}
</script>

<style>
	@import url(./mine.css);
</style>
