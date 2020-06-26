<template>
  <v-app :dark="$store.getters.theme.dark">
    <Header />

    <v-main>
      <v-container class="app-container">
        <router-view/>
      </v-container>
    </v-main>

    <Footer />

    <NavigationDrawer />

    <SnackbarController />
  </v-app>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import NavigationDrawer from '@/components/NavigationDrawer';

import SnackbarController from '@/components/SnackbarController';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    NavigationDrawer,
    SnackbarController
  }
};
</script>

<style lang="scss">
@import '@/styles/variables';
@import '@/styles/app';
</style>
