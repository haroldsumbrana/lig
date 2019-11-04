<template>
	<div id="footer-wrapper">
	<div class="footer-container">
		<div class="footer-text"> 
			<router-link
			to="/some-page">
			<a class="a-name">{{ text }} </a>
			</router-link>
			<router-link
			to="/some-page">
			 <a class="b-name"> {{ text2 }} </a>
			</router-link>
		</div>
		<div class="footer-credits">
			<router-link
			to="/some-page">
			<a>{{ credits }} </a>
			</router-link>
		</div>
	</div>
	</div>
</template>
<script>
	export default {
		data () {
			return {
			text: '運営会社',
			text2: '個人情報保護について',
			credits: '©2016 Sample'
			}
		},
		methods: {
		}
	}
</script>

<style scope lang="scss">
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

#footer-wrapper {
position: relative;
width: 100%;
height: auto;
margin: 0 auto;
overflow: hidden;
display: flex;
justify-content: center;
background: #000;
	.footer-text {
		a {
			&.a-name {
			padding-right: 20px;
			}
		}
	}
	.footer-credits  {
	text-align: right;
	}
}
.footer-container {
max-width: 1080px;
position: relative;
max-width: 0 auto;
display: block;
width: 100%;
min-height:  45px;
line-height: 45px;
z-index: 5;
background: #000;
overflow: hidden;
	a {
	text-decoration: none;
	font-size: 13px;
	font-weight: 400;
	font-family: $font-one;
	letter-spacing: .3px;
	color: #fff;
	text-align: left;
		&:hover {
		color: #E8BC34;
		}
	}
	.footer-credits {
	font-size: 14px;
	max-width: 50%;
	width: 100%;
	max-width: 0 auto;

	}
}
.footer-text, .footer-credits {
color: #fff;
max-width: 50%;
width: 100%;
position: relative;
float: left;

}
</style>
