<template>
	<view>
		<view class="toTop" @click="toTop">
			<image src="../../static/toTop.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			toTop(){
				uni.$emit('backtop')
			}
		}
	}
</script>

<style>
.toTop{
	position: fixed;
	width: 60px; 
	height: 60px;
	background: #DD524D;
	z-index: 55; 
	bottom: 40px; 
	right: 15px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	opacity: .7;
}
.toTop image{
	width: 60%;
	height: 60%;
}
</style>
