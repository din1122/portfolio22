<template>
  <nuxt-link :to="'personalprojects/' + id" style="display: contents;">
    <v-flex
      xs12
      md6
      sm6
      class="project-container"
      :class="{ projectcontaineractive: isIntersecting }"
      pa-5
      v-intersect="onIntersect"
    >
      <v-lazy
        :options="{
          threshold: 0.1
        }"
        min-height="100"
        transition="fade-transition"
      >
        <v-card
          @mouseover="mouseenter()"
          @mouseleave="hover = false"
          class="case-card"
          v-bind:style="{ 'background-image': 'url(' + thumbnail + ')' }"
        >
          <div
            class="fill-height backdrop
"
            :class="{ backdropactive: hover }"
          ></div>
          <div class="pa-5 fill-height">
            <v-card height="300px" elevation="0" class="card--transparent flat">
              <v-list-item two-line>
                <v-list-item-content>
                  <span class="span-title">{{ year }}</span>
                  <v-list-item-title class="pb-2">
                    <h3 class="project-title">{{ title }}</h3>
                  </v-list-item-title>
                  <span class="hover-effect" :class="{ active: hover }"
                    >View Project Case
                    <v-icon small class="text--white">mdi-arrow-right</v-icon>
                  </span>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </div>
        </v-card>
      </v-lazy>
    </v-flex>
  </nuxt-link>
</template>

<script>
export default {
  data() {
    return {
      isIntersecting: false,
      hover: false
    };
  },
  methods: {
    onIntersect(entries, observer) {
      this.isIntersecting = entries[0].isIntersecting;
    },
    mouseenter() {
      this.show = false;
      this.hover = true;
      setTimeout(() => (this.show = true), 50);
    }
  },
  props: ["title", "year", "thumbnail", "id"]
};
</script>

<style lang="scss" scoped>
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

.hover-effect {
  opacity: 0;
  transition: all 0.5s ease;
  font-size: 1rem;
  margin-top: 25px;
}
.active {
  transition: all 0.5s ease;
  opacity: 1;
  color: white !important;
  margin-top: 0px;
}
</style>
