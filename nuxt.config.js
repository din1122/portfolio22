import colors from "vuetify/es5/util/colors";

export default {
    srr: "false",
    /*
     ** Headers of the page
     */
    head: {
        titleTemplate: "Din Ashkenazi Portfolio - Product Designer",
        title: "Din Ashkenazi Portfolio - Product Designer",
        meta: [{
                charset: "utf-8"
            },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            {
                hid: "description",
                name: "description",
                content: "This is my UI UX & Web design Portfolio, I have 6 years of experience of web design and development as well as graphic design and visualization "
            }
        ],
        link: [{
            rel: "icon",
            type: "image/x-icon",
            href: "/favicon.ico"
        }],
        script: [{
                src: "https://code.jquery.com/jquery-3.6.0.min.js"
            },
            {
                src: "/js/hotjar.js"
            },
            // {
            //     src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/gsap.min.js"
            // },
            // {
            //     src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.4.2/ScrollTrigger.min.js"
            // },
            {
                src: "https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.min.js"
            },
            {}
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: {
        color: "#fff"
    },
    /*
     ** Global CSS
     */
    css: ["~/assets/css/style.scss"],
    // css: [],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        { src: '~/plugins/gsap.js', srr: true }
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        "@nuxtjs/eslint-module",
        "@nuxtjs/vuetify", ['@nuxtjs/google-analytics', {
            id: 'UA-89031274-13'
        }],
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        [
            "storyblok-nuxt",
            {
                accessToken: "oPgM7IYl1i1JZQm6ud4RJwtt",
                cacheProvider: "memory"
            }
        ]
    ],
    /*
     ** vuetify module configuration
     ** https://github.com/nuxt-community/vuetify-module
     */
    vuetify: {
        customVariables: ["~/assets/variables.scss"],
        theme: {
            disable: true,
        }
    },
    /*
     ** Build configuration


    // serverMiddleware: [
    //     { path: '/api', handler: '~/api/nodemailer.js' }
    // ],
     */
    axios: {},
    build: {
        transpile: [
            "gsap"
        ],
        vendor: ['axios'],
        analyze: false,
        extractCSS: true,

        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
};