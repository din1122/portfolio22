<template>
  <div class="panoptic">
    <v-col class="row-pad tableofc "  >
     <div class="fixed-target" id="fixed-target"></div>
      <v-col cols="9" class="ma-auto align-center justify-center d-flex fixed-element" >
        <div class="nav-steps-con d-flex ">
          <div class="nav-step" >
            <div class="nav-step-container" v-on:click="discover()">
                <div class="step-number">1</div>
                <span>Discover</span>
            </div>
          </div>

          <div class="nav-step">
            <div class="nav-step-container" v-on:click="define()">
                <div class="step-number">2</div>
                <span>Define</span>
            </div>
          </div>

          <div class="nav-step">
            <div class="nav-step-container"  v-on:click="design()">
                <div class="step-number">3</div>
                <span>Ideation & Design </span>
            </div>
          </div>

          <div class="nav-step">
            <div class="nav-step-container" v-on:click="branding()" >
                <div class="step-number">4</div>
                <span>Branding</span>
            </div>
          </div>
        </div>
      </v-col>
    </v-col>

    <v-flex xl9 md10 sm11 ma-auto>
      <div class="row-pad">
        <v-img max-width="100%" src="/panoptic/add-widget.jpg" class="mb-5" />
        <v-img max-width="100%" src="/panoptic/dashboard.jpg" class="mb-5" />
        <v-img max-width="100%" src="/panoptic/panotpic-mode.jpg" class="mb-5" />
        <v-img max-width="100%" src="/panoptic/register.jpg" class="mb-5" />
      </div>
    </v-flex>
    <v-col cols="12" id="discover" class="align-center row-pad-sections seperator">

      <h1 class="text-center">Discover</h1>

    </v-col>
    <v-flex xl9 md10 sm11 ma-auto>
      <v-row class="row-pad">
        <v-flex xs6 ma-auto>
          <h2 class="pb-5">Interviews</h2>
          <p class="rich-text">
            At the discovery phase of my project, I choose to interview 5 key people in this industry in order to get a
            a better understanding of the problem and my solution needs.
            <br><br>
            <strong>My guiding questions were:</strong>
            <ul>
              <li>What are the main challenges in the field?</li>
              <li>Is there a real need for this kind of solution?</li>
              <li>Do you have any system that helps you manage your assets?</li>
            </ul>
            <br><br>
            From those interviews, I understood that automation is a key feature they wish to have in any process.
            It saves them time and money. they have people watching over entire projects for them and managing them.
            They
            need to systemize everything in their business
          </p>
        </v-flex>
      </v-row>
      <v-row class="row-pad">
        <v-flex xs6 ma-auto>
          <h2 class="pb-5">Competitive Research</h2>
          <p class="rich-text">
            I gathered information about the competition to find if there is already a solution to the problem.
            <br><br>
            from the competitor's research, I concluded that there isn't an existing solution to the exact need of my
            users. however,
            I did found some good user experience inspirations out of the platforms and services.
            <br><br>
            My main focus was the Register and onboarding phase.
            <br><br>
            My direct competitors included
            <ul>
              <li>AgencyAnalytics</li>
              <li>ManageWP</li>
              <li>Swydo</li>
              <li>MainWP</li>
              <li>InfiniteWP</li>
            </ul>
            <br>
            Three of the above are great. Although to marketing specialists and agencies. Not to digital assets owners.
            That platform's main focus is on client reports and statistics but no real-time data nor insights. Limited
            variety of
            external services and API’s
          </p>
        </v-flex>
      </v-row>

      <v-row class="row-pad">
        <v-flex xs6 ma-auto>
          <h2 class="pb-5">Surverys</h2>
          <p class="rich-text">
            Along with the interviews I conducted a survey which I publish in digital nomads and digital assets owner
            forums and Facebook Groups to better understand the user needs and pain points.
            <br><br>
            My guiding questions were:
            <ul>
              <li>What services do you use to maintain your assets?</li>
              <li>What do you think is the most difficult system to master with digital assets?</li>
              <li>How long do you spend on analyzing and tracking your assets data?</li>
              <li>How many hours/days do you spend on your digital assets?</li>
              <li>Would you use a platform that will help you track your assets data?</li>
              <li>Do you currently have a system that helping you track the data?</li>
            </ul>
            <br>
            from those surveys, I understood the main needs of my users. Marketing, Tracking, and analyzing.
            People are trying to save money and manpower. fewer people to trust on their business, there is always a gap
            between
            the same data in one service to another.
          </p>
        </v-flex>
      </v-row>
      <v-row class="row-pad">
        <v-flex xs6 class="flex-column d-flex  align-center">
          <span class="rich-text pb-5">What do you think is the most challenging thing to master with digital
            assets?</span>
          <img style="width:70%;" src="/panoptic/surv.svg">
        </v-flex>
        <v-flex xs6 class="flex-column d-flex  align-center">
          <span class="rich-text pb-5">how old are you?</span>
          <img style="width:60%;" src="/panoptic/surv2.svg">
        </v-flex>
      </v-row>
      <v-row class="row-pad">
        <v-flex xs6 class="flex-column d-flex  align-center">
          <span class="rich-text pb-5">Which kind of digital assets have you have/had?</span>
          <img style="width:70%;" src="/panoptic/kind.svg">
        </v-flex>
        <v-flex xs6 class="flex-column d-flex  align-center">
          <span class="rich-text pb-5">Are you partners with digital assets?</span>
          <img style="width:60%;" src="/panoptic/partner.svg">
        </v-flex>
      </v-row>
    </v-flex>
    <v-col cols="12" class="align-center row-pad-sections seperator" id="define">
      <h1 class="text-center">Define</h1>
    </v-col>

    <v-col cols="11" class="ma-auto">
      <v-row class="row-pad-lg">
        <v-flex xs4 class="pe-5">
          <h2>Personas</h2><br>
          <p class="rich-text">
            Based on the interviews, <i>I set up three personas.</i><br><br>
            After my research, interviews, and surveys I decided to keep my focus on my users and create a user-based
            design. I knew I needed 3 different personas and focus on their struggles, goals, and needs.
            <br><br>
            <ul>
              <li>Landing page campaign manager</li>
              <li>Freelancer full-stack developer</li>
              <li>E-commerce owner (Entrepreneur) </li>
            </ul>
            <br>
            After I realized that my personas have different needs and goals, <strong>I decided to create several
              platform dashboard
              templates that fit the user's needs.</strong>
          </p>
        </v-flex>
        <v-flex xs7 offset-xs1 d-flex justify-center>
          <img style="width:100%;" src="/panoptic/persona1.png">
        </v-flex>
        <!-- <v-flex d-flex justify-center class="row-pad">
          <img style="width:80%;" src="/panoptic/persona2.png">
        </v-flex> -->
      </v-row>
    </v-col>
    <v-col cols="11" class="ma-auto">
      <v-row class="row-pad-lg">
        <v-flex xs4>
          <h2 class="pb-5">User Journey</h2>
          <p class='rich-text'>
            I devised a Register user journey. I created a scenario where the user wanted to use the platform to manage
            his assets. with this method, I figured that the most crucial step was to enter the asset credentials and
            details because it makes the user ask himself questions like “Can I trust them?”, “Do I really need this
            service?”.
            <br><br>
            bases on that <strong>I decided to design the registration process easy and as much as possible
              trustworthy.</strong>
          </p>
        </v-flex>
        <v-flex xs7 offset-xs1 d-flex justify-center>
          <img style="width:100%;" class="rounded elevation-4" src="/panoptic/journey-2.png">
        </v-flex>
      </v-row>
    </v-col>
    <v-col cols="11" class="ma-auto">
      <v-row class="row-pad">
        <v-col>
          <h2 class="pb-5">Features</h2>
          <p class="rich-text">
            This is the features list I defined for my platform according to my user surveys and interviews and
            competitors research.
            <br><br>Those are the main features by title the platform will offer.
          </p>
        </v-col>
        <v-col cols="4">
          <div class="feature-box">
            <span>Tracking and anazlying data</span>
          </div>
          <div class="feature-box">
            <span>Backup & Security features</span>
          </div>
          <div class="feature-box">
            <span>CMS website maintance</span>
          </div>
          <div class="feature-box">
            <span>Marketing tracking tools</span>
          </div>
          <div class="feature-box">
            <span>Creating clients reports</span>
          </div>
          <div class="feature-box">
            <span>Custom notifcations & automation</span>
          </div>
        </v-col>
        <v-col cols="4">
          <div class="feature-box">
            <span>Integration for Database services</span>
          </div>
          <div class="feature-box">
            <span>Integration for Affiliate marketing services</span>
          </div>
          <div class="feature-box">
            <span>Customize & Unlimited Dashboards</span>
          </div>
          <div class="feature-box">
            <span>Main Freehand Dashboard</span>
          </div>
          <div class="feature-box">
            <span>Data insights</span>
          </div>
          <div class="feature-box">
            <span>Dashboard persentaion playlist automation</span>
          </div>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="11" class="ma-auto">
      <v-row class="row-pad">
        <v-col>
          <h2 class="pb-5">Sitemap & Interactions</h2>
          <p class="rich-text">
            This is the way I choose to approche my sitemap becuase I really didn't know where the features will be
            heiriechy and how to user will interact with them.
          </p>
        </v-col>
        <v-col>
          <img src="/panoptic/sitemap-lg.jpg">
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="11" class="ma-auto">
      <v-row class="row-pad">
        <v-col cols="4">
          <h2 class="pb-5">Sitemap Register</h2>
          <p class="rich-text">
            For the register flow i decided to divided it to 4 steps.I tried to define what will be on each steps and
            what user decisions he will have.<br><br> This is the first brainstorming I had on the platform flow so
            things changed in the final design.
          </p>
        </v-col>
        <v-col cols="8">
          <v-img src="/panoptic/sitemap-register.jpg" />
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="11" class="ma-auto">
      <v-row class="row-pad">
        <v-col cols="4">
          <h2 class="pb-5">Sitemap - Widgets</h2>
          <p class="rich-text">
            In this flow I wanted to define which widget services will have intergrations and which one's not. <br><br>
            In this way I can create A data dashboard from services that does not require Login (API) connection
          </p>
        </v-col>
        <v-col cols="8">
          <v-img src="/panoptic/sitemap-widgets.jpg" />
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="12" class="align-center row-pad-sections seperator" id="design">
      <h1 class="text-center">Ideation & Design</h1>
    </v-col>
    <v-flex xl9 md10 sm11 ma-auto>
      <v-row class="row-pad">
        <v-flex ma-auto xs6>
          <h2>Wireframes</h2>
          <p class='rich-text'>
            After some sketching, I started my design process by creating low-fidelity wireframes using Adobe XD. The
            purpose of my wireframes was to brainstorm and presenting them to my designer's teammates.
            <br><br>
            My top priority was to create the easiest way to navigate the dashboard. It wasn't an easy task to get when
            I wanted three different menus on one screen. I designed more than 3 versions for every screen and more than
            4 versions for dashboard screens.
            <br><br>
            Eventually, I choose this dashboard version. It allows my user to view all his assets as well as manage his
            dashboards easily.
            <br><br>
          </p>
        </v-flex>
      </v-row>
      <v-row class="row-pad">
        <div class="d-flex xs6 flex-column justify-center pa-3">
          <img style=" height:100%; width:60%;" class="ma-auto" src="/panoptic/wire3.png">
        </div>
      </v-row>
      <v-row class="row-pad">
        <div class="d-flex xs6 flex-column pa-3">
          <img style=" height:100%; width:100%;" src="/panoptic/wireframe-group.png">
        </div>
      </v-row>
    </v-flex>

    <v-col>
      <v-img max-width="100%" src="/panoptic/mask-group.jpg"></v-img>
    </v-col>
    <v-flex xl9 md10 sm11 ma-auto>
      <v-row class="row-pad-lg">
        <v-flex ma-auto xs6>
          <h2>UI DESIGN</h2>
          <p class="rich-text">
            I started designing the final screens in Adobe XD <br><br>
            Inspired by flat design style and material design elements I created a clean, fresh and corporate look and
            feel to the platform. In this way, the user won't feel overwhelmed by looking at his data.
          </p>
        </v-flex>
      </v-row>
    </v-flex>
