<template>
	<div>
		shopDetails
		0 共用导航栏
		1 首屏为视频页面
		2 二屏为该店铺活动（活动可跳转到活动详情页）
		3 三屏为店铺老板（成员）介绍及联系方式
		
		<video id="background_video" controls="controls">
			<source src="../FLY.mp4" type="video/mp4">
		</video>
		
	</div>
</template>

<script>	
//	new Vue({
//		el:"#background_video",
//		methods:{
//			isMobile:function(){
//				window.matchMedia('(max-width: 768px)').matches
//			} ,
//			 src: [ 
//			        { 
//			            src: '../FLY.mp4', 
//			            type: 'video/mp4' 
//			        }
//				 ]	
//			}
//	})
	
</script>

<style>
	#background_video {
	    position: absolute;
	    top: 50%;
	    left: 50%;
	    transform: translate(-50%, -50%);
	    object-fit: cover;
	    height: 100%;
	    width: 100%;
	}
</style>