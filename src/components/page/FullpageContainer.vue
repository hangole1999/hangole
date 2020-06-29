
<template>
  <div class="fullpage-container">
    <div class="fullpage-wp" v-fullpage="options" ref="fullpage">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FullpageContainer',
  props: {
    start: {
      type: Number,
      default: 0
    },
    duration: {
      type: Number,
      default: 500
    },
    loop: {
      type: Boolean,
      default: false
    },
    dir: {
      type: String,
      default: 'v'
    },
    der: {
      type: Number,
      default: 0.1
    },
    movingFlag: {
      type: Boolean,
      default: false
    },
    beforeChange: {
      type: Function,
      default: () => {}
    },
    afterChange: {
      type: Function,
      default: () => {}
    },
    overflow: {
      type: String,
      default: 'hidden'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    options () {
      return {
        start: this.start,
        duration: this.duration,
        loop: this.loop,
        dir: this.dir,
        der: this.der,
        movingFlag: this.movingFlag,
        beforeChange: this.beforeChange,
        afterChange: this.afterChange,
        overflow: this.overflow,
        disabled: this.disabled
      };
    }
  },
  watch: {
  },
  data: () => ({
  }),
  methods: {
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
