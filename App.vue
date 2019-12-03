<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			const userName = this.$tools.getUserName();
			this.$store.dispatch('setUserName',userName);
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import url("common/iconfont/iconfont.css");
	@import url("common/css/common.css");
	page{
		padding: 0;
		margin: 0;
	}
	view{
		box-sizing: border-box;
	}
</style>
