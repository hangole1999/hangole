
<template>
  <div class="mypage">
    <div class="headline text-center">Mypage</div>
    <v-layout class="my-12">
      <v-spacer />
      <v-btn class="mr-2" outlined to="/mypage/some">
        <span>Some</span>
      </v-btn>
      <v-btn outlined to="/mypage/menu">
        <span>Menu</span>
      </v-btn>
    </v-layout>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Mypage'
}
</script>

<style scoped>
.mypage {
}
</style>
