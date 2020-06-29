
<template>
  <div class="home-header">
    <v-layout class="home-header-content" row align-center>
      <Logo />

      <v-spacer />

      <v-btn class="mx-2" text dark :to="menu.to" @click="menu.click || (() => {})" v-for="(menu, menuIndex) in menus" :key="menuIndex">
        <span v-text="menu.title" />
      </v-btn>

      <v-btn class="mx-4" icon dark @click="$store.state.ui.drawer = true">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-layout>
  </div>
</template>

<script>
import Logo from '@/components/header/Logo';

export default {
  name: 'HomeHeader',
  props: {
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

.home-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}

.home-header-content {
  max-width: 1000px;
  margin: auto;
  padding: 24px 12px;
}

@media (max-width: 1264px) {
  .page-content {
    max-width: 800px;
  }
}

@media (max-width: 960px) {
  .page-content {
    max-width: 600px;
  }
}

@media (max-width: 600px) {
  .page-content {
    max-width: 500px;
  }
}
</style>
