<template>
	<view>
		<view class="wrap">
			<view hover-class="media-item-hover" v-for='(item,index) in sysList' @click="toTabList(item)" :key="index" class="contentList" :style="{opacity:opacity}">
				<view class="title">{{item.name}}</view>
				<view class="content">
					<text v-for='(subitem,index) in item.children' :key='index'>
						{{subitem.name}}
					</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text:"hello",
				opacity:1,
				sysList:[],
			}
		},
		onReady() {
			this.loadData();
		},
		methods: {
			toTabList(item){
				var strItem = JSON.stringify(item);
				uni.navigateTo({
					url:'../system_tab/system_tab?item='+encodeURIComponent(strItem),
				});
				
			},
			loadData(){
				this.$ajax(this.$urls._url_system,'','GET',(data)=>{
					// console.log(123,data);
					if(data.data){
						this.sysList = data.data;
						// console.log(data)
					}
				})
			}
		},
		onLoad() {
			
		},
		onUnload(){
			
		}
	}
</script>

<style>
@import url("./system.css");
</style>
