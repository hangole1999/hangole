
<template>
  <div class="page-container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'PageContainer',
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
.page-container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 100px;
}
</style>
