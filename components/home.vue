<template>
	<div>
<!-- main slide start -->
	<div class="slide">
		<div class="slide-content">
			<h2 class="slide-title">优铺 IN 长沙</h2>
			<span class="slide-info">我在长沙就等你来</span>
			<router-link class="joinus" to="/shoptails/2">JOIN US</router-link>
		</div>
	</div>
<!-- main slide end -->


<!-- projects start -->
	<div class="projects padding">
		<div class="common-title projects-title">
			<h2>近期 活动</h2>
			<p>我们不肯探索自己本身的价值，我们过分看重他人在自己生命里的参与。于是，孤独不再美好，失去了他人，我们惶惑不安。</p>
		</div>
		<projectlist :projects='projects'></projectlist>
	</div>
<!-- projects end -->

<!-- purpose start -->
	<div class="purpose padding" id="about">
		<div class="common-title">
			<h2>我们的目标</h2>
			<p>我们不肯探索自己本身的价值，我们过分看重他人在自己生命里的参与。于是，孤独不再美好，失去了他人，我们惶惑不安。</p>
		</div>
		<div class="purpose-content common-hp">
			<ul>
				<li>
					<span>
						<i class="fa fa-home"></i>
					</span>
					<h2>像家一样</h2>
					<p>所有的成员，客人都可以像家人一样彼此信任。</p>
				</li>
				<li>
					<span>
						<i class="fa fa-heart"></i>
					</span>
					<h2>从心出发</h2>
					<p>从心出发，路过家一般的地方，回到家。</p>
				</li>
				<li>
					<span>
						<i class="fa fa-eye"></i>
					</span>
					<h2>善于发现生活中的美好</h2>
					<p>乐于和身边的人分享生活中的美好。</p>
				</li>
				<li>
					<span>
						<i class="fa fa-globe"></i>
					</span>
					<h2>世界各地都是家</h2>
					<p>在不同的地方都有七小院，都是大家的家。</p>
				</li>
			</ul>
		</div>
	</div>
<!-- purpose end -->

<!-- our shopkeeper start -->
	<div class="shopkeeper">
		<div class="cover padding">
			<div class="common-title shopkeeper-title">
				<h2>各分舵 舵主</h2>
			</div>
			<div class="shopkeeper-content">
				<img src="../img/author.jpg" />
				<div>
					<h3 class="name">大长沙舵主</h3>
					<p class="introduce">于是，我似乎看到多年以后，你站在一扇蓝色的大门前，下午三点的阳光，你脸上仍有几颗青春痘，你笑着，我跑向你，问你好不好，你点点头。三年，五年以后，甚至更久更久以后，我们会变成什么样的大人呢？是体育老师，还是我妈，虽然我闭上眼睛，也看不见自己，但是我却可以看见你。</p>
				</div>
			</div>
		</div>
	</div>
<!-- our shopkeeper end -->

<!-- contact start -->
	<div class="contact padding" id="wait">
		<div class="common-title">
			<h2>等你来撩</h2>
			<p>
				大家伙可以加入我们的微信群，关注我们的公众号。<br />
				在这里你也可以找到各分舵主的联系方式，就等你来撩
			</p>
			<div class="code">
				<span>
					<img  src="../img/gong.png"/><br />
					公众号
				</span>
				<span class="code">
					<img src="../img/wei.png" /><br />
					微信群
				</span>
			</div>
		</div>
		<div class="contact-details">
			<h3>长沙分舵舵主</h3>
			<p>
				<i class="fa fa-phone"></i>
				<span>电话号码：1314227****</span>
			</p>
			<p>
				<i class="fa fa-wechat "></i>
				<span>微信：1314227****</span>
			</p>
			<p>
				<i class="fa fa-qq "></i>
				<span>QQ：3950****</span>
			</p>
			<p>
				<i class="fa fa-weibo"></i>
				<span>微博：3950**@qq.com</span>
			</p>
		</div>
	</div>
<!-- contact end -->
	</div>
</template>

<script>
	import projectlist from './projectlist.vue'
	
	export default {
		components: {
			projectlist,
		},
		data: function() {
			return {
				projects: [
      		{
      			img: './img/item.jpg',
      			title: '湘江沿岸骑行',
      			content: '岁月极美，在于它必然的流逝。春花、秋月、夏日、冬雪。'
      		},
      		{
      			img: './views/img/portfolio/item2.jpg',
      			title: '岳麓山看日落',
      			content: '我用什么才能留住你？我给你贫穷的街道、绝望的日落、破败郊区的月亮。我给你一个久久地望着孤月的人的悲哀。'
      		},
      		{
      			img: './views/img/portfolio/item3.jpg',
      			title: '黑麋峰看萤火虫',
      			content: '随着时光流逝，我慢慢地明白了，只有存在的东西才会消失，不管是城市，爱情，还是父母。'
      		},
      		{
      			img: './views/img/portfolio/item4.jpg',
      			title: '靖港古镇吃鱼仔',
      			content: '童年的一天一天，温暖而迟缓，正像老棉鞋里面，粉红绒里子上晒着的阳光。'
      		}
      	] 
			}
		}
	}
	
</script>

<style>
</style>