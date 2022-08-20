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
      <ul class="top-menu">
        <nuxt-link to="/">
            <li  class="menu-link">Home</li>
        </nuxt-link>
        <nuxt-link to="/about">
            <li  class="menu-link">About</li>
        </nuxt-link>
        <nuxt-link to="/contact">
            <li  class="menu-link">Contact</li>
        </nuxt-link>
        <a href="/Resume.pdf">
            <li class="menu-link">Resume</li>
        </a>
      </ul>
      <!-- <Menu v-on:open-drawer="$emit('open-drawer')"/> -->
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
.menu-link{
    list-style: none !important;
    padding:0px 10px;
     color:#0f141e;
    transition: .2s ease-in-out;
    font-family:Helvetica-Regular;
    font-size:1.1rem;
}
.menu-link:hover{
  color:rgb(145, 145, 145);
  transition: .2s ease-in-out;
}
.top-menu{
  display: flex;
  flex-direction: row;
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
