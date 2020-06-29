
<template>
  <v-app-bar class="header" :class="{'hide': hide}" color="primary" app dark fixed inverted-scroll prominent>
    <v-app-bar-nav-icon @click="$store.state.ui.drawer = true" />

    <v-toolbar-title>
      <Logo />
    </v-toolbar-title>

    <v-spacer />

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-menu bottom left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item :to="menu.to" @click="menu.click || (() => {})" v-for="(menu, menuIndex) in menus" :key="menuIndex">
          <v-list-item-title>{{ menu.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
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
* {
  user-select: none;
  -webkit-transition: all .3s cubic-bezier(0, 0.49, 0.46, 1.01);
  -moz-transition: all .3s cubic-bezier(0, 0.49, 0.46, 1.01);
  -ms-transition: all .3s cubic-bezier(0, 0.49, 0.46, 1.01);
  -o-transition: all .3s cubic-bezier(0, 0.49, 0.46, 1.01);
  transition: all .3s cubic-bezier(0, 0.49, 0.46, 1.01);
}

.header.hide {
  transform: translateY(-100%);
}
</style>
