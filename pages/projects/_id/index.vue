<template>
  <div>
    <v-flex xl9 md10 sm11 ma-auto>
    <v-container fluid   align-center style="height:100vh; align-content:center;display:flex;">
      <transition>
        <div v-if="show" class="text-container">
          <span>{{ title }} </span>
        </div>
      </transition>
      <v-layout wrap align-center >
        <v-flex xs12>
        <v-row>
            <div style="padding:30px 0 60px 0" >
                    <span class="span-title">CASE STUDY</span>
                    <h3>{{ title }}</h3>
            </div>
        </v-row>
        </v-flex>
        <v-row>
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
                      <span class="link project-details">{{ title }}</span></a
                    >
                </div>
            </div>
          </v-flex>
          <v-flex xs4>
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
           <v-flex x12>
      <v-img  max-height="700" src="/panoptic/0002.jpg" />
    </v-flex>
        <v-flex xl9 md10 sm11 ma-auto>
     <!-- CHALLENGE -->
        <v-row class="row-pad">
            <v-flex xs6 ma-auto>
              <h1 class="pb-5">The Challenge</h1>
              <p class="rich-text">
                  {{ challenge }}
              </p>
            </v-flex>
        </v-row>
        <!-- THE SOULTION -->
        <v-row class="row-pad">
            <v-flex xs6 ma-auto>
              <h1 class="pb-5">The Solution</h1>
             <p class="rich-text">
                  {{ solution }}
              </p>
            </v-flex>
        </v-row>
        </v-flex>



  <Panoptic v-if="panoptic" />

  </div>
</template>

<script>
import Panoptic from "~/components/panoptic.vue";
import letswork from "~/components/letswork.vue";

export default {
  data() {
    return {
      show: true,
      website: false,
      panoptic:false,
    };
  },
  components: {
    letswork,Panoptic
  },
  mounted:
function () {
    this.fadein();
  },
  created() {
    const urlPath =  this.$nuxt.$route.path
      if (urlPath == "/projects/panoptic"){
        this.panoptic = true
      }
  },

  methods: {
    fadein: function () {
      this.show = false;
    },

  },

  asyncData(context) {

    return context.app.$storyapi
      .get("cdn/stories/projects/" + context.params.id, {
        version: "published",
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
        };
        if (website.length < 0) {
          this.website = true;
        }
      });
  },
};
</script>

<style lang="scss" scoped>
.project-details{
  word-break: normal;
}
h3 {
  font-size: 3rem;
}
.text-enter-active,
.text-leave-active {
  transition: opacity 0.5s;
}
.text-enter, .text-leave-to /* .fade-leave-active below version 2.1.8 */ {
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

.rich-text{
 font-size: 1.3rem;
  line-height: 1.7;

}
.row-pad{
  padding:100px 0 100px 0;
}
// p {
//   font-size: 1.3rem;
//   line-height: 2;
//   color: #878a8f;
// }
</style>
