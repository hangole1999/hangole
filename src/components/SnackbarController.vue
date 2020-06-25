
<template>
  <div class="snackbar-controller" v-show="$store.getters.ui.snackbar.show">
    <transition-group class="snackbar-wrapper" name="snackbar-list" tag="div">
      <Snackbar
        :id="snackbar.id"
        :color="snackbar.color"
        :vertical="snackbar.vertical"
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

      for (let snackbarIndex = 0; snackbarIndex < this.$store.getters.ui.snackbar.list.length; snackbarIndex++) {
        let snackbar = this.$store.getters.ui.snackbar.list[snackbarIndex];

        let overlapSnackbar = result.find((resultSnackbar) => {
          if(resultSnackbar.message === snackbar.message) {
            return true;
          } else if (typeof resultSnackbar.message === typeof snackbar.message
            && typeof snackbar.message === 'object'
            && resultSnackbar.message.length === snackbar.message.length) {
            for (let messageIndex = 0; messageIndex < snackbar.message.length; messageIndex++) {
              if (resultSnackbar.message[messageIndex] !== snackbar.message[messageIndex]) {
                return false;
              }
            }
            return true;
          } else {
            return false;
          }
        });

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
