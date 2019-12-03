<template>
	<view>
		<view>
			<view class="hot">
				<view class="title">
					热门搜索
				</view>
				<view class="wrap">
					<text class="item" v-for="(item,index) in hotKeyList" :key="index" @click="toSearchList(item.name)">{{item.name}}</text>
				</view>
				<view class="title">
					历史搜索
				</view>
				<view class="wrap">
					<text class="item his" @click="toSearchList(item)" v-for="(item,index) in historyList" :key = 'index'>{{item}}</text>
					<text class="item" v-if='historyList.length > 0' @click="clearHis()">清除历史</text>
				</view>
			</view>
		</view>
		<view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				hotKeyList: [],
				historyList:[]
			}
		},
		methods: {
			toSearchList(k){
				uni.navigateTo({
					url:"../searchList/searchList?k="+k
				})
			},
			clearHis(){
				uni.clearStorage();
				this.historyList = [];
			}
		},
		onReady() {
			var _this = this;
			this.$ajax(this.$urls._url_hotkey, {}, "GET", ({
				data
			}) => {
				this.hotKeyList = data;
			});
			
			// uni.setStorage({
			// 	key:'history',
			// 	data:'hello'
			// })
			// uni.clearStorage()	
			uni.getStorage({
				key:'history',
				complete:function(res){
					console.log(res);
					if(res.data){
						_this.historyList = JSON.parse(res.data)
					}
				}
			})
	
		},
		onNavigationBarSearchInputConfirmed(e) { //原生导航栏软键盘搜索
			// console.log(e)
			// e.text
			//本地化搜索历史
			var _this = this;
			uni.getStorage({
				key:'history',
				complete:function(res){
					// console.log(res,'oo');
					if(res.data){
						var arr = JSON.parse(res.data);
						arr.push(e.text);
						_this.historyList = arr;
						uni.setStorage({
							key:'history',
							data:JSON.stringify(arr)
						})
					}else{
						var arr = []
						arr.push(e.text);
						_this.historyList = arr;
						uni.setStorage({
							key:'history',
							data:JSON.stringify(arr)
						})
					}
				}
			});
	
			uni.navigateTo({
				url:"../searchList/searchList?k="+e.text
			})
		}
	}
</script>

<style>
	.hot {
		padding: 20px;
	}

	.title {
		font-size: 14px;
		color: #333;
	}

	.item {
		padding: 2px 8px;
		background: #F24544;
		border-radius: 4px;
		font-size: 14px;
		display: inline-block;
		color: #fff;
		margin: 5px 5px;
	}
	.his{
		background: #C0C0C0;
	}
</style>
