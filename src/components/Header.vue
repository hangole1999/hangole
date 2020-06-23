
<template>
  <div class="header">
    <div class="header-shadow header-color">
      <v-layout class="header-content" align-end>
        <v-col class="text-left pa-0" cols="4">
        </v-col>
        <v-col class="text-center pa-0 pt-12" cols="4">
          <Logo />
        </v-col>
        <v-col class="text-right pa-0" cols="4">
          <template v-if="$store.getters.user.token">
            <v-btn class="mr-2" dark outlined to="/mypage">
              <span>Mypage</span>
            </v-btn>
            <v-btn dark outlined @click="logout">
              <span>Logout</span>
            </v-btn>
          </template>
          <template v-else>
            <v-btn class="mr-2" dark outlined to="/join">
              <span>Join</span>
            </v-btn>
            <v-btn dark outlined to="/login">
              <span>Login</span>
            </v-btn>
          </template>
        </v-col>
      </v-layout>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/header/Logo';

export default {
  name: 'Header',
  components: {
    Logo
  },
  methods: {
    logout () {
      this.$store.state.user.id = '';
      this.$store.state.user.token = '';
      this.$store.dispatch('storeUser', {});
      window.console.log('You are logged out');
      if (this.$route.path !== '/') {
        this.$router.push('/');
      }
    }
  }
}
</script>

<style scoped>
.header {
}

.header-color {
  background-color: #1976d2;
}
</style>

<style>
.header-shadow {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.header-content {
  width: 100%;
  padding: 12px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 960px) {
  .header-content {
    max-width: 900px;
  }
}

@media (min-width: 1264px) {
  .header-content {
    max-width: 1185px;
  }
}

@media (min-width: 1904px) {
  .header-content {
    max-width: 1785px;
  }
}
</style>
