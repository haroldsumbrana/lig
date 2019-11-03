<template>
<div id="home">
	<div class="home-container">
		<div class="slider-section">
			<Slider></Slider>	
		</div>
		<div class="article-section">
			<div class="left">
			<Articles></Articles>
			<div class="btn-wrapper">
				<router-link
				to="/some-page">
				<a class="btn-black">More <span class="chev-right">&#10095;</span></a>
				</router-link>
			</div>
			</div>
			<div class="right">
				<router-link
				to="/dummy-banner">
					<div class="dummy-box">
						<div class="dummy-box-inner">
							Dummy banner
						</div>
					</div>
				</router-link>
				<div class="box-recommended">
				Recommend
				<hr>
				<Recommend />
				<Recommend />
				<Recommend />
				</div>
				<router-link
				to="/dummy-banner">
				<div class="dummy-box-inner-list">
					<div class="dummy-banner-gray">
					Dummy banner
					</div>
					<div class="dummy-banner-gray">
					Dummy banner
					</div>
					<div class="dummy-banner-gray">
					Dummy banner
					</div>
				</div>
				</router-link>
			</div>
		</div>
	</div>
</div>
</template>
<script>
import Articles from '../components/Articles.vue'
import Slider from '../components/Slider.vue'
import Recommend from '../components/articlescomponents/Recommend.vue'
	export default {
		name: 'home',
		components: {
			Articles,
			Slider,
			Recommend
		},
		data () {
			return {
			}
		}
	}
</script>

<style scoped  lang="scss">
@font-face {
font-family: yugothib;
src: url(/assets/fonts/yugothib/yugothib.ttf) format(ttf);
}
@font-face {
font-family: yugothil;
src: url(/assets/fonts/yugothil/yugothil.ttf) format(ttf);
}
$font-one: 'yugothib', sans-serif;
$font-two: 'yugothil', sans-serif;

.home-container {
position: relative;
margin: 0 auto;
overflow: hidden;
	.article-section {
	position: relative;
	max-width: 1080px;
	margin: 0 auto;
	overflow: hidden;
	}
	.left {
	position: relative;
	display: inline-block;
	float: left;
	max-width: 720px;
	width: 100%;
	height: auto;
	}
	.right {
	max-width: 340px;
	width: 100%;
	height: auto;
	padding-top: 40px;
	position: relative;
	display: inline-block;
	float: right;
	background: #fff;
		.box-recommended {
		padding: 10px 20px 10px 20px;
		font-size: 24px;
		font-weight: 600;
		letter-spacing: .5px;
		background: #efefef;
			hr {
			height: 4px;
			background: #000;
			margin-top: 4px;
			}
		}
		.dummy-box-inner-list {
			padding: 10px 20px 3px 20px;
			background: #efefef;
			.dummy-banner-gray { 
			margin-bottom: 17px;
			font-size: 16px;
			font-weight: 400;
			font-family: $font-one;
			letter-spacing: .3px;
			min-height: 92px;
			color: #fff;
			display: -webkit-flex;
			display: -moz-flex;
			display: -ms-flex;
			display: -o-flex;
			display: flex;
			justify-content: center;
			align-items: center;
			background: #666666;
				&:hover {
				background: #E8BC34;
				}
			}
		}
	}
	h1 {
	color: #fff;
	}
}
.Slider-section {
position: relative;
width: 100%;
height: 100%;
}
.dummy-box {
height: auto;
width: 100%;
font-size: 16px;
font-weight: 400;
letter-spacing: .3px;
padding: 20px;
color: #000;
text-decoration: none;
position: relative;
background: #EFEFEF;
overflow: hidden;
	&:hover {
	color: #E8BC34;
		&:before {
		position: absolute;
		content: "";
		width: 20px;
		height: 30%;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		background: #E8BC34;
		}
		&:after {
		position: absolute;
		content: "";
		width: 30%;
		height: 20px;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		background: #E8BC34;
		}
	}
	.dummy-box-inner {
	min-height: 336px;
	background: #fff;
	display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flex;
	display: -o-flex;
	display: flex;
	justify-content: center;
	align-items: center;
	}
}
a {
text-decoration: none;
}
.btn-wrapper {
	height: auto;
	padding: 60px 0 90px 0;
	margin: 0 auto;
	display: block;
	text-align: center;
		.btn-black {
		position: relative;
		font-size: 20px;
		font-family: $font-one;
		font-weight: 400;
		color: #fff;
		letter-spacing: .5px;
		width: 404px;
		min-height: 40px;
		line-height: 40px;
		display: inline-block;
		cursor: pointer;
		text-align: center;
		margin: 0 auto;
		background: #333333;
			&:hover {
			background: #E8BC34;
			}
			span {
			float: right;
			font-weight: 400;
			font-size: 20px;
			position: absolute;
			right: 20px;
			top: 0;
			bottom: 0;
			}
		}	
}

</style>
