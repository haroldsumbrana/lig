<template>
<div id="some-page">
<div class="clearfix"></div>
	<div class="title" v-for="(name) in title">
	  {{ name }}
	</div> 
	<div v-for="(name) in paragraph">
	  {{ name }}
	</div> 
	<div class="img-container">
	<img v-bind:src="img.imgUrl" /> 
	</div>
</div>
</template>
<script>
	export default {
		name: 'some-page',
		data () {
			return {
				title: {
				content: 'Lorem ipsum Title'
				},
				paragraph: {
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh nisl condimentum id venenatis a. Ultrices sagittis orci a scelerisque purus semper. Aliquam sem fringilla ut morbi tincidunt augue interdum velit. Eget egestas purus viverra accumsan in nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus proin nibh nisl condimentum id venenatis a. Ultrices sagittis orci a scelerisque purus semper. Aliquam sem fringilla ut morbi tincidunt augue interdum velit. Eget egestas purus viverra accumsan in nisl. Egestas pretium aenean pharetra magna ac. Justo laoreet sit amet cursus sit amet dictum sit. Felis donec et odio pellentesque diam. Fringilla ut morbi tincidunt augue interdum velit euismod. Mi ipsum faucibus vitae aliquet nec. Eget felis eget nunc lobortis mattis aliquam faucibus. Nibh sit amet commodo nulla facilisi nullam vehicula. Volutpat commodo sed egestas egestas. Enim ut sem viverra aliquet eget sit amet tellus. Suscipit Egestas pretium aenean pharetra magna ac. Justo laoreet sit amet cursus sit amet dictum sit. Felis donec et odio pellentesque diam. Fringilla ut morbi tincidunt augue interdum velit euismod. Mi ipsum faucibus vitae aliquet nec. Eget felis eget nunc lobortis mattis aliquam faucibus. Nibh sit amet commodo nulla facilisi nullam vehicula. Volutpat commodo sed egestas egestas. Enim ut sem viverra aliquet eget sit amet tellus. Suscipit.'
				},
				img: {
					imgUrl: 'src/assets/img/slider2.jpg'
				}
			}
		},
		methods: {
		}
	}
</script>
<style scope  lang="scss">
	#some-page {
	position: relative;
	text-align: center;
	max-width: 680px;
	margin:  0 auto;
	margin-top: 10%;
	min-height: 100%;
	display: block;
	box-sizing: border-box;
		.title {
		font-weight: 900;
		}
		.img-container {
		margin: 0 auto;
		padding-top: 15px;
		max-width: 680px;

			img {
			width: 100%;
			}
		}
	}
</style>
