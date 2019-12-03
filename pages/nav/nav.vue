<template>
	<view class="nav">
		<view class="left">
			<scroll-view class="scrollleft" scroll-y="true" scroll-with-animation="true" :scroll-into-view ="scrollInto" @scroll="scrollleft" >
				<view v-for="(item,index) in tabList" :key="index" :class="[activeIndex == index ? 'active' : '','tabs']" :id='"tab"+index' @click="tapTab(index)" >
					{{item.name}}
				</view>
			</scroll-view>
		</view>
		<view class="right">
			<scroll-view scroll-y="true" scroll-with-animation="true" :scroll-into-view ="scrollInto">
				<view class="contents" v-for="(item,index) in tabList" :key="index" :id='"tab"+index'>
					 <view class="content_title">
						 {{item.name}}
					 </view>
					 <view class="content_main">
						 <view hover-class="hover_class" v-for="(tabItem,tabIndex) in item.articles" :key="tabIndex" @click="toDetail(tabItem.link)" >
							 {{tabItem.title}}
						 </view>						 
					 </view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				scrollInto:'tab0',
				tabList:[],
				activeIndex:0
			}
		},
		methods:{
			tapTab(i){
				this.activeIndex = i;
				this.scrollInto = 'tab'+i;
			},
			scrollleft(e){
				// console.log(e.detail)
			},
			getnavData(){ //获取数据
				this.$ajax(this.$urls._url_nav,'','GET',({data})=>{
					this.tabList = data;
				})
			},
			toDetail(url){
				uni.navigateTo({
					url:'../article_detail/article_detail?url='+url,
				})
			}
		},
		mounted() {
			this.getnavData();
		}
	}
</script>

<style>
	@import url("./nav.css");
</style>
