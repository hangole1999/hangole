
<template>
  <div class="page-title" :style="{'color': color, '-webkit-text-stroke-color': color}">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'PageTitle',
  props: {
    color: {
      type: String,
      default: '#fff'
    }
  },
  computed: {
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
.page-title {
  font-size: 6rem;
  line-height: 4.5rem;
  letter-spacing: -0.7rem;
}

.page-title.outline,
.page-title .outline {
  color: transparent;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
}
</style>
