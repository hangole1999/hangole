
<template>
  <div class="snackbar-controller" v-show="$store.getters.ui.snackbar.show">
    <transition-group class="snackbar-wrapper" name="snackbar-list" tag="div">
      <Snackbar
        :id="snackbar.id"
        :color="snackbar.color"
        :mode="snackbar.mode"
        :message="snackbar.message"
        v-for="snackbar in $store.getters.ui.snackbar.list"
        :key="snackbar.id" />
    </transition-group>
  </div>
</template>

<script>
import Snackbar from '@/components/Snackbar';

export default {
  name: 'SnackbarController',
  components: {
    Snackbar
  }
};
</script>

<style scoped>
.snackbar-controller {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999;
}

.snackbar-wrapper {
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: flex-end;
}
</style>
