<template>
  <div
    class="inline-menu"
    @mouseover="Hovermenu"
    @mouseleave="mouseleft"
    @click="overlay = !overlay"
  >
    <span class="menu" :class="{ active: ishover }">Menu</span>
    <svg
      viewBox="0 0 100 80"
      :class="{ active: svghover }"
      fill="black"
      width="40"
      height="80"
    >
      <rect class="rect" :y="firstY" width="100" height="10"></rect>
      <rect class="rect" y="30" width="100" height="10"></rect>
      <rect class="rect" :y="lastY" width="100" height="10"></rect>
    </svg>

    <!-- OVERLAY -->
    <v-overlay opacity="0.54" :value="overlay" z-index="1">
      <v-btn color="primary" @click="overlay = false">
        Hide Overlay
      </v-btn>
    </v-overlay>
  </div>
</template>

<script>
export default {
  data() {
    return {
      overlay: false,
      svghover: false,
      ishover: false,
      firstY: 0,
      lastY: 60,
      fillColor: "black"
    };
  },
  methods: {
    Hovermenu() {
      this.svghover = true;
      this.ishover = true;
      this.firstY = -10;
      this.lastY = 70;
    },
    mouseleft() {
      this.svghover = false;
      this.ishover = false;
      this.firstY = 0;
      this.lastY = 60;
    }
  }
};
</script>

<style lang="scss" scoped>
.svg {
  fill: black;
}
.rect {
  transition: all 0.3s;
}

.menu {
  transition: all 0.1s;
}
.active {
  fill: gray;
  color: gray;
}
.inline-menu {
  display: inline-block;
}
</style>