<v-col>
  <v-img src="/panoptic/ui_screens.png"></v-img>
</v-col>
    <v-flex xs11 ma-auto>
      <v-row class="row-pad-lg">
        <v-col cols="4">
          <h2 class="pb-5">Tooltip screen</h2>
          <p class="rich-text pr-5">
           Because I knew that my platform was going to have a lot of menus. <br>I decided to add a Tooltip flow guide right after the user finish the register. <br><br>
          That will help the user get familiar with the platform and not getting overwhelmed by the learning curve he has to go through
          </p>
        </v-col>
        <v-col cols="7" offset="1">
          <v-img src="/panoptic/tooltip.png" max-width="100%" class="elevation-4 rounded" />
        </v-col>
      </v-row>
      <v-row class="row-pad-lg">
        <v-col cols="4">
          <h2 class="pb-5">Dashboard Screen</h2>
          <p class="rich-text pr-5">
            You are looking at a Marketing dashboard screen. In this screen I choose to show the website name on the top
            of the screen
            along with the dashboard name. Below that you can see the dashboard menu that will contain relative
            widgets.<br><br>
            At the side bar I choose to design his list of current digital assets with an option to add one.<br><br>
            The widgets are completly customizable, responsive and movable. <br>
            I made the widget responsive so the user can prirotize his most important widget.

          </p>
        </v-col>
        <v-col cols="7" offset="1">
          <v-img src="/panoptic/dashboard.png" max-width="100%" class="elevation-4 rounded" />
        </v-col>
      </v-row>
      <v-row class="row-pad-lg">
        <v-col cols="4">
          <h2 class="pb-5">Panoptic Mode (Free Dashboard) Screen</h2>
          <p class="rich-text pr-5">
            This is the panoptic mode screen.
            In this screen I wanted to create a free space for the user to create his own ultimite dashboard.
            <br><br>He can view all his widgets for <strong>all</strong> his assets.
            instead of click the add widget button he can just search the widget he want and <strong>drag and drop
            </strong>
            it on the screen and use it as he likes.
            <br><br>
          </p>
          <span class="text-subittle">Notification feature</span>
          <p class="rich-text pr-5">
            I designed a conditioned notification autmation feature. <br>
            The user is able to focus the data he want to get notification about and set a condition he want (IF) then
            create the outcome - a list get notifited by number or email
            <br><br>
            in the example:<br>
            <i>IF</i> session duration is under 40s <i>THEN</i> this list get notification.
          </p>
        </v-col>
        <v-col cols="7" offset="1">
          <v-img src="/panoptic/panoptic-mode-f.png" max-width="100%" class="elevation-4 rounded" />
        </v-col>
      </v-row>
      <v-row class="row-pad-lg">
        <v-col cols="4">
          <h2 class="pb-5">Register - Step One</h2>
          <p class="rich-text pr-5">
            I wanted a simple and easy register form to help the user think less. So I split the registration process to
            4 steps. <br>
            In this way the user is getting more commited to the platform with each step he finish.<br><br>
            I diceded to add some 3d visuals to the screen to support the user exsitment of the platform <br>
            screen features:
            <ul>
              <li>Password stength Indication</li>
              <li>Wizard form steps idications</li>
              <li>Register with Google or Facebook</li>
            </ul>
          </p>
        </v-col>
        <v-col cols="7" offset="1">
          <v-img src="/panoptic/Register-1.png" max-width="100%" class="elevation-4 rounded" />
        </v-col>
      </v-row>
      <v-row class="row-pad-lg">
        <v-col cols="4">
          <h2 class="pb-5">Register - Add Asset</h2>
          <p class="rich-text pr-5">
            In this screen, the user can name his assets, include the asset url address, assign a folder and choose his
            asset type.
            After connecting his asset type, he can choose to intergrate his services.
          </p>
        </v-col>
        <v-col cols="7" offset="1">
          <v-img src="/panoptic/Register-3.png" max-width="100%" class="elevation-4 rounded" />
        </v-col>
      </v-row>
      <v-row class="row-pad-lg">
        <v-col cols="4">
          <h2 class="pb-5">Add Widget</h2>
          <p class="rich-text pr-5">
            In this screen the user is able to add a service widget to his dashboard <br><br>
            He needs to
            <ul>
              <li>Choose or connect his data source (youtube, Google analytics, etc..) </li>
              <li>Select the data type he want the widget to show</li>
              <li>Pick the type of visual the widget will use to display the data</li>

            </ul>
          </p>
        </v-col>
        <v-col cols="7" offset="1">
          <v-img src="/panoptic/add-widget-f.png" max-width="100%" class="elevation-4 rounded" />
        </v-col>
      </v-row>
         <v-col class="text-center">
      <v-row class="row-pad text-center align-center justify-center">
        <a class="book-text" href="/panoptic/panoptic-branding-book.pdf">
          <h3>Click here for full Prototype</h3>
        </a>
      </v-row>
    </v-col>
      <v-row class="row-pad-lg" >
        <v-col cols="10" class="align-center ma-auto text-center">
          <h2 class="pb-5">Landing Page</h2>
          <v-img src="/panoptic/landing.png" max-width="100%" class="elevation-4 rounded" />
        </v-col>
      </v-row>
    </v-flex>
    <v-col cols="12" class="align-center row-pad-sections seperator" id="branding">
      <h1 class="text-center" >Branding</h1>
    </v-col>
    <v-col cols="9" class="ma-auto" >
      <v-row class="row-pad align-center justify-center">
        <v-col cols="12 pb-5">
          <v-col cols="8" class="ma-auto pa-0">
            <h3>Brand values</h3>
          </v-col>
        </v-col>
        <v-col cols="4">
          <div class="values-box">
            <h2>Mission</h2>
            <span class="rich-text">To be the first platform for efficent digital assets management in a single
              place</span>
          </div>
          <div class="values-box">
            <h2>Vision</h2>
            <span class="rich-text">Create more freedom, flexability and powerment in the digital space</span>
          </div>
          <div class="values-box">
            <h2>Promise</h2>
            <span class="rich-text">Your assets managed</span>
          </div>
        </v-col>
        <v-col cols="3" offset="1">
          <div class="values-box">
            <h2>Essense</h2>
            <span class="rich-text">Actionable fast decisions based on real time data </span>
          </div>
          <div class="values-box">
            <h2>Slogan</h2>
            <span class="rich-text">Your assets managed</span>
          </div>
          <div class="values-box">
            <h2>Positioning</h2>
            <span class="rich-text">digital platforms optimization</span>
          </div>

        </v-col>
      </v-row>
    </v-col>
    <v-col>
      <v-row class="row-pad">
        <v-flex ma-auto xs6>
          <h2 class="pb-5">Visual Design</h2>
          <v-row class="row-pad pt-5">
            <v-col cols="6">
              <h3>Brand personallity</h3>
              <p class="rich-text">
                Panoptic is an elegent and intellegent person. He is confident in himself. Stable but also flexible. A
                person you go to when a problem emerges.
              </p>
            </v-col>
            <v-col cols="6">
              <div class="align-center d-flex flex-column">
                <h2 class="text-center pb-5">Logo</h2>
                <v-img max-width="100%" src="/panoptic/logo-b.svg" />
              </div>
            </v-col>
          </v-row>
          <h2 class="pb-5">Colors</h2>
          <v-row>
            <v-col cols="2">
              <div class="w-100 d-flex flex-column align-center justify-center">
                <span class="pb-3">Primary</span>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <div v-bind="attrs" v-on="on"
                      style="border-radius:15px; background-color:#0533ED; width:105px; height:100px"></div>
                  </template>
                  <span>#0533ED</span>
                </v-tooltip>
              </div>
            </v-col>
            <v-col cols="2">
              <div class="w-100 d-flex flex-column align-center justify-center">
                <span class="pb-3">Secondary</span>

                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <div v-bind="attrs" v-on="on"
                      style="border-radius:15px; background-color:#26f9f0; width:105px; height:100px"></div>
                  </template>
                  <span>#26f9f0</span>
                </v-tooltip>
              </div>
            </v-col>
            <v-col cols="2">
              <div class="w-100 d-flex flex-column align-center justify-center">
                <span class="pb-3">Text & Inputs</span>

                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <div v-bind="attrs" v-on="on"
                      style="border-radius:15px; background-color:#4e5161; width:105px; height:100px"></div>
                  </template>
                  <span>#4e5161</span>
                </v-tooltip>
              </div>
            </v-col>
            <v-col cols="2">
              <div class="w-100 d-flex flex-column align-center justify-center">
                <span class="pb-3">Text & Inputs</span>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <div v-bind="attrs" v-on="on"
                      style="border-radius:15px; background-color:#afb7db; width:105px; height:100px"></div>
                  </template>
                  <span>#afb7db</span>
                </v-tooltip>
              </div>
            </v-col>
            <v-col cols="2">
              <div class="w-100 d-flex flex-column align-center justify-center">
                <span class="pb-3">Positive indication</span>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <div v-bind="attrs" v-on="on"
                      style="border-radius:15px; background-color:#6dcf6d; width:105px; height:100px"></div>
                  </template>
                  <span>#6dcf6d</span>
                </v-tooltip>
              </div>
            </v-col>
            <v-col cols="2">
              <div class="w-100 d-flex flex-column align-center justify-center">
                <span class="pb-3">Negative indication</span>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <div v-bind="attrs" v-on="on"
                      style="border-radius:15px; background-color:#d45c5c; width:105px; height:100px"></div>
                  </template>
                  <span>#d45c5c</span>
                </v-tooltip>
              </div>
            </v-col>

          </v-row>
          <v-row class="row-pad">
            <v-col cols="12">
              <h2 class="pb-5">Typography</h2>
            </v-col>
            <v-col cols="12">
              <v-tooltip right>
                <template v-slot:activator="{ on, attrs }">
                  <h3 class="row-pad-xs" style="font-size:5.6rem;" v-bind="attrs" v-on="on">Helvetica Now Display</h3>
                </template>
                <span>Global typeface</span>
              </v-tooltip>
              <v-tooltip right>
                <template v-slot:activator="{ on, attrs }">
                  <img class="row-pad-xs" v-bind="attrs" v-on="on" src="/panoptic/gadui.svg">
                </template>
                <span>Logo typeface</span>
              </v-tooltip>
              <v-tooltip right>
                <template v-slot:activator="{ on, attrs }">
                  <img class="row-pad-xs" v-bind="attrs" v-on="on" src="/panoptic/armin.svg">
                </template>
                <span>Slogen typeface</span>
              </v-tooltip>
            </v-col>

          </v-row>



        </v-flex>
      </v-row>
    </v-col>
    <v-col class="ma-auto row-pad text-center" cols="9">
      <v-img src="/panoptic/insp.png" alt="" class="mb-3" />
      <span class="pt-3">MoodBoard</span>
    </v-col>
    <v-col class="row-pad ma-auto" cols="9">
      <v-img src="/panoptic/branding-kit.jpg" alt="" class="src" />
    </v-col>

    <v-col class="pa-0">
      <v-img src="/panoptic/posters-small.jpg" alt="" class="src" />
    </v-col>
    <v-flex xl9 md10 sm11 ma-auto>
      <v-row class="row-pad">
        <v-flex ma-auto xs6>
          <h2>My Takeaways</h2>
          <p class="rich-text">
            During this project, I learned how is best to deal with long registration and how critical this flow is. I
            learned how to get into the user's minds and understand their personal business in order to find their
            struggles.
            <br><br>
            I was presistent and eager to find answers for my UX research even if the questions were too private and
            most people didnt want to even sit down with me because they though I would steal their business secrets or
            use it against them.
            <br><br>
            My biggest fear was to find out that there is no real problem to solve. But, after some interviews and
            overall research, my fears were gone.
            <br><br>
            This project took nearly half a year to ideate, design, and brand. Many features weren’t displayed in this
            case study. there were hundreds and hundreds of screens, designs, and copious amounts of caffeine :) the
            project was a huge learning experience for me. Thank you for reading!
          </p>
        </v-flex>
      </v-row>
    </v-flex>
    <v-col class="text-center">
      <v-row class="row-pad text-center align-center justify-center">
        <a class="book-text" href="/panoptic/panoptic-branding-book.pdf">
          <h3>Full Branding book</h3>
        </a>
      </v-row>
    </v-col>
  </div>
