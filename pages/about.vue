<template>
  <div>
    <v-flex xl9 md10 sm11 ma-auto>
      <v-layout container wrap justify-center align-center>
        <v-flex
          class="about-container justify-center align-center d-grid"
          xs10
          lg7
          style="height: 100vh; display: grid; align-content: space-evenly"
        >
          <div>
            <span class="span-title mb-4">A FEW WORD ABOUT ME</span>
            <h3>
              I'm Din Ashkenazi, A cross-disciplinary designer who focuses on
              passing a visual story to my clients, through enjoyable and
              meaningful experiences.
            </h3>
            <p class="pt-4">
              Over the last 6 years, I have been developing my skill as a
              product designer through books, courses, clients and users of
              course. I've been exploring businesses positions, learning the
              fundamentals of various roles. My focus is to create user
              experiences that will produce value. in my spare time, I enjoy
              creating 3D art, drawing and travel.
            </p>
            <a style="" class="resume" href="/Resume.pdf">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-4 -2 24 24"
                  width="24"
                  fill="currentColor"
                >
                  <path
                    d="M3 0h10a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm0 2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3zm2 1h6a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2zm0 12h2a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2zm0-4h6a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2zm0-4h6a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2z"
                  ></path>
                </svg>
              </div>
              <span> Resume </span>
            </a>
          </div>
          <v-row>
            <div class="ma-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-5 -8 24 24"
                width="32"
                fill="currentColor"
              >
                <path
                  d="M7.071 5.314l4.95-4.95a1 1 0 1 1 1.414 1.414L7.778 7.435a1 1 0 0 1-1.414 0L.707 1.778A1 1 0 1 1 2.121.364l4.95 4.95z"
                ></path>
              </svg>
            </div>
          </v-row>
        </v-flex>

        <v-flex xs12 pt-5>
          <v-img src="/3d.png"></v-img>
        </v-flex>
        <v-flex
          lg7
          xs12
          ma-auto
          align-center
          style="height: 95vh; display: grid"
        >
          <v-row
            class="justify-space-between flex-wrap d-flex flex-column flex-md-row"
          >
            <v-col lg="4" sm="12" col="12">
              <v-card flat>
                <span class="span-title"> DESIGN SERVICES </span>
                <p class="services-text">
                  UI Design / UX Research / Art Direction / Brand identity /
                  Iconography / Animation / Graphic design / 3D modeling
                </p>
              </v-card>
            </v-col>
            <v-col lg="4" sm="12" col="12">
              <v-card flat>
                <span class="span-title"> TOOLS I USE </span>
                <p class="services-text">
                  Figma / Miro / Blender / Illustrator / InDesign / After Effect
                  / Photoshop
                </p>
              </v-card>
            </v-col>
          </v-row>
          <v-row justify="space-between" class="flex-column flex-md-row">
            <v-col lg="4" sm="12">
              <v-card flat>
                <span class="span-title"> DEVELOPER SERVICES </span>
                <p class="services-text">
                  Server Setup / Landing page / Portfolios / Blogs / Web
                  Applications / SPA
                </p>
              </v-card>
            </v-col>
            <v-col lg="4" sm="12">
              <v-card width="3 0" flat>
                <span class="span-title"> TOOLS I USE </span>
                <p class="services-text">
                  CSS / HTML / SCSS / JQuery / JavaScript / Vuejs / Vuex /
                  Nuxtjs / GSAP Tweenmax / Nginx / Webpack / Headless CMS /
                  WebFlow / Wordpress
                </p>
              </v-card>
            </v-col>
          </v-row>
        </v-flex>
        <v-flex>
          <v-row align="left" justify="center" class="row-pad">
            <v-card class="text-center justify-center mb-5 experience-box" flat>
              <v-card-title class="fill-height">
                <div class="text-left letswork-container">
                  <span class="span-title">EXPERIENCE</span>
                  <h2>Over 6 years of experience</h2>
                  <p>
                    I've been coding and designing since high school and just
                    fell in love with it. I've been lucky to work as a
                    full-stack developer and freelancer designer for the last 5
                    year and established relationships with amazing clients.
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
    </v-flex>
  </div>
</template>

<script>
import letswork from "~/components/letswork.vue";

export default {
  components: {
    letswork,
  },
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
.row-pad {
  padding: 150px 0 150px 0;
}
.resume {
  display: flex;
  flex-direction: row;
  color: #0f141e;
  transition: 0.2s ease-in-out;
}
.resume > div {
  padding-right: 4px;
}
.resume:hover > span {
  color: #919191;
  transition: 0.2s ease-in-out;
}
.resume:hover > div > svg {
  fill: #919191;
  transition: 0.2s ease-in-out;
}
</style>
