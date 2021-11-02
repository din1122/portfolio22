<template>
  <div>
    <v-container fluid pa-0>
      <v-img v-bind:src="cover" max-width="100%" max-height="400">
        <v-col cols="10" class="pa-0 ma-auto d-flex flex-column justify-center fill-height">
          <div style="padding:70px 0 60px 0;">
            <span class="span-title" style="color:white;">CASE STUDY</span>
            <h3 style="color:white;">{{ title }}</h3>
          </div>
        </v-col>
      </v-img>
    </v-container>
    <v-flex  md10 sm11 xs10 ma-auto class="pt-5">
      <v-container class="case-study-container pa-0" fluid align-center style="">
        <v-layout wrap align-center>
          <v-row class="ma-0">
            <v-flex xs6>
              <div class="p-0 d-flex flex-column">
                <div style="padding:30px 0 30px 0">
                  <span class="span-title">MY ROLE</span><br />
                  <span class="project-details">{{ role }} </span>
                </div>
                <div style="padding:30px 0 30px 0">
                  <span class="span-title">YEAR</span><br />
                  <span class="project-details">{{ year }}</span>
                </div>
                <div style="padding:30px 0 30px 0">
                  <span class="span-title">PROJECT TYPE</span><br />
                  <span class="project-details">{{ projectType }}</span>
                </div>
                <div style="padding:30px 0 30px 0">
                  <span class="span-title">LINK</span><br />
                  <a :href="website">
                    <span class="link project-details">{{ title }}</span></a>
                </div>
              </div>
            </v-flex>
            <v-flex xs12 sm4>
              <div style="padding:30px 0 30px 0">
                <span class="span-title">OVERVIEW</span>
                <div class="project-details">
                  <p>
                    {{ content1 }}
                  </p>
                  <br />
                  <p>
                    {{ content2 }}
                  </p>
                </div>
              </div>

            </v-flex>
          </v-row>

        </v-layout>

      </v-container>
      <!-- end of xl9 -->
    </v-flex>

    <v-flex xl9 md10 sm11 ma-auto>
      <!-- CHALLENGE -->
      <v-row class="row-pad">
        <v-flex xs10 sm6 ma-auto>
          <h1 class="pb-5">The Challenge</h1>
          <p class="rich-text">
            {{ challenge }}
          </p>
        </v-flex>
      </v-row>
      <!-- THE SOULTION -->
      <v-row class="row-pad">
        <v-flex xs10 sm6 ma-auto>
          <h1 class="pb-5">The Solution</h1>
          <p class="rich-text">
            {{ solution }}
          </p>
        </v-flex>
      </v-row>
    </v-flex>

    <Ntms v-if="ntms" />
    <Panoptic v-if="panoptic" />

  </div>
</template>

<script>
  import Panoptic from "~/components/panoptic.vue";
  import letswork from "~/components/letswork.vue";
  import Ntms from "~/components/ntms.vue";

  export default {
    data() {
      return {
        show: true,
        website: false,
        panoptic: false,
        ntms: false,
      };
    },
    components: {
      letswork,
      Panoptic,
      Ntms
    },
    function () {
      this.fadein();
    },
    created() {
      const urlPath = this.$nuxt.$route.path
      if (urlPath == "/projects/panoptic") {
        this.panoptic = true
      }
      if (urlPath == '/projects/ntms') {
        this.ntms = true
      }
      console.log(this.cover);
    },

    methods: {
      fadein: function () {
        this.show = false;
      },

    },

    asyncData(context) {

      return context.app.$storyapi
        .get("cdn/stories/projects/" + context.params.id, {
          version: "draft",
        })
        .then((res) => {
          return {
            images: res.data.story.content.image,
            title: res.data.story.content.title,
            challenge: res.data.story.content.challenge,
            solution: res.data.story.content.solution,
            projectType: res.data.story.content.PROJECT_TYPE,
            role: res.data.story.content.role,
            year: res.data.story.content.year,
            website: res.data.story.content.website.url,
            content1: res.data.story.content.content.content[0].content[0].text,
            content2: res.data.story.content.content.content[1].content[0].text,
            cover: res.data.story.content.cover,
          };
          if (website.length < 0) {
            this.website = true;
          }
        });
    },

  };

</script>

<style lang="scss">
  .project-details {
    word-break: normal;
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

  .rich-text {
    font-size: 1.3rem;
    line-height: 1.7;

  }


  .row-pad {
    padding: 100px 0 100px 0;
  }

  .row-pad-lg {
    padding: 200px 0 200px 0;
  }

  .row-pad-xs {
    padding: 30px 0 30px 0;
  }

  .row-pad-sections {
    padding: 150px 0 150px 0;
  }

  .seperator {
    background: #ECECEC;
  }

  .rich-text,
  ul {
    font-size: 1.3rem;
    line-height: 1.7;
  }


  .tableofc-container {
    height: 500px;
    z-index: 4 !important;
    padding: 0 !important;
  }

  .tableofc {
    position: relative;
    z-index: 5;
    width: 700px;
    margin: auto;
    padding: 0;
  }


  .step-number {
    margin: 0 auto 10px;
    font-size: 1.5rem;
    background: #fff;
    border: 2px solid #d1d9dd;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    line-height: 1;
    border-radius: 50%;
    transition: all .3s;
    position: relative;
    z-index: 1;
    float: none;
    cursor: pointer;
  }

  .step-number-fixed {
    transition: .2s all ease-in-out;
    width: 32px;
    height: 32px;
    font-size: 1rem;
  }

  .step-number:hover {
    background: black;
    color: white;
  }

  .nav-step-container {
    width: 180px;
    padding: 20px 10px;
    position: relative;
  }

  .step-link {
    flex-direction: column;
    display: flex;
    text-align: center;
    align-items: center;
  }

  .nav-step {
    position: relative;
    text-align: center;
    opacity: 1;
    padding: 0;
    background: transparent;
    width: auto;
    margin-bottom: 0;
  }

  .nav-steps-con .nav-step:not(:first-child):before {
    content: "";
    position: absolute;
    top: 44px;
    left: -26%;
    width: 52%;
    height: 2px;
    background-color: #d1d9dd;
    transition: .3s all ease-in-out;
  }

  // panoptic

  .book-text h3 {
    text-decoration: underline;
    transition: .3s all ease
  }

  .h3-link:hover {
    text-decoration: underline;
    color: #d1d9dd !important;
    transition: .3s all ease
  }

  .sticky-footer {
    position: relative;
    overflow: hidden;
    height: 100vh;
  }

  // p {
  //   font-size: 1.3rem;
  //   line-height: 2;
  //   color: #878a8f;
  // }

</style>
