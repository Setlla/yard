<template>
	<div class="projects-content">
		<ul>
			<li v-for="project in projects">
				<router-link to="/projects/2">
					<img src="../img/portfolio/item.jpg" />
					<div class="img-cover common-hp">
						<h2>{{project.title}}</h2>
						<p>{{project.content}}</p>
					</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	module.exports = {
		props: ['projects'],
	}
	
</script>

<style>
</style>