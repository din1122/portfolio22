<template>
  <v-app light class="pa-5">
    <div ref="circle" class="circle"></div>
    <div ref="circleFollow" class="circle-follow"></div>

    <Header v-on:open-drawer="drawer = !drawer" />
    <v-layout wrap :class="[currentPage == '/' ? activeClass : '']" >
      <v-flex xl12 md10 sm11 ma-auto  >
        <nuxt />
        <Footer />
      </v-flex>

      <v-navigation-drawer width="208" v-model="drawer" app temporary>
        <v-list dense>
          <v-list-item class="text-center drawer-list" v-for="link in links" :key="link.title">
            <v-list-item-content>
              <nuxt-link :to="link.url">
                <v-list-item-title>{{link.title}}</v-list-item-title>
              </nuxt-link>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-layout>
    <FixedContact />
  </v-app>
</template>

<script>
  import Footer from "~/components/footer.vue";
  import FixedContact from "~/components/fixed-contact.vue";
  import Header from "~/components/header.vue";
  export default {
    data() {
      return {
        links: [{
            url: "/",
            title: "Home"
          },
          {
            url: "/about",
            title: "About"
          },
          {
            url: "/contact",
            title: "Contact"
          }
        ],
        activeClass: "bg-image",
        drawer: false
      };
    },
    computed: {
      currentPage() {
        return this.$route.path;
      }
    },
    pageTransition: "default",
    pageTransition: {
      name: "page",
      mode: "out-in",
      beforeEnter(el) {
        console.log("Before enter...");
      }
    },
//     mounted() {
// //     setTimeout(() => {
// //         const scroll = new LocomotiveScroll({
// //             el: document.querySelector('.smoothscroll'),
// //             smooth: true, // false is ok circle...
// //             // smartphone: {
// //             //     smooth: true
// //             // },
// //             // tablet: {
// //             //     smooth: true
// //             // },
// //             // getSpeed: true,
// //             // getDirection: true,
// //             // useKeyboard: true,
// //             // reloadOnContextChange: true

// //             //lerp: 0.1, // inertia da 0.1 a 1
// //             //reloadOnContextChange: true
// //         });
// //
// //  }, 100);
//     },
//




              //mounted() {
              //  const { circle } = this.$refs;
              //  const { circleFollow } = this.$refs;
              //
              //  function moveCircle(e) {
              //    TweenLite.to(circle, 0.1, { x: e.clientX, y: e.clientY });
              //    TweenLite.to(circleFollow, 0.4, { x: e.clientX, y: e.clientY });
              //  }
              //  function hoverFunc(e) {
              //    TweenLite.to(circle, 0.1, { opacity: 1, scale: 0 });
              //    TweenLite.to(circleFollow, 0.2, { scale: 2 });
              //  }
              //  function unhoverFunc(e) {
              //    TweenLite.to(circle, 0.3, { opacity: 1, scale: 1 });
              //    TweenLite.to(circleFollow, 0.3, { scale: 1 });
              //  }
              //  $("a, .link , .btn").hover(hoverFunc, unhoverFunc);
              //  $(window).on("mousemove", moveCircle);
              //},,
              components: {
                Header,
                FixedContact,
                Footer
              }
          };

</script>
<style lang="scss" scoped>
  .page-enter-active {
    animation: acrossIn 0.2s ease-out both;
  }

  .page-leave-active {
    animation: acrossOut 0.4s ease-in both;
  }

  @keyframes acrossIn {
    0% {
      transform: translate3d(-100%, 0, 0);
    }

    100% {
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes acrossOut {
    0% {
      transform: translate3d(0, 0, 0);
    }

    100% {
      transform: translate3d(100%, 0, 0);
    }
  }

  $transition-duration: 0.35s;
  $overlay-bg: #5e45cf;


</style>
