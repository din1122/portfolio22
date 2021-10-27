<template>
  <div>

    <div class="ntms"  >
      <v-col cols="12" class="align-center row-pad-sections seperator" id="define"  >
        <h1 class="text-center" id="define">Define</h1>
      </v-col>
      <v-col cols="11" class="ma-auto">
        <v-row class="row-pad-lg">
          <v-flex xs4 class="pe-5">
            <h2 class="pb-5">Webapp Sitemap</h2>
            <p class="rich-text">
              At the start of the project, I decided to create a sitemap so I could better understand the user paths and
              the platform
              structure.<br>
              Thereby, I found out some of the necessary pages and popups the client has defined as needed for the
              platform is unnecessary and not supporting the usability of the app.
            </p>
            <br><br>
          </v-flex>
          <v-flex xs7 offset-xs1 d-flex justify-center>
            <img style="width:100%; max-width:100%;" src="/ntms/sitemap.jpg" alt=""  >
          </v-flex>
        </v-row>
      </v-col>
      <v-flex xl9 md10 sm11 ma-auto>
        <v-row class="row-pad">
          <v-flex xs6 ma-auto>
            <h2 class="pb-5">Webapp Userflow</h2>
            <p class="rich-text">
              I started by mapping out the user's steps to see how I cloud to simplify their journey on the platform.
              <br><br>
              The most important and probably most used flow for the manager will be editing an existing question in a
              group of questions.
              <br>
            </p>
            <br><br>
          </v-flex>
        </v-row>
      </v-flex>
      <v-col col="12" class="seperator row-pad">
        <v-flex class="ma-auto" xs9 d-flex flex-column justify-center>
          <img style="width:100%; max-width:100%;"  src="/ntms/userflow.jpg" alt="" class="rounded elevation-3" max-width="100%" >

          <span class="pt-5 ma-auto">WEBAPP USERFLOW</span>
        </v-flex>
      </v-col>
      <v-col cols="11" class="ma-auto">
        <v-row class="row-pad-lg">
          <v-flex xs4 class="pe-5">
            <h2 class="pb-5">Mobile App Sitemap</h2>
            <p class="rich-text">
              I created this sitemap to understand the app structure, hierarchy, and usability. <br>
              After getting the app overview I could start trimming the unnecessary pages like scan confirmation.

            </p>
            <br><br>
          </v-flex>
          <v-flex xs7 offset-xs1 d-flex justify-center>
            <img style="width:100%; max-width:100%;"  src="/ntms/app-sitemap.jpg" alt=""  >
          </v-flex>
        </v-row>
      </v-col>
      <v-flex xl9 md10 sm11 ma-auto>
        <v-row class="row-pad">
          <v-flex xs6 ma-auto>
            <h2 class="pb-5">Mobile App Userflow</h2>
            <p class="rich-text">
              I started out with the main userflow in the app. Question filling.
              <br><br>
              I wanted to understand each step in the way the user will go thourgh in the process in order to make it as
              much easy for him to do so.
              <br>
              Using this method I understood which components should appear and in what order in each page.

              <br>
            </p>
            <br><br>
          </v-flex>
        </v-row>
      </v-flex>
      <v-col col="12" class="seperator row-pad">
        <v-flex class="ma-auto" xs9 d-flex flex-column justify-center>
          <img style="width:100%; max-width:100%;"  src="/ntms/app-userflow.jpg" alt="" class="rounded elevation-3" max-width="100%"  >
          <span class="pt-5 ma-auto">MOBILE APP USERFLOW</span>
        </v-flex>
      </v-col>



      <v-col cols="11" class="ma-auto">
        <v-row class="row-pad-lg">
          <v-flex xs4 class="pe-5 ">
            <div class="persona-fixed d-flex align-top justify-center flex-column">
              <h2>Personas</h2><br>
              <p class="rich-text">
                Based on the audience research I set up <i>two personas</i>.
                I wanted to understand the user needs, goals, and main uses of the app. <br><br>

                I knew one persona will use the desktop web app and one will use the mobile application.
                <br> <br>
              </p>
              <ul>
                <li>Cleaning/Any workforce manager</li>
                <li>Worker</li>
              </ul>
            </div>
          </v-flex>
          <v-flex xs7 offset-xs1 d-flex justify-center>
            <img style="width:100%; max-width:100%;"  src="/ntms/Persona.jpg" class="elevation-1">
          </v-flex>
          <v-flex xs4 class="pe-5">
          </v-flex>
          <v-flex xs7 offset-xs1 d-flex justify-center class="pt-5">
            <img style="width:100%; max-width:100%;"  src="/ntms/Persona2.jpg" class="elevation-1" >
          </v-flex>
        </v-row>
      </v-col>
      <v-col cols="5" class="ma-auto">
        <h2>Wireframes</h2><br>
        <p class="rich-text">
          At the start of my design process, I created Low-fi wireframes to test different layout styles of the app.
          <br>
          it proves useful because I tested some off-client ideas that I had for the design. <br>
          for example, combining the reports search page and results into one single screen.
        </p>
      </v-col>
      <v-flex xs12 d-flex justify-center class="row-pad-lg">
        <img style="width:100%; max-width:100%;"  src="/ntms/Wireframes.jpg">
      </v-flex>

      <v-col cols="12" class="align-center row-pad-sections seperator" id="design">
        <h1 class="text-center">Design</h1>
      </v-col>
      <v-col cols="5" class="ma-auto row-pad-lg">
        <h2>UI Design</h2><br>
        <p class="rich-text">
          Once my wireframes were explained and tested by the client, I began designing the final screen in high-fidelity
          <br>
          I tried to give it a clean, corporate and light look. <br>
          In that way, the managers would not feel overwhelmed by the provided data.
        </p>
      </v-col>


      <v-col cols="9" class="ma-auto row-pad-lg">
        <v-row class="row-pad-lg d-flex ">
          <v-col cols="4" class="pad-top">
            <h2>Dashboard Screen</h2><br>
            <p class="rich-text">
              This is the main screen. The first screen the user will see when he logged in to the app.
              <br>
              In this screen I wanted the user to get an overview of his employees and their task accomplishment rates.
              <br><br>
              I design 2 graphs visible to the user. on the left, you can see a pie graph that gives him an overview of
              the last day/week/month.
              <br>

              on the right, he can view the candles graph that has 2 forms of visualization and priorities. He can also
              get a comparison of the previous week/month.
              <br><br>
              Also, I designed a section where the user can filter the tasks by room, product, date, and search. <br> he
              then can access the report of the task.<br>
            </p>
          </v-col>
          <v-col cols="8">
            <img style="width:100%; max-width:100%;" max-width="90%" src="/ntms/dashboard.png" class="elevation-1 ml-auto" >
          </v-col>
        </v-row>
        <v-row class="row-pad-lg ">
          <v-col cols="4">
            <h2>Dashboard screen B</h2><br>
            <p class="rich-text">
              This is the same dashboard but with the second graph which the user can switch.
              With this graph, the user can view only the answered questions and not answered questions.
            </p>
          </v-col>
          <v-col cols="8">
            <img style="width:100%; max-width:100%;" max-width="90%" src="/ntms/dashboard-b.png" class="elevation-1  ml-auto" >
          </v-col>
        </v-row>
        <v-row class="row-pad-lg d-flex ">
          <v-col cols="4">
            <h2>Reports page</h2><br>
            <p class="rich-text">
              On this page, the user can search reports. He can review their job edit, export to an CVS file, and
              delete them.
              <br><br>
              Features on this page:
            </p>
            <ul>
              <li>Search</li>
              <li>Filter</li>
              <li>Edit answers</li>
              <li>Delete</li>
              <li>Sort</li>
              <li>Export to CSV</li>
            </ul>

          </v-col>
          <v-col cols="8">
            <img style="width:100%; max-width:100%;" max-width="90%" src="/ntms/report.png" class="elevation-1 ml-auto" >
          </v-col>
        </v-row>


      </v-col>
      <v-col cols="9" class="ma-auto row-pad-lg">

        <v-col cols="10" class="ma-auto">
          <img style="width:100%; max-width:100%;" max-width="100%" src="/ntms/products.png" class="elevation-1 " >
        </v-col>

        <v-col cols="10" class="ma-auto">
          <img style="width:100%; max-width:100%;" max-width="100%" src="/ntms/Products-Edit.png" class="elevation-1" >
        </v-col>

        <v-col cols="10" class="ma-auto">
          <img style="width:100%; max-width:100%;" max-width="100%" src="/ntms/question-grop-edit.png" class="elevation-1" >
        </v-col>

        <v-col cols="10" class="ma-auto">
          <img style="width:100%; max-width:100%;" max-width="100%" src="/ntms/Question-Groups.png" class="elevation-1" >
        </v-col>
        <v-col cols="10" class="ma-auto">
          <img style="width:100%; max-width:100%;" max-width="100%" src="/ntms/report-b.png" class="elevation-1" >
        </v-col>
      </v-col>
      <v-col cols="12" class="pa-0 row-pad">
        <img style="width:100%; max-width:100%;" src="/ntms/mobile-ui-screens.jpg" contain width="100%" max-width="100%"  />
      </v-col>
      <v-col cols="9" class="row-pad-lg ma-auto">
        <v-row class="row-pad-lg">
          <v-col cols="6">
            <h2>Fill question screen</h2><br>
            <p class="rich-text">
              In this screen, I designed all the components types the manager can add to his question group to track his job.<br> <br>
              list of components

            </p>
            <ul>
              <li>Checkbox</li>
              <li>3 options</li>
              <li>Toggle</li>
              <li>Toggle with text</li>
              <li>Text field</li>
              <li>Slider</li>
              <li>Select answer</li>
              <li>Uplode photo</li>
              <li>Date picker</li>
            </ul>
          </v-col>
          <v-col cols="6">
            <img style="width:400px; max-width:100%; display:block;"  src="/ntms/fill.png" class="elevation-1 ma-auto"  >
          </v-col>
        </v-row>

        <v-row class="row-pad-lg">
          <v-col cols="6">
            <h2>App main screen</h2><br>
            <p class="rich-text">
              This is the first screen the user will see when logged in.<br>
              the user will be able to view his assignment question group that has already been answered and needed to
              be answered. And the assisnments he have for to
              day. <br>
              Routines that already been done is greyed out and go to the end of the list.
              <br><br>
              <strong>The user will not be able to answer the questions without scanning the QR code.</strong>
            </p>
          </v-col>
          <v-col cols="6">
            <img style="width:400px; max-width:100%; display:block;" max-width="100%" width="400px" src="/ntms/item-group.png" class="elevation-1 ma-auto" >
          </v-col>
        </v-row>

        <v-row class="row-pad-lg">
          <v-col cols="4">
            <h2>App question fill flow</h2><br>
            <p class="rich-text">
              This is a prototype flow of a new user going through fill out a table question - whether is it cleaned or
              not.
            </p>
          </v-col>
          <v-col cols="6" offset="2" >
            <video autoplay loop width="400px" src="/ntms/prototype_1.mp4" class="ma-auto d-flex">
              <source src="/ntms/prototype_1.mp4" type="video/mp4">
            </video>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" class="align-center row-pad-sections seperator" id="branding">
        <h1 class="text-center">Branding</h1>
      </v-col>
      <v-col class="d-flex justify-center align-center" style="background:#2121CC; height:100vh;">
        <img style="width:400px; max-width:350px; height:350px;" src="/ntms/logo.svg" contain max-height="350" max-width="350" >
      </v-col>
      <v-flex ma-auto xs6 class="row-pad-lg">
        <h2 class="pb-5">Colors</h2>
        <v-row>
          <v-col cols="2">
            <div class="w-100 d-flex flex-column align-center justify-center">
              <span class="pb-3">Primary</span>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <div v-bind="attrs" v-on="on"
                    style="border-radius:15px; background-color:#2121CC; width:105px; height:100px"></div>
                </template>
                <span>#2121CC</span>
              </v-tooltip>
            </div>
          </v-col>
          <v-col cols="2">
            <div class="w-100 d-flex flex-column align-center justify-center">
              <span class="pb-3">Secondary</span>

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <div v-bind="attrs" v-on="on"
                    style="border-radius:15px; background-color:#5FFCFF; width:105px; height:100px"></div>
                </template>
                <span>#5FFCFF</span>
              </v-tooltip>
            </div>
          </v-col>
          <v-col cols="2">
            <div class="w-100 d-flex flex-column align-center justify-center">
              <span class="pb-3">Text & Inputs</span>

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <div v-bind="attrs" v-on="on"
                    style="border-radius:15px; background-color:#B6B6B6; width:105px; height:100px"></div>
                </template>
                <span>#B6B6B6</span>
              </v-tooltip>
            </div>
          </v-col>

          <v-col cols="2">
            <div class="w-100 d-flex flex-column align-center justify-center">
              <span class="pb-3">Success</span>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <div v-bind="attrs" v-on="on"
                    style="border-radius:15px; background-color:#60BF60; width:105px; height:100px"></div>
                </template>
                <span>#60BF60</span>
              </v-tooltip>
            </div>
          </v-col>
          <v-col cols="2">
            <div class="w-100 d-flex flex-column align-center justify-center">
              <span class="pb-3">Error</span>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <div v-bind="attrs" v-on="on"
                    style="border-radius:15px; background-color:#D65858; width:105px; height:100px"></div>
                </template>
                <span>#D65858</span>
              </v-tooltip>
            </div>
          </v-col>
          <v-col cols="2">
            <div class="w-100 d-flex flex-column align-center justify-center">
              <span class="pb-3">Warning</span>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <div v-bind="attrs" v-on="on"
                    style="border-radius:15px; background-color:#ECC340; width:105px; height:100px"></div>
                </template>
                <span>#ECC340</span>
              </v-tooltip>
            </div>
          </v-col>
        </v-row>


      </v-flex>
    <v-flex xl9 md10 sm11 ma-auto>
      <v-row class="row-pad">
        <v-flex ma-auto xs6>
          <h2 class="pb-3">My Takeaways</h2>
          <p class="rich-text">
           In this project, I learned how to manage with a limited budget along with providing the best user experience in the mobile app and desktop web app. <br> <br>
          I needed to understand how to transform dull data tables into more appealing tables. That got me to dive deep into the fundamentals of data visualization.
          The mobile app was a challenge to design. I had difficulties understanding the user flow and the app uses. It took time for me to comprehend how is best to handle the UI and UX of the app.
