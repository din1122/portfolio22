<template>
  <div>
     <v-flex xl9 md10 sm11 ma-auto>
    <v-divider></v-divider>
    <v-card height="400" flat>
      <v-layout wrap fill-height>
        <v-flex xs12 xl4 md4 sm4>
          <v-card flat>
            <v-card-title>
              <h3 class="pb-2 footer-title">
                Contact Information —
              </h3>
            </v-card-title>
            <v-card-text>
              <p>
                Feel free to reach out to me any time. I prefer to talk over
                email, especially since we may be a few time zones away.
              </p>
              <div class="pb-3"><span>E: </span><span class="footer-span-contact pb-4">DinAshkenazi@gmail.com</span></div>
              <span>P: </span><span class="footer-span-contact">+972 542221666</span>
              <div class="pt-5">
                <img height="45px" class="ma-auto" src="/logo-svg.svg" />
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 xl4 md4 sm4>
          <v-card flat>
            <v-card-title>
              <h3 class="pb-2 footer-title">Latest Projects —</h3>
            </v-card-title>
            <v-card-text>
              <v-list dense>
                <v-list-item v-for="project in projects" :key="project.title">
                  <a target="_blank">
                    <nuxt-link :to="project.src">
                      <span class="link span-gray">{{ project.title }}</span>
                    </nuxt-link>
                  </a>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 xl4 md4 sm4>
          <v-card flat>
            <v-card-title>
              <h3 class="pb-2 footer-title">Follow me on —</h3>
            </v-card-title>
            <v-card-text>
              <v-list dense>
                <v-list-item v-for="social in socials" :key="social.title">
                  <a class="link" target="_blank" :href="social.src">
                    <span class="span-gray">{{ social.title }}</span>
                  </a>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-flex>
        <!--
      <v-flex xs12 xl4 md4>
        <v-card flat pa-4>
          <v-card-title>
            <h3 class="pb-2 footer-title">Follow me on — </h3>
          </v-card-title>
          <v-card-text>
          <v-list dense>
            <v-list-item v-for="social in socials" :key="social.title">
              <a class="link" target="_blank" :href="social.src">
                <span class="span-gray">{{ social.title }}</span>
              </a>
            </v-list-item>
          </v-list>
          </v-card-text>
        </v-card>
      </v-flex>

      -->
      </v-layout>
    </v-card>
     </v-flex>
  </div>
</template>

<script>
export default {
  data() {
    return {
      socials: [
        { title: "Linkedin", src: "https://www.linkedin.com/in/din-ashkenazi-622b89141/" },
        { title: "Dribbble", src: "https://dribbble.com/DinAshkenazi" },
        { title: "Instagram", src: "https://www.instagram.com/dinashkenazi/" },
      ],
      projects: [
        { title: "Home", src: "/" },
        { title: "About me", src: "/About" },
        { title: "Contact", src: "/Contact" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
