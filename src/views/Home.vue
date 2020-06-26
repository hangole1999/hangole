<template>
  <div class="home">
    <div class="fullpage-container">
      <div class="fullpage-wp" v-fullpage="opts" ref="example">
        <div class="page-1 page">
          <video-background
            class="full-height"
            src="/water.mp4"
            overlay="linear-gradient(45deg, #90997e4d, #bebb9e33)"
            playbackRate="0.8"
            :sources="[
              {src: '/water_laptop.mp4', res: 1200, autoplay: true},
              {src: '/water_tablet.mp4', res: 900, autoplay: true},
              {src: '/water_mobile.mp4', res: 638, autoplay: true}
            ]"
            :disabled="isVideoShow">
            <v-layout justify-center align-center full-height>
              <p class="display-1" style="color: white;">1</p>
            </v-layout>
          </video-background>
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
    opts: {
      start: 0,
      dir: 'v',
      duration: 500,
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
</style>
