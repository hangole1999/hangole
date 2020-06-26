
<template>
  <div class="full-page">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'FullPage',
  props: {
    id: {
      type: Number,
      default: -1
    }
  },
  data: () => ({
  }),
  watch: {
  },
  computed: {
  },
  methods: {
  },
  mounted () {
  },
  beforeDestroy () {
  }
};
</script>

<style scoped>
.full-page {
  height: 100vh;
}
</style>
