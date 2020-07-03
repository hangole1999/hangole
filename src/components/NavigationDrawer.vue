
<template>
  <v-navigation-drawer class="navigation-drawer" app dark fixed right temporary v-model="$store.getters.ui.drawer">
    <v-list nav dense>
      <v-list-item :to="menu.to" @click="typeof menu.click === 'function' && menu.click()" v-for="(menu, menuIndex) in menus" :key="menuIndex">
        <v-list-item-icon>
          <v-icon v-text="menu.icon" />
        </v-list-item-icon>
        <v-list-item-title v-text="menu.title" />
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'NavigationDrawer',
  data () {
    return {
      group: [],
      menu: {
        default: [
          {
            icon: 'mdi-home',
            title: 'Home',
            to: '/'
          }
        ],
        unauth: [
          {
            icon: 'mdi-account-plus',
            title: 'Join',
            to: '/join'
          },
          {
            icon: 'mdi-account-key',
            title: 'Login',
            to: '/login'
          }
        ],
        auth: [
          {
            icon: 'mdi-account',
            title: 'My Page',
            to: '/mypage'
          },
          {
            icon: 'mdi-account-off',
            title: 'Logout',
            click: this.logout
          }
        ]
      }
    };
  },
  computed: {
    menus () {
      return this.menu.default.concat(this.$store.getters.user.data ? this.menu.auth : this.menu.unauth);
    }
  },
  methods: {
    logout () {
      console.log('logout');
      this.$firebase.auth().signOut().then(() => {
        this.$store.dispatch('resetUser', {then: () => {
          this.$store.dispatch('addSnackbar', {
            color: 'success',
            message: 'Successfully logged out'
          });
          if (this.$route.path !== '/') {
            this.$router.push('/');
          }
        }});
      }).catch((error) => {
        this.$store.dispatch('addSnackbar', {
          color: 'error',
          message: 'Failed logout'
        });
        console.error(error);
      });
    }
  }
}
</script>

<style scoped>
.navigation-drawer {
  z-index: 999;
}
</style>
