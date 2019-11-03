<template>
	<div class="first-article">
	<router-link
	to="/some-page">
		<div id="mouse" v-on:mouseover="mouseover" 
		v-on:mouseleave="mouseleave">
			<div class="image-container-outer">
				<div class="image-container-inner">
				<img v-bind:src="image" width="100%"/> 
				</div>
			</div>
			<div class="content">
				<div class="date">{{date}}</div>
				<div class="title">{{title}}</div>
				<div class="paragraph">{{paragraph}}</div>
			</div>
		</div>
	</router-link>
	</div>
</template>

<script>
	export default {
		data () {
			return {
			date: '2016.01.01',
			title: 'サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト',
			paragraph: 'サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト…',
			image: 'src/assets/img/ph_article.jpg'
			}
		},
		methods: {
		mouseover: function(){
		this.image = 'src/assets/img/ph_article2.jpg';
		},  

		mouseleave: function(){
		this.image = 'src/assets/img/ph_article.jpg';
		}
		}
	}
</script>
<style scope  lang="scss">
	%transition {
	-webkit-transition: all .6s ease;
	-moz-transition: all .6s ease;
	-o-transition: all .6s ease;
	-ms-transition: all .6s ease;
	transition: all .6s ease;
	}

	.first-article {
	background: #fff;
	position: relative;
	max-width: 1080px;
	height: 100%;
	width: 100%;
	padding-top: 43px;
	overflow: hidden;
		.content, .image-container-outer {
		float: left;
		display: inline-block;
		}
		.image-container-outer {
		max-width: 206px;
		max-height: 116px;
		height: 100%;
		width: 100%;
			img {
			height: 100%;
			width: 100%
			}
		}
		.content {
		max-width: 514px;
		width: 100%;
		text-align: left;
		padding-left: 14px;
		padding-right: 10px;
			.title {
				&:hover {
				color: #e7ba2f;
				}
				&:before {
				position: absolute;
				content: "";
				width: 100%;
				height: 100%;
				top: 0;
				right: 0;
				bottom: 0;
				left: 0;
				}
			}
		}
		#mouse  {
		position: relative;
		display: block;
		text-align: center;
		text-decoration: none;
		cursor: pointer;
		overflow: hidden;
		}
		a {
		text-decoration: none;
		}
	}
</style>
