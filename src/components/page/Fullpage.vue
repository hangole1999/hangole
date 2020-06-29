
<template>
  <div class="fullpage page">
    <div class="full-height">
      <slot name="background" />
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Fullpage',
  props: {
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
</style>