</template>


<script>

  export default {

methods:{
  async discover(){
      const scroll = new LocomotiveScroll();
      const target = document.querySelector('#discover');

      scroll.scrollTo(target);
  },
  async define(){
      const scroll = new LocomotiveScroll();
      const target = document.querySelector('#define');

      scroll.scrollTo(target);
  },
  async design (){
      const scroll = new LocomotiveScroll();
      const target = document.querySelector('#design');

      scroll.scrollTo(target);
  },
  async branding (){
      const scroll = new LocomotiveScroll();
      const target = document.querySelector('#branding');

      scroll.scrollTo(target);
  }
},
mounted() {
  const scroll = new LocomotiveScroll();
      const target = document.querySelector('#container');

      scroll.scrollTo(target);

    ScrollTrigger.create({
        trigger:".nav-steps-con",
        // start:'50% center',
        // end: '50% end',
        onEnter: () => {

        },
        onLeaveBack:() => {
            // console.log("leaved");
        }
      })
},
//     mounted() {
//       let st = ScrollTrigger.create({
//         trigger: ".tableofc",
//         markers: true,
//         // refreshPriority: 1,
//         start: '+2200px center',
//         end: '+8000 center',
//         //         scrub: 1,
//         // toggleActions: "play reverse play reverse",
//         onEnter: () => {
//           let current = 0;
//           console.log("entered");
//
//
//
//         },
//         onLeaveBack: () => {
//           console.log("onLeaveBack");
//           // gsap.to('.site-header', {
//           //     backgroundColor: "transparent",
//           //     duration: 0.2,
//           //     ease: Power2
//           // })
//           // gsap.to('.nav-btn > a > .btn-lg', {
//           //     backgroundColor: '#1EA5FC',
//           //     color: 'white',
//           //     duration: 0.2,
//           //     ease: Power2
//           // })
//           // gsap.to('.nav-link ', {
//           //     color: 'black',
//           //     duration: 0.2,
//           //     ease: Power2
//           // })
//
//         },
//
//
//       });
//     }
  }

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

  .text-subittle {
    font-weight: 600;
    font-size: 20px;
  }

  .values-box {
    height: 250px;
  }

  // .p_section--navigation .sticky-header .navigation-steps .nav-step:not(:first-child):before
  .nav-steps-con .nav-step:not(:first-child):before {
    content: "";
    position: absolute;
    top: 44px;
    left: -26%;
    width: 52%;
    height: 2px;
    background-color: #d1d9dd;
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

  .feature-box {
    padding: 15px;
    background: #0533ED;
    color: white;
    width: 300px;
    text-align: center;
    border-radius: 10px;
    margin: 30px;
  }

  .book-text h3 {
    text-decoration: underline;
    transition: .3s all ease
  }

  h3:hover {
    text-decoration: underline;
    color: #d1d9dd !important;
    transition: .3s all ease
  }
.tableofc{

}
.sticky-footer {
  position: relative;
  overflow: hidden;
  height: 100vh;
}
.fixed-target {
  bottom: -100vh;
}
.fixed-element,
.fixed-target {
  position: absolute;
  top: -80vh;
  right: 0;
  left: 0;
}
.fixed-element {
  height: 100%;
  width: 100%;
}
</style>
