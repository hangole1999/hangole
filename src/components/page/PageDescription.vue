
<template>
  <div class="page-description" :style="{'color': color}">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'PageDescription',
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
.page-description {
  font-size: 1.2rem;
  line-height: 1.2rem;
  letter-spacing: -0.08rem;
}
</style>
