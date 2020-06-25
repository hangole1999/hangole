
<template>
  <div class="snackbar-controller" v-show="$store.getters.ui.snackbar.show">
    <transition-group class="snackbar-wrapper" name="snackbar-list" tag="div">
      <Snackbar
        :id="snackbar.id"
        :color="snackbar.color"
        :mode="snackbar.mode"
        :message="snackbar.message"
        :overlaps="snackbar.overlaps"
        v-for="snackbar in snackbars"
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
  },
  computed: {
    snackbars () {
      let result = [];

      for (let i = 0; i < this.$store.getters.ui.snackbar.list.length; i++) {
        let snackbar = this.$store.getters.ui.snackbar.list[i];

        let overlapSnackbar = result.find((resultSnackbar) => resultSnackbar.message === snackbar.message);
        if (overlapSnackbar) {
          overlapSnackbar.overlaps.push(snackbar.id);
        } else {
          result.push(Object.assign({}, snackbar, {overlaps: []}));
        }
      }

      return result;
    }
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
