<template>
  <v-app-bar dense flat fixed class="app-bar" height="75">
    <nuxt-link to="/">
      <v-toolbar-title class="d-flex">
            <!-- <img height="45px" class="ma-auto" src="/logo-svg.svg" /> -->
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
.app-bar{
  background:rgb(248, 248, 248) !important
}
.logo{
    width:75%;
    margin: auto;
    height:100%;
}
@media only screen and (max-device-width: 660px) {
    .logo {
          margin:0;
    }
}
// .v-toolbar__title {
//   margin-left: -10%;
// }
</style>
