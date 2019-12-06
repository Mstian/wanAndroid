<template>
	<view class="search">
		<view class="nodata" v-if="searchList.length == 0">
			暂无数据
		</view>
		<view v-else class="wrap" v-for="(item,index) in searchList" :key="index" hover-class="hover" @click="toDetail(item.link)">
			<pic v-if="item.chapterId == 294" :dataItem='item'></pic>
			<circle v-else :dataItem='item'></circle>
		</view>
		<uni-load-more v-if='searchList.length > 10' :status="loadingConfig.status" :content-text="loadingConfig.contentText"></uni-load-more>
	</view>
</template>

<script>
	import circle from './item_circle.vue';
	import pic from "./item_pic.vue"
	export default {
		data() {
			return {
				// k:'',
				pageSize:0,
				searchList:[],
				type:'',
				pulldownflag:false,
				loadingConfig:{
					status:'more',
					contentText:{contentdown: "上拉显示更多",contentrefresh: "正在加载...",contentnomore: "没有更多数据了"}
				}
			}
		},
		methods: {
			getSearchList(pageSize){
				this.$ajax(this.$urls._url_collect_list(pageSize),{},"GET",(data)=>{
					if(this.pulldownflag){
						uni.stopPullDownRefresh();
						this.pulldownflag = false;
					}
					if(data.data.curPage == 1){
						this.searchList = data.data.datas;
					}else{
						this.searchList = this.searchList.concat(data.data.datas);
						if(data.data.datas.length == 0){
							this.loadingConfig.status = 'noMore';
						}
					}
				})
			},
			getShareList(pageSize){
				this.$ajax(this.$urls._url_user_share(pageSize),{},"GET",({data})=>{
					// console.log(data);
					if(this.pulldownflag){
						uni.stopPullDownRefresh();
						this.pulldownflag = false;
					}
					if(data.shareArticles.curPage == 1){
						this.searchList = data.shareArticles.datas;
					}else{
						this.searchList = this.searchList.concat(data.shareArticles.datas);
						if(data.shareArticles.datas.length == 0){
							this.loadingConfig.status = 'noMore';
						}
					}
				})
			},
			
			
			
			toDetail(url){
				uni.navigateTo({
					url:"../article_detail/article_detail?url="+url
				})
			}
		},
		onLoad(option) {
			this.type = option.type
			if(option.type == 'coc'){
				this.getSearchList(this.pageSize)	
			}else if(option.type == 'mat'){
				this.getShareList(this.pageSize)
			}
		},
		onReady() {
			
		},
		onPullDownRefresh(){ //下拉刷新
			this.pageSize = 0;
			this.pulldownflag = true;
			if(this.type == 'coc'){
				this.getSearchList(this.pageSize)
			}else if(this.type == "mat"){
				this.getShareList(this.pageSize)
			}
			
		},
		onReachBottom(){ //上拉加载
			this.pageSize++;
			if(this.type == 'coc'){
				this.getSearchList(this.pageSize)
			}else if(this.type == "mat"){
				this.getShareList(this.pageSize)
			}
			this.loadingConfig.status = 'loading'
		},
		components:{
			circle,
			pic
		}
	}
</script>

<style>
.search{
	background: #eee;
	padding-bottom: 5px;
}
.wrap{
	background: #fff;
}
.hover{
	background: #eee;
}
.nodata{
	color: #aaa;
	font-size: 14px;
	text-align: center;
	line-height: 90px;
}
</style>
