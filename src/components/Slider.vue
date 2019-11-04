<template>
  <div class="slider-container">
  	<div class="slider">
    <!-- <transition-group name="fade" tag=""> -->
      <div  v-for="i in [currentIndex]" :key="i">
        <img class="full-image" :src="currentImg" />
       <div class="caption">
	   	<p  class="title">{{ currentTitle }}</p>
       	<p class="text">{{ currentText }}</p>
   		<p class="text">{{ currentText2 }}</p>
       </div>
      </div>

    <!-- </transition-group> -->
    <div class="stage-width">
		<a class="prev" @click="prev(); incrementSlide(-1);" href="#">&#10094;</a>
		<a class="next" @click="next(); incrementSlide(1)" href="#">&#10095;</a>
    </div>
    <div class="indicator-container">
<ul
class="progress-indicator"
:data-slides-count="'0' + slides.length"
v-if="loaded"
>
<li
v-for="(slide,index) of slides"
:class="index === currentActiveSlide ? 'progress-indicator__bar  progress-indicator__bar--active' : 'progress-indicator__bar'"
:key="index"
></li>
</ul>
</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Slider",
  data() {
    return {
      images: [
        "src/assets/img/slider6.jpg",
        "src/assets/img/slider2.jpg",
        "src/assets/img/slider3.jpg"
      ],
      title: [
       "キャッチコピーが入ります。",
       "キャッチコピーが入ります。",
       "キャッチコピーが入ります。"
      ],
       text: [
       "サンプルテキストサンプルテキストサンプルテキストサンプルテキスト",
        "サンプルテキストサンプルテキストサンプルテキストサンプルテキスト",
         "サンプルテキストサンプルテキストサンプルテキストサンプルテキスト"
      ],
       text2: [
       "サンプルテキストサンプルテキストサンプルテキストサンプルテキスト",
       "サンプルテキストサンプルテキストサンプルテキストサンプルテキスト",
       "サンプルテキストサンプルテキストサンプルテキストサンプルテキスト"
      ],
      timer: null,
      currentIndex: 0,
      loaded: false,
      currentActiveSlide: 0,
      slides: [
       "",
       "",
       ""
      ],
    };
  },

   mounted() {
    setTimeout(() => {
      this.loaded = true;
    }, 1000);
  },

  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 400);
    },

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }, 
    incrementSlide(val) {
      if (val > 0 && this.currentActiveSlide + val < this.slides.length) {
        this.currentActiveSlide += val;
      } else if (val > 0) {
        this.currentActiveSlide = 0;
      } else if (val < 0 && this.currentActiveSlide + val < 0) {
        this.currentActiveSlide = this.slides.length - 1;
      } else {
        this.currentActiveSlide += val;
      }
    }
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    },
    currentText: function() {
      return this.text[Math.abs(this.currentIndex) % this.text.length];
    },
    currentTitle: function() {
      return this.title[Math.abs(this.currentIndex) % this.title.length];
    },
    currentText2: function() {
      return this.text2[Math.abs(this.currentIndex) % this.text2.length];
    }
  }
};
</script>
<style scope  lang="scss">
.stage-width {
width: 1080px;
height: 100%;
left: 0;
right: 0;
top:  15%;
display: -webkit-flex;
display: -moz-flex;
display: -ms-flex;
display: -o-flex;
display: flex;  
flex-direction: row;
align-items:  center;
justify-content:  center;
align-self: center;
align-content: center;
margin: 0 auto;
z-index: 5;
position: absolute;
}
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 34%;
  padding: 0 16px;
  width: auto;
  color: white;
  font-weight: bold;
  font-size: 50px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}
.next {
  right: -2.5%;
}
.prev {
  left: -2.5%;
}
.prev:hover, .next:hover {
color: #E8BC34;
}
.slider-container {
position: relative;
max-width: 100%;
height: 100vh;
width: 100%;
max-width: 100%;
margin: 0 auto;
overflow: hidden;
	img {
	position: absolute;
	top: 0;
	width: 100%;
	height: 100%;
	}
}
.full-image {
width: 100%;
height: 100%;
}
.caption {
position: absolute;
color: #fff;
top: 0;
right: 0;
bottom: 0;
left: 0;
height: 100%;
width: 100%;
display: -webkit-flex;
display: -moz-flex;
display: -ms-flex;
display: -o-flex;
display: flex;
flex-direction: column;
align-content: center;
justify-content: center;
margin: 0 auto;
text-align: center;
background: rgba(0, 0, 0, 0.30);
}
.slider {
	.text, .title {
	margin: 0;
	color: #fff;
	font-size: 16px;
	font-weight: 600;
	letter-spacing: .3px;
	}	
	.title {
	font-size: 60px;
	font-weight: 900;
	line-height: 80px;
	letter-spacing: 1px;
	}
}
.progress-indicator {
  position: absolute;
  font-size: 24px;
  font-weight: 900;
  margin: 0 auto;
  padding: 0;
  color: #fff;
  right: 0;
  left: 0;
  bottom: 5%;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1rem;
  justify-content: center;
  text-align: center;
}
li.progress-indicator__bar.progress-indicator__bar--active {
color: #E8BC34;
}
.indicator-container{
}

</style> -->