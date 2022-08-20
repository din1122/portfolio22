<template>
  <div class="container">
    <v-flex xl8 md10 sm11 ma-auto>
      <v-container fluid fill-height>
        <transition>
          <div v-if="show" class="text-container">
            <span>{{ title }} </span>
          </div>
        </transition>

        <v-layout wrap row align-center fill-height>
          <v-flex xl12 xs10 sm12 ma-auto>
            <v-layout wrap class="porject-layout">
              <v-flex xl6 align-self-center>
                <v-layout column>
                  <v-flex>
                    <v-card class="card--transparent" width="300px" height="200px" flat>
                      <span class="span-title">CASE STUDY</span>
                      <h3>{{ title }}</h3>
                    </v-card>
                  </v-flex>

                  <v-flex>
                    <v-card class="card--transparent" width="300px" height="100px" flat>
                      <span class="span-title">YEAR</span><br />
                      <span>{{ year }}</span>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex xl7 md7 align-self-center>
                <v-card class="card--transparent" flat width="80%">
                  <p>
                    {{ content }}
                  </p>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>

          <v-flex xl12 mx-auto pa-3 v-for="image in images" :key="image.name">
            <v-lazy :options="{
              threshold: 0.1,
            }" min-height="100" transition="fade-transition">
              <v-img :src="image.filename"></v-img>
            </v-lazy>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: true,
      };
    },
    mounted: function () {
      this.fadein();
    },
    methods: {
      fadein: function () {
        this.show = false;
      },
      CheckifEmpty(client) {
        return Object.keys(this.client).length;
      },
    },

    asyncData(context) {
      return context.app.$storyapi
        .get("cdn/stories/personalprojects/" + context.params.id, {
          version: "published",
        })
        .then((res) => {
          return {
            images: res.data.story.content.image,
            title: res.data.story.content.title,
            client: res.data.story.content.client,
            role: res.data.story.content.role,
            year: res.data.story.content.year,
            content: res.data.story.content.content.content[0].content[0].text,
          };
        });
    },
    mounted() {
      let current = 0;
      let target = 0
      let ease = 0.1

      let windowWidth, containerHeight
      let container = document.querySelector('.container')
      console.log(container + " bla");


      function lerp(start, end, t) {
        return start * (1 - t) + end * t
      }

      function setTransform(el, transform) {
        el.style.transform = transform
      }

      function setupAnimation() {
        windowWidth = window.innerWidth
        containerHeight = container.getBoundingClientRect().height
        document.body.style.height = `${containerHeight}px`
        smoothScroll()

      }

      function smoothScroll() {
        current = lerp(current, target, ease)
        current = parseFloat(current.toFixed(2))
        target = window.scrollY

        setTransform(container, `translateY(${-current}px)`)
        requestAnimationFrame(smoothScroll)
      }

      setupAnimation()
    }
  };

</script>

<style lang="scss" scoped>
  h3 {
    font-size: 3rem;
  }

  .text-enter-active,
  .text-leave-active {
    transition: opacity 0.5s;
  }

  .text-enter,
  .text-leave-to

  /* .fade-leave-active below version 2.1.8 */
    {
    opacity: 0;
    transition: opacity 5s;
  }

  .text-container {
    z-index: 5;
    font-size: 3rem;
    color: rgb(255, 255, 255);
    right: 36px;
    margin-top: 33vh;
    position: absolute;
  }

  $t-duration: 800ms;
  $t-delay: 300ms;

  p {
    font-size: 1.3rem;
    line-height: 2;
    color: #878a8f;
  }

</style>
