<template>
	<header class="header-container">
		<nav class="navbar">
			<a v-bind:href="url" class="logo">
				<img :src="logo" alt="">
			</a>
		</nav>
	</header>
</template>
<script>
	export default {
		data () {
			return {
				logo: 'src/assets/img/logo.png',
				url: '/'
			}
		},
		methods: {
		}
	}
</script>

<style scoped  lang="scss">
@import url('https://fonts.googleapis.com/css?family=Calligraffitti&display=swap');
.header-container {
position: relative;
width: 100%;
	.navbar {
	position: absolute;
	width: 100%;
	margin: 0 auto;
	text-align: center;
	z-index: 5;
	background: #fff;
		.logo {
			img {
			padding: 25px 0 20px 0;
			}
		}
	}
}
</style>
