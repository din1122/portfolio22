import colors from "vuetify/es5/util/colors";

export default {
    srr: "false",
    /*
     ** Headers of the page
     */
    head: {
        titleTemplate: "Din Ashkenazi Portfolio - UI UX & Web Designer",
        title: "Din Ashkenazi Portfolio - UI UX & Web Designer",
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
                content: "This is my UI UX & Web design Portfolio, I have 6 years of experience of web design and developement as well as graphic design and visualization "
            }
        ],
        link: [{
            rel: "icon",
            type: "image/x-icon",
            href: "/favicon.ico"
        }],
        script: [{
                src: "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"
            },
            {
                src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.6/gsap.min.js"
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
    plugins: [],
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
        vendor: ['axios'],
        analyze: false,
        extractCSS: true,

        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
};
