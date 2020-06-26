<template>
  <v-app>
    <Header />

    <v-main>
      <v-container class="app-container">
        <router-view/>
      </v-container>
    </v-main>

    <Footer />

    <SnackbarController />
  </v-app>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import SnackbarController from '@/components/SnackbarController';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    SnackbarController
  }
};
</script>

<style lang="scss">
@import '@/styles/variables';
@import '@/styles/app';
</style>
