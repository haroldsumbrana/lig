<template>
	<div class="recommend">
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
			</div>
		</div>
	</router-link>
	</div>
</template>

<script>
	export default {
		name: 'recommend',
		data () {
			return {
			title: 'サンプルテキストサンプルテキストサンプルテキストサンプルテキスト',
			date: '2016.03.26',
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

	.recommend {
	position: relative;
	height: 100%;
	width: 100%;
	padding: 8px 0;
	overflow: hidden;
		.content, .image-container-outer {
		float: left;
		display: inline-block;
		}
		.image-container-outer {
		max-width: 110px;
		height: 100%;
		width: 100%;
		background: #efefef;
			img {
			height: 100%;
			width: 100%;
			}
		}
		.content {
		max-width: 180px;
		width: 100%;
		text-align: left;
		padding-left: 8px;
		background: #efefef;
			.title {
			font-size: 13px;
			line-height: 140%;
			letter-spacing: .3px;
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
