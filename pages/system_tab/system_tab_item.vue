<template>
	<view>
		<view class="main">
			<view hover-class="media-item-hover" class="main_list" @click="jump(dataItem.link)">
				<view class="main_left">
					<text class="text">{{dataItem.title}}</text>
					<div class="line">
						<text class="times">{{dataItem.niceDate ? dataItem.niceDate : ''}}</text>
						<text class="author">{{dataItem.author ? dataItem.author : '未知'}}</text>
					</div>
				</view>
				<text class="main_right">{{dataItem.superChapterName ? dataItem.superChapterName : '暂未分类'}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			dataItem: {
				type: Object,
				default: function(e) {
					return {}
				}
			}
		},
		data() {
			return {}
		},
		methods: {
			jump(url) {
				uni.navigateTo({
					url: "../article_detail/article_detail?url=" + url,
					animationType: 'slide-in-bottom',
				})
			}
		}
	}
</script>

<style>
	@import url("./system_tab_item.css");
</style>
