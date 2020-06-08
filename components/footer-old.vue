<template>
  <div>
    <v-divider></v-divider>
    <v-layout wrap>
      <v-flex xs12 xl4 md4>
        <v-card flat pa-4>
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
            <span>E:</span
            ><span class="footer-span-contact">DinAshkenazi@gmail.com</span
            ><br />
            <span>P:</span
            ><span class="footer-span-contact">+972 542221666</span>
            <div>
              <img height="65px" src="/logo.png" />
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 xl4 md4>
        <v-card flat pa-4>
          <v-card-title>
            <h3 class="pb-2 footer-title">Latest Projects —</h3>
          </v-card-title>
          <v-card-text>
            <v-list dense>
              <v-list-item v-for="project in projects" :key="project.title">
                <a target="_blank">
                  <nuxt-link :to="project.src">
                    <span  class="link span-gray">{{ project.title }}</span>
                  </nuxt-link>
                </a>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 xl4 md4>
        <v-card flat pa-4>
          <v-card-title>
            <h3
              class="pb-2 footer-title
"
            >
              Follow me on —
            </h3>
          </v-card-title>
          <v-list dense>
            <v-list-item v-for="social in socials" :key="social.title">
              <a class="link" target="_blank" :href="social.src">
                <span class="span-gray">{{ social.title }}</span>
              </a>
            </v-list-item>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      socials: [
        { title: "Dirbble", src: "https://www.behance.com" },
        { title: "Instagram", src: "https://www.behance.com" },
        { title: "Behance", src: "https://www.behance.com" }
      ],
      projects: [
        { title: "Home", src: "/" },
        { title: "About me", src: "/About" },
        { title: "Contact", src: "/Contact" },
        ]
    };
  }
};
</script>

<style lang="scss" scoped>
.v-card__subtitle,
.v-card__text {
  font-size: inherit !important;
}

</style>
