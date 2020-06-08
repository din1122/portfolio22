<template>
  <v-app-bar flat fixed class="app-bar">
    <nuxt-link to="/">
      <v-toolbar-title ma-3>
        <img height="75px" src="/logo.png" /> </v-toolbar-title
    ></nuxt-link>
    <v-spacer></v-spacer>
    <div>
      <Menu />
    </div>
  </v-app-bar>
</template>

<script>
import Menu from "~/components/menu.vue";
export default {
  components: {
    Menu
  }
};
</script>

<style lang="scss" scoped>
.app-bar {
  margin: 13px !important;
  background: transparent !important;
}
.v-toolbar__title {
  margin-left: -10%;
}
</style>
