<template>
  <nuxt-link :to="'/projects/' + id" style="display: contents;">
    <v-flex xs12 md6 sm6 class="project-container projectcontaineractive pa-0 pb-5 pb-md-0 pa-lg-5" >
      <v-card
        @mouseenter.native="mouseenter()"
        @mouseleave.native="mouseout()"
        class="case-card"
        v-bind:style="{ 'background-image': 'url(' + thumbnail + ')' }"
      >
        <div
          class="fill-height backdrop

"
          :class="{ backdropactive: hover }"
        ></div>
        <div class="pa-5 fill-height">
          <v-card height="300px" elevation="0" class=" card--transparent flat">
            <v-list-item two-line>
              <v-list-item-content @mouseover="show = true">
                <transition name="fade" mode="in-out">
                  <span class="span-title" v-if="show">{{ year }}</span>
                </transition>
                <v-list-item-title class="pb-2">
                  <transition name="fade" mode="in-out">
                    <h3 class="project-title" v-if="show">{{ title }}</h3>
                  </transition>
                </v-list-item-title>
                <transition name="fade">
                  <span style="color:white;" v-if="hover"
                    >View Project Case
                    <v-icon small class="text--white">mdi-arrow-right</v-icon>
                  </span>
                </transition>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </div>
      </v-card>
      <!--
      </v-lazy>
      -->
    </v-flex>
  </nuxt-link>
</template>

<script>
export default {
  data() {
    return {
      isIntersecting: false,
      hover: false,
      show: true
    };
  },
  methods: {
    //onIntersect(entries, observer) {
    //  this.isIntersecting = entries[0].isIntersecting;
    //},
    mouseenter() {
      this.hover = true;
      this.show = false;
      setTimeout(() => (this.show = true), 5);
    },
    mouseout() {
      this.hover = false;
    }
  },
  props: ["title", "year", "thumbnail", "id"]
};
</script>

<style lang="scss" scoped>
.fade-enter-to {
  transition: all 0.21s ease-in-out;
  transition-delay: 0.15s;
  transform: translate(0px, 0px);
  opacity: 1;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  // transition: all 0.2s;
}
.fade-enter  /* .fade-leave-active below version 2.1.8 */ {
  transform: translate(0px, 15px);
  transition-duration: 200ms;
  opacity: 0;
}
.fade-leave-to {
  // transition: all 0.2s;
  // opacity: 1;
}

.backdrop {
  top: 0;
  left: 0;
  width: 100%;
  position: absolute;
  transition: all 0.5s ease;
  height: 100%;
}
.backdropactive {
  opacity: 0.6;
  background: rgb(27, 27, 27);
  transition: all 0.5s ease;
}
</style>
