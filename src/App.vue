<template>
  <v-app :dark="$store.getters.theme.dark">
    <Header :hide="$route.meta.hideHeader" />

    <v-main>
      <v-container class="app-container">
        <router-view/>
      </v-container>
    </v-main>

    <Footer :hide="$route.meta.hideFooter" />

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

<style>
/* <style lang="scss">
@import '@/styles/variables';
@import '@/styles/app'; */

/* all */
* {
  font-family: 'Roboto Slab', serif;
  outline: none;
  vertical-align: middle;
  list-style: none;
  text-decoration: none;
  scroll-behavior: smooth;
  word-wrap: break-word;
  word-break: break-word;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* user selection */
::-moz-selection {
  color: white !important;
  background: black !important;
}
::selection {
  color: white !important;
  background: black !important;
}

/* all scopes */
html,
body {
  margin: 0px;
  padding: 0;
  background-color: #fff;
  overflow-x: hidden;
}

#app {
}

.app-container {
  padding-top: 0px;
  padding-bottom: 0px;
}

a {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}

img,
a,
.no-user-select {
  user-select: none;
}

.full-height {
  height: 100%;
}

.transition-all {
  -webkit-transition: all .3s cubic-bezier(0, 0.49, 0.46, 1.01);
  -moz-transition: all .3s cubic-bezier(0, 0.49, 0.46, 1.01);
  -ms-transition: all .3s cubic-bezier(0, 0.49, 0.46, 1.01);
  -o-transition: all .3s cubic-bezier(0, 0.49, 0.46, 1.01);
  transition: all .3s cubic-bezier(0, 0.49, 0.46, 1.01);
}

</style>
