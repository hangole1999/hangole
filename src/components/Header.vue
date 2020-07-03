
<template>
  <v-app-bar class="header" color="primary" app dark fixed hide-on-scroll :height="(hide &&'0px') || undefined">
    <v-toolbar-title>
      <Logo />
    </v-toolbar-title>

    <v-spacer />

    <v-app-bar-nav-icon @click="$store.state.ui.drawer = true" v-if="!hide" />
  </v-app-bar>
</template>

<script>
import Logo from '@/components/header/Logo';

export default {
  name: 'Header',
  props: {
    hide: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Logo
  },
  data: () => ({
  }),
  computed: {
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
