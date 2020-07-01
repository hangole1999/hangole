
<template>
  <v-navigation-drawer class="navigation-drawer" app dark fixed right temporary v-model="$store.getters.ui.drawer">
    <v-list nav dense>
      <v-list-item-group v-model="group" active-class="primary--text text--primary">
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Account</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'NavigationDrawer',
  data () {
    return {
      group: []
    };
  }
}
</script>

<style scoped>
.navigation-drawer {
  z-index: 999;
}
</style>
