<template>
  <v-app light class="pa-5 smoothscroll" >
    <!-- <div ref="circle" class="circle"></div>
    <div ref="circleFollow" class="circle-follow"></div> -->

    <Header v-on:open-drawer="drawer = !drawer" />
    <v-layout wrap :class="[currentPage == '/' ? activeClass : '']" >
      <v-flex xl12 md12 sm11 ma-auto  >
        <nuxt />
        <Footer />
      </v-flex>
      <v-navigation-drawer width="208" v-model="drawer" app temporary>
        <div class="nav-scroll" style="position:relative">
        <v-list dense>
          <v-list-item class="text-center drawer-list" v-for="link in links" :key="link.title">
            <v-list-item-content>
              <nuxt-link :to="link.url">
                <v-list-item-title>{{link.title}}</v-list-item-title>
              </nuxt-link>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>
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
     scrollToTop: false,

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
        drawer: false,
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
  //   methods:{
  //     handleScroll () {
  //     this.scroller.update();
  //   }
  //   },
  //   beforeMount () {
  //   window.addEventListener('scroll', this.handleScroll);
  // },
  // beforeDestroy() {
  //   window.removeEventListener('scroll', this.handleScroll);
  // },
//

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

.smoothscroll {
  right:0%;
  left:0;
  // position: fixed !important;
  // position: fixed !important;
}

</style>
