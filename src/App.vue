<template>
  <v-app>
    <Header />

    <v-content>
      <v-container class="app-container">
        <router-view/>
      </v-container>
    </v-content>

    <Footer />
  </v-app>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data: () => ({
  })
};
</script>

<style>
/* all */
* {
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
  padding: 100px 12px;
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

.transition-all {
  -webkit-transition: all .3s cubic-bezier(0, 0.49, 0.46, 1.01);
  -moz-transition: all .3s cubic-bezier(0, 0.49, 0.46, 1.01);
  -ms-transition: all .3s cubic-bezier(0, 0.49, 0.46, 1.01);
  -o-transition: all .3s cubic-bezier(0, 0.49, 0.46, 1.01);
  transition: all .3s cubic-bezier(0, 0.49, 0.46, 1.01);
}
</style>
