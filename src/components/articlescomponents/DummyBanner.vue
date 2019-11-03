<template>
	<div id="dummy-article">
		<div class="clearfix"></div>
		<div class="title"> {{title}}</div>
		<div class="paragraph"> {{paragraph}} </div>
		<p>{{paragraph}}</p>
		<p>{{paragraph}}</p>

	</div>
</template>

<script>
	export default {
		name: 'dummy-banner',
		data () {
			return {
			title: 'Dummy Title',
			paragraph: 'サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト… サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト… サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト… サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト… サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト… サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト…'
			}
		},
		methods: {
		},  
	}
</script>
<style scope  lang="scss">
	#dummy-article {
	position: relative;
	height: 100%;
	max-width: 1080px;
	margin: 0 auto;
	width: 100%;
	display: block;
	overflow: hidden;
	margin-top: 10%;
	}
</style>