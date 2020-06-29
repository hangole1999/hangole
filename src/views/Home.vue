<template>
  <div class="home">
    <div class="fullpage-container">
      <div class="fullpage-wp" v-fullpage="opts" ref="example">
        <div class="page-1 page">
          <v-row class="ma-0 pa-0 full-height">
            <v-col class="ma-0 pa-0" cols="4">
              <v-card class="full-height" dark tile />
            </v-col>
            <v-col class="ma-0 pa-0" cols="8">
              <video-background
                class="full-height"
                src="/water.mp4"
                overlay="linear-gradient(45deg, #00000099, #ffffff99)"
                :playbackRate="0.8"
                :sources="videoBackgroundSources" />
            </v-col>
          </v-row>
          <div class="page-container">
            <v-layout class="page-content" column>
              <div class="page-title">
                <div class="outline">Welcome to</div>
                <div class="outline">Project</div>
                Hangole
              </div>
              <div class="page-description pa-8">
                Nice to meet you, I am a frontend developer.<br />
                Here, you can explore various projects that I have made.<br />
                Take a look.
              </div>
              <div class="text-center">
                <v-btn dark outlined>Look around</v-btn>
              </div>
              <v-spacer />
              <div class="page-description text-right">
                asdsad
              </div>
            </v-layout>
          </div>
        </div>
        <div class="page-2 page">
          <v-layout justify-center align-center full-height>
            <p class="display-1">2</p>
          </v-layout>
        </div>
        <div class="page-3 page">
          <v-layout justify-center align-center full-height>
            <p class="display-1">3</p>
          </v-layout>
        </div>
      </div>
      <button @click="moveNext">next</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  data: () => ({
    videoBackgroundSources: [
      {src: '/water_laptop.mp4', res: 1200, autoplay: true},
      {src: '/water_tablet.mp4', res: 900, autoplay: true},
      {src: '/water_mobile.mp4', res: 638, autoplay: true}
    ],
    opts: {
      start: 0,
      dir: 'v',
      duration: 500
      // beforeChange: (currentSlideEl, currenIndex, nextIndex) => {
      //   window.console.log(currentSlideEl, currenIndex, nextIndex);
      // },
      // afterChange: (currentSlideEl, currenIndex) => {
      //   window.console.log(currentSlideEl, currenIndex);
      // }
    }
  }),
  methods: {
    moveNext(){
      this.$refs.example.$fullpage.moveNext();
    }
  }
};
</script>

<style scoped>
.fullpage-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.page-container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 100px;
}

.page-content {
  height: 100%;
  max-width: 900px;
  margin: auto;
  padding: 24px 12px;
}

.page-title {
  color: white;
  font-size: 6rem;
  line-height: 4.5rem;
  letter-spacing: -0.7rem;
}

.page-title.outline,
.page-title div.outline,
.page-title span.outline {
  color: transparent;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 2px white;
}

.page-description {
  color: white;
  font-size: 1.2rem;
  line-height: 1.2rem;
  letter-spacing: -0.08rem;
}
</style>
