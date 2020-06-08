<template>
  <div>
    <v-layout container wrap justify-center align-center>
      <v-flex
        class="about-container justify-center align-center d-grid
"
        xs10
        lg7
        style="height:110vh; display:grid;"
      >
        <div>
          <span class="span-title mb-4">A FEW WORD ABOUT ME</span>
          <h3>
            I'm Din Ashkenazi, A cross-disciplinary designer who focuses on
            passing a visual story to my clients, through enjoyable and
            meaningful experiences.
          </h3>
          <p class="pt-4">
            Over the last 6 years, I have been developing my designing skill as
            well as my developer skills for web application and user
            interactive&experience subjects in particular. In my spare time, I
            enjoy playing the piano and guitar, drawing and travel nature and
            look for interesting cultures to explore and get inspired from.
          </p>
        </div>
      </v-flex>
      <v-flex xs12 pt-5>
        <v-img src="https://picsum.photos/1500/" max-height="800"></v-img>
      </v-flex>
      <v-flex lg9 xs11 ma-auto align-center style="height:95vh; display:grid;">
        <v-row class="justify-space-between">
          <v-col lg="4" sm="12">
            <v-card flat>
              <span class="span-title">
                DESIGN SERVICES
              </span>
              <p class="services-text">
                Art Direction / Web & Mobile / Brand identity / UI & UX /
                Iconography / Animation / Graphic design
              </p>
            </v-card>
          </v-col>
          <v-col lg="4" sm="12">
            <v-card flat>
              <span class="span-title">
                TOOLS I USE
              </span>
              <p class="services-text">
                Art Direction / Web & Mobile / Brand identity / UI & UX /
                Iconography / Animation / Graphic design
              </p>
            </v-card>
          </v-col>
        </v-row>
        <v-row justify="space-between">
          <v-col lg="4" sm="12">
            <v-card flat>
              <span class="span-title">
                DEVELOPER SERVICES
              </span>
              <p class="services-text">
                Server Setup / Landing page / Portfolios / Blogs / Web
                Applications / SPA / WordPress
              </p>
            </v-card>
          </v-col>
          <v-col lg="4" sm="12">
            <v-card width="3 0" flat>
              <span class="span-title">
                TOOLS I USE
              </span>
              <p class="services-text">
                CSS / HTML / SCSS / JQuary / JavaScript / Vuejs / Vuex / Nuxtjs
                / GSPA Tweenmax / Nginx / Webpack / Headless CMS
              </p>
            </v-card>
          </v-col>
        </v-row>
      </v-flex>
      <v-flex>
        <v-row align="left" justify="center">
          <v-card class="text-center justify-center mb-5 experience-box" flat>
            <v-card-title class="fill-height">
              <div class="text-left letswork-container">
                <span class="span-title">EXPERIENCE</span>
                <h2>Over 6 years of experience</h2>
                <p>
                  I've been coding and designing from high school and just feel
                  in love with it. I've been lucky to work as a full-stack
                  developer and freelancer designer for the last 5 year and
                  established relationships with amazing clients.
                </p>
              </div>
            </v-card-title>
          </v-card>
        </v-row>
      </v-flex>
      <v-flex xs12>
        <v-divider></v-divider>
        <letswork />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import letswork from "~/components/letswork.vue";

export default {
  components: {
    letswork
  }
};
</script>

<style lang="scss" scoped>
h3 {
  margin-top: 27px;
  line-height: 1.6;
}

p {
  font-family: Helvetica-Bold;
  color: #4b4d53;
  word-break: break-word;
  font-size: 1.2rem;
}
.services-text {
  font-size: 1.4rem;
  color: black;
}
h2 {
  font-size: 3.6rem;
  word-break: break-word;
}
</style>
