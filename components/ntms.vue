<template>
  <div>
    <div class="ntms">
      <v-col cols="12" class="align-center row-pad-sections seperator" id="define">
        <h1 class="text-center">Define</h1>
      </v-col>
      <v-col cols="11" class="ma-auto">
        <v-row class="row-pad-lg">
          <v-flex xs4 class="pe-5">
            <h2>Sitemap</h2>
            <p class="rich-text">
              In this stage I decided to make a sitemap so I could understand better the user paths and the platform's
              structure.<br>
              thereby, I found out some of the unnecessary pages and popups the client has defined as needed for the
              platform.
            </p>
            <br><br>
          </v-flex>
          <v-flex xs7 offset-xs1 d-flex justify-center>
            <v-img src="/ntms/sitemap.jpg" max-width="100%" alt="" />
          </v-flex>
        </v-row>
      </v-col>
      <v-flex xl9 md10 sm11 ma-auto>
        <v-row class="row-pad">
          <v-flex xs6 ma-auto>
            <h2 class="pb-5">Userflow</h2>
            <p class="rich-text">
              I started out by mapping out the users' steps to see how I cloud simplify their journey on the platform.
              <br><br>
              The most important and probbably most used flow for the manager will be editing an exisitng question in a
              group of questions.
              <br>
            </p>
            <br><br>
          </v-flex>
        </v-row>
      </v-flex>
      <v-col col="12" class="seperator row-pad">
        <v-flex class="ma-auto" xs9 d-flex justify-center>
          <v-img src="/ntms/userflow.jpg" alt="" class="rounded elevation-3" max-width="100%" />
        </v-flex>
      </v-col>

      <v-col cols="11" class="ma-auto">
        <v-row class="row-pad-lg">
          <v-flex xs4 class="pe-5">
            <h2>Personas</h2><br>
            <p class="rich-text">
              Based on the audiance research <i>I set up two personas.</i>
             I wanted to understand the user needs, goals and main uses on the app. <br><br>
              I knew one persona will user the desktop webapp and one will use the mobile application.
              <br> <br>
              <ul>
                <li>Cleaning/Any workforce manager</li>
                <li>Worker</li>
              </ul>
            </p>
          </v-flex>
          <v-flex xs7 offset-xs1 d-flex justify-center>
            <img style="width:100%;" src="/ntms/Persona.jpg" class="elevation-1">
          </v-flex>
          <!-- <v-flex d-flex justify-center class="row-pad">
          <img style="width:80%;" src="/panoptic/persona2.png">
        </v-flex> -->
        </v-row>
      </v-col>
        <v-flex xs12 d-flex justify-center class="row-pad-lg">
            <img style="width:100%;" src="/ntms/Wireframes.jpg" >
        </v-flex>
   <v-col cols="12" class="align-center row-pad-sections seperator" id="define">
        <h1 class="text-center">Design</h1>
      </v-col>


            <v-col cols="9" class="ma-auto row-pad">
              <v-row justify="center" >
            <v-col cols="10">
              <v-img max-width="100%" src="/ntms/dashboard.png" class="elevation-1" />
            </v-col>
            <v-col cols="10">
              <v-img max-width="100%" src="/ntms/dashboard-b.png" class="elevation-1" />
            </v-col>

            <v-col cols="10">
              <v-img max-width="100%" src="/ntms/products.png" class="elevation-1" />
            </v-col>

            <v-col cols="10">
              <v-img max-width="100%" src="/ntms/Products-Edit.png" class="elevation-1" />
            </v-col>

            <v-col cols="10">
              <v-img max-width="100%" src="/ntms/question-grop-edit.png" class="elevation-1" />
            </v-col>

            <v-col cols="10">
              <v-img max-width="100%" src="/ntms/Question-Groups.png" class="elevation-1" />
            </v-col>

            <v-col cols="10">
              <v-img max-width="100%" src="/ntms/report.png" class="elevation-1" />
            </v-col>
            <v-col cols="10">
              <v-img max-width="100%" src="/ntms/report-b.png" class="elevation-1" />
            </v-col>
            </v-row>
            </v-col>

          <!-- <v-flex xs10 d-flex justify-center column class="ma-auto">
          </v-flex> -->
    </div>
  </div>
</template>

<script>
  export default {

  }

</script>

<style lang="scss" scoped>
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

  .rich-text {
    font-size: 1.3rem;
    line-height: 1.7;

  }

</style>
