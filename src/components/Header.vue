
<template>
  <v-app-bar class="header" color="primary" app dark fixed hide-on-scroll prominent :height="(hide &&'0px') || undefined">
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
  data () {
    return {
      nonuserMenus: [
        {
          title: 'mypage',
          to: '/mypage'
        },
        {
          title: 'logout',
          click: this.logout
        }
      ],
      userMenus: [
        {
          title: 'join',
          to: '/join'
        },
        {
          title: 'login',
          to: '/login'
        }
      ]
    };
  },
  computed: {
    menus () {
      return this.$store.getters.user.token ? this.userMenus : this.nonuserMenus;
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('resetUser', {then: () => {
        this.$store.dispatch('addSnackbar', {
          color: 'success',
          message: 'Successfully logged out'
        });
      }});
      if (this.$route.path !== '/') {
        this.$router.push('/');
      }
    }
  }
}
</script>

<style scoped>
</style>
