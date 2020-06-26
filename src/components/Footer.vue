
<template>
  <v-footer class="footer" :class="{'hide': hide}" dark padless>
    <v-row class="footer-content" justify="center" no-gutters>
      <v-col class="lighten-2 py-2 text-center white--text" cols="12">
        <v-btn class="ma-2" dark text rounded :href="familySite.href" :to="familySite.to" v-text="familySite.title" v-for="(familySite, familySiteIndex) in familySites" :key="familySiteIndex" />
      </v-col>

      <v-col cols="12">
        <v-divider />
      </v-col>

      <v-col class="lighten-2 py-4 text-right white--text" cols="12">
        <span v-text="`${new Date().getFullYear()} - `" />
        <strong>Hangole</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    hide: {
      type: Boolean,
      default: false
    }
  },
  computed: {
  },
  watch: {
  },
  data () {
    return {
      familySites: [
        {
          title: 'GitHub',
          href: this.$config.host.github
        }
      ]
    }
  },
  methods: {
  }
};
</script>

<style scoped>
* {
  user-select: none;
  -webkit-transition: all .3s cubic-bezier(0, 0.49, 0.46, 1.01);
  -moz-transition: all .3s cubic-bezier(0, 0.49, 0.46, 1.01);
  -ms-transition: all .3s cubic-bezier(0, 0.49, 0.46, 1.01);
  -o-transition: all .3s cubic-bezier(0, 0.49, 0.46, 1.01);
  transition: all .3s cubic-bezier(0, 0.49, 0.46, 1.01);
}

.footer.hide {
  display: none;
  transform: translateY(100%);
}

.footer-content {
  max-width: 1100px;
  margin: auto;
  padding: 0px 12px;
}
</style>
