
<template>
  <v-snackbar
    class="snackbar"
    top
    right
    :color="color"
    :multi-line="mode === 'multi-line'"
    :vertical="mode === 'vertical'"
    :timeout="0"
    :value="id !== -1">
    <transition v-if="overlaps.length">
      <v-avatar class="mr-4" size="34" color="#00000033" :key="(overlaps.length % 2)" v-text="cptdOverlap" />
    </transition>
    <span v-text="message" />
    <v-btn icon dark @click="close">
      <v-icon>mdi-close</v-icon>
    </v-btn>
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
    },
    overlaps: {
      type: Array,
      default: () => []
    },
    timeout: {
      type: Number,
      default: 15000
    }
  },
  data: () => ({
    createdAt: 0,
    interval: 0
  }),
  watch: {
    'overlaps.length' () {
      this.createdAt = Date.now();
    }
  },
  computed: {
    cptdOverlap () {
      return (this.overlaps.length > 98 && '99+') || (this.overlaps.length + 1);
    }
  },
  methods: {
    checkClose () {
      if ((this.createdAt + this.timeout) <= Date.now()) {
        this.close();
        try {
          clearInterval(this.interval);
        } catch (error) {
          window.console.error('checkClose', 'clearInterval', error);
        }
      }
    },
    close () {
      this.overlaps.forEach(overlap => this.$store.dispatch('removeSnackbar', {id: overlap}));
      this.$store.dispatch('removeSnackbar', {id: this.id});
    }
  },
  mounted () {
    this.createdAt = Date.now();
    this.interval = setInterval(this.checkClose, 1000);
  },
  beforeDestroy () {
    try {
      clearInterval(this.interval);
    } catch (error) {
      window.console.error('beforeDestroy', 'clearInterval', error);
    }
  }
};
</script>

<style scoped>
.snackbar {
  position: relative !important;
  display: flex;
  justify-content: center;
  margin: 12px 24px;
  height: 52px;
  transition: all 0.2s;
}

.snackbar-list-enter, .snackbar-list-leave-to {
  height: 0px !important;
  margin: 0px !important;
  opacity: 0;
  transform: translateX(100px);
}

.snackbar-list-move {
  opacity: 0.9;
}

.snackbar-list-leave-active {
  position: absolute;
}
</style>