to conclude, the project was fun to design. I enjoyed designing and defining it, My client was very understanding and very involved
           <br><br>
          </p>
        </v-flex>
      </v-row>
    </v-flex>
      <!-- <v-flex xs10 d-flex justify-center column class="ma-auto">
          </v-flex> -->
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        animation: null,
        scroller: null,
        landingIsOn:false,
      }
    },
  }



</script>

<style lang="scss" scoped>
h3 {
  font-size: 3rem;
}
//
//
//   .row-pad {
//     padding: 100px 0 100px 0;
//   }
//
//   .row-pad-lg {
//     padding: 200px 0 200px 0;
//   }
//
//   .row-pad-xs {
//     padding: 30px 0 30px 0;
//   }
//
//   .row-pad-sections {
//     padding: 150px 0 150px 0;
//   }
//
//   .seperator {
//     background: #ECECEC;
//   }
//
//   .rich-text,
//   ul {
//     font-size: 1.3rem;
//     line-height: 1.7;
//   }
//
//
//   .tableofc-container {
//     height: 500px;
//     z-index: 999 !important
//   }
//
//  .tableofc {
//     padding: 0;
//   }
//
//
//   .step-number {
//     margin: 0 auto 10px;
//     font-size: 1.5rem;
//     background: #fff;
//     border: 2px solid #d1d9dd;
//     width: 48px;
//     height: 48px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     text-align: center;
//     line-height: 1;
//     border-radius: 50%;
//     transition: all .3s;
//     position: relative;
//     z-index: 1;
//     float: none;
//     cursor: pointer;
//   }
//  .step-number-fixed{
//   transition:.2s all ease-in-out;
//    width: 32px;
//     height: 32px;
//        font-size: 1rem;
// }
//   .step-number:hover {
//     background: black;
//     color: white;
//   }
//
//   .nav-step-container {
//     width: 180px;
//     padding: 20px 10px;
//     position: relative;
//   }
//
//   .step-link {
//     flex-direction: column;
//     display: flex;
//     text-align: center;
//     align-items: center;
//   }
//
//   .nav-step {
//     position: relative;
//     text-align: center;
//     opacity: 1;
//     padding: 0;
//     background: transparent;
//     width: auto;
//     margin-bottom: 0;
//   }

</style>
