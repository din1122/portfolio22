<template>
  <v-app-bar dense flat fixed class="app-bar" height="75px">
    <nuxt-link to="/">
      <v-toolbar-title>
        <img class="logo" src="/logo-svg.svg" />
       </v-toolbar-title
    ></nuxt-link>
    <v-spacer></v-spacer>
    <div>
      <Menu v-on:open-drawer="$emit('open-drawer')"/>
    </div>
  </v-app-bar>
</template>

<script>
import Menu from '~/components/menu.vue'
export default {
  components: {
    Menu
  }
}
</script>

<style lang="scss" scoped>
.logo{
    padding:5px 0 0 60px;
    width: 70%;
    height:100%;
}
.v-toolbar__title {
  margin-left: -10%;
}
</style>
