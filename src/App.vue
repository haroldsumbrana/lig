<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style  lang="scss">
* {
box-sizing: border-box;
}
.clearfix:after {
 content: " ";
 visibility: hidden;
 display: block;
 height: 0;
 clear: both;
}
.clearfix:after {
content: "";
display: table;
clear: both;
}
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
#app {
font-family: $font-one;
}
%transition {
-webkit-transition: all .6s ease;
-moz-transition: all .6s ease;
-o-transition: all .6s ease;
-ms-transition: all .6s ease;
transition: all .6s ease;
}

::selection {  
color: #525252;
background: #d5f2ff;
}
body, html, #app {
width: 100%;
height: 100%;
overflow-x: hidden;
margin: 0;
box-sizing: border-box;
}
*, ::after, ::before {
    box-sizing: border-box;
}
.paragraph {
font-family: $font-one;
font-size: 13px;
color: #000;
letter-spacing: .2px;
line-height: 16.9px;
font-weight: 400;
}
.title  {
font-family: $font-one;
font-size: 18px;
color: #000;
letter-spacing: .5px;
line-height: 24px;
font-weight: 600;
padding-bottom: 7px;
}
.date {
font-family: $font-two;
font-weight: 400;
font-size: 13px;
color: #999999;
padding-bottom: 7px;
}
</style>
