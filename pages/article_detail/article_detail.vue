<template>
	<view>
		<web-view :webview-styles="webviewStyles" :src="url"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				webviewStyles: {
					progress: {
						color: '#f78515'
					}
				},
				url: '',
			}
		},
		methods: {

		},
		onLoad(params) {
			this.url = params.url;
		}

	}
</script>

<style>

</style>
