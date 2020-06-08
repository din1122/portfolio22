import colors from "vuetify/es5/util/colors";

export default {
    mode: "spa",
    /*
     ** Headers of the page
     */
    head: {
        titleTemplate: "%s - " + process.env.npm_package_name,
        title: process.env.npm_package_name || "",
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
                content: process.env.npm_package_description || ""
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
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        //"@nuxtjs/eslint-module",
        "@nuxtjs/vuetify"
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        [
            "storyblok-nuxt",
            { accessToken: "Z1vEJeJIo18ccN3Qu6Wn5gtt", cacheProvider: "memory" }
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
     */
    serverMiddleware: [
        '~/api/nodemailer'
    ],
    axios: {},
    build: {
        vendor: ['axios'],
        analyze: true,
        extractCSS: true,

        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
};