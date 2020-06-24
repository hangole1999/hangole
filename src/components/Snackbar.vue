
<template>
  <v-snackbar
    class="snackbar"
    top
    right
    absolute
    :color="color"
    :timeout="-1"
    :value="id !== -1">
    <span v-text="message" />
    <template v-slot:action="{ attrs }">
      <v-btn icon dark v-bind="attrs" @click="close">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: 'Snackbar',
  props: {
    id: {
      type: Number,
      default: -1
    },
    color: {
      type: String,
      default: ''
    },
    mode: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    }
  },
  methods: {
    close () {
      this.$store.dispatch('removeSnackbar', {id: this.id});
    }
  },
  mounted () {
    setTimeout(() => {
      this.$store.dispatch('removeSnackbar', {id: this.id});
    }, 15000);
  }
};
</script>

<style scoped>
.snackbar {
  position: relative !important;
  display: block;
  margin: 12px 24px;
  height: 52px;
  transition: all 0.3s;
}

.snackbar-list-enter, .snackbar-list-leave-to {
  height: 0px !important;
  margin: 0px !important;
  opacity: 0;
  transform: translateX(100px);
}

.snackbar-list-leave-active {
  position: absolute;
}
</style>
