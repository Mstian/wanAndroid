<template>
	<view>
		<view>
			<view>我的位置</view>
			<!-- App 端使用地图组件需要向高德或百度等三方服务商申请SDK资质，获取AppKey，打包时需要在manifest文件中勾选相应模块，在SDK配置中填写Appkey。注意申请包名和打包时的包名需匹配一致，证书信息匹配。在manifest可视化界面有详细申请指南。 -->
			<map style="width: 100%; height: 300px;" :latitude="latitude" :longitude="longitude" :markers="covers"></map>
			<view>
				<button @click="toMap()" type="primary">在应用中打开</button>
			</view>
		</view>
		<view class="line"></view>
		<view>手机信息</view>
		<view>
			<text>手机品牌：</text>
			<text>{{info.brand}}</text>
		</view>
		<view>
			<text>手机型号：</text>
			<text>{{info.model}}</text>
		</view>
		<view>
			<text>设备像素比：</text>
			<text>{{info.pixelRatio}}</text>
		</view>
		<view>
			<text>屏幕宽度：</text>
			<text>{{info.screenWidth}}</text>
		</view>
		<view>
			<text>屏幕高度：</text>
			<text>{{info.screenHeight}}</text>
		</view>
		<view>
			<text>可使用窗口宽度：</text>
			<text>{{info.windowWidth}}</text>
		</view>

		<view>
			<text>可使用窗口高度：</text>
			<text>{{info.windowHeight}}</text>
		</view>

		<view>
			<text>语言：</text>
			<text>{{info.language}}</text>
		</view>
		<view>
			<text>操作系统版本：</text>
			<text>{{info.system}}</text>
		</view>
		<view>
			<text>客户端平台：</text>
			<text>{{info.platform}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				info: '',
				latitude: 39.909,
				longitude: 116.39742,
				covers: []
			}
		},
		methods: {
			getPhoneInfo(){
				var _this = this;
				uni.getSystemInfo({
					success(res) {
						_this.info = res;
						// console.log(res);
					},
					fail() {
				
					},
					complete() {
				
					}
				})
			},
			getLocation() {
				var _this = this;
				uni.getLocation({
					type: 'gcj02',
					success(res) {
						// console.log(res);
						_this.latitude = res.latitude;
						_this.longitude = res.longitude;
						_this.covers.push({
							latitude: res.latitude,
							longitude: res.longitude,
							iconPath: '../../static/location.png',
							title: '我的位置'
						})
					}
				})
			},
			toMap() {
				var _this = this;
				uni.openLocation({
					latitude: _this.latitude,
					longitude: _this.longitude,
					success: function() {
						// console.log('success');
					}
				});
			}
		},
		onReady() {
			this.getPhoneInfo();
			this.getLocation();
		},
		onLoad() {
			
		}
	}
</script>

<style>
	view {
		text-align: center;
		line-height: 35px;
		color: #333;
	}

	.line {
		width: 100%;
		height: 2px;
		background: #EEEEEE;
		margin: 20px 0;
	}
</style>
