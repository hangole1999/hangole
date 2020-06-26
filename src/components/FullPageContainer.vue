
<template>
  <div class="full-page-container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'FullPageContainer',
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
.full-page-container {
}
</style>
