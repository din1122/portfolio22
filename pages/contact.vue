<template>
  <div>
  <v-flex xl9 md10 sm11 ma-auto class="row-pad">
    <v-layout container wrap class="contact-container">
      <v-flex text-center>
        <v-card height="30vh" flat>
          <v-card-title class="align-center justify-center fill-height">
            <span class="lets-work-text">LETS WORK TOGETER</span>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs11 offset-xs1 xl3 offset-xl0>
        <v-card flat height="150">
          <span class="span-title"> CONTACT</span>
          <h3>Get in Touch let's work together.</h3>
        </v-card>
        <v-card flat height="150">
          <span class="span-title">INFO</span>
          <div>
            <span>Dinashkenazi@gmail.com</span><br />
            <span>+972-54-222-1-666</span><br />
          </div>
        </v-card>
      </v-flex>
      <v-flex xl8 offset-xl1 xs12>
        <v-form id="submit-contact" @submit.prevent="sendEmail">
          <v-row justify="space-around">
            <v-col cols="10" xs="12">
              <p>
                Got a Project ? Drop me a line if you want to work with me on
                something exciting. Big or small. Mobile or web.
              </p>
            </v-col>

            <v-col cols="4">
              <span>Your Name</span>
              <v-text-field
                name="name"
                v-model="name"
                label="What is Your Name?"
              ></v-text-field>
              <span>Service</span>
              <v-select
                name="service"
                v-model="service"
                label="What are you interested in?"
                :items="services"
                solo
              ></v-select>
            </v-col>
            <v-col cols="4">
              <span>Your Email</span>
              <v-text-field
                name="email"
                v-model="email"
                label="What is Your Email Address?"
                type="email"
              ></v-text-field>
              <span>Budget</span>
              <v-select
                name="budget"
                v-model="budget"
                label="what is your budget?"
                :items="budgets"
                solo
              >
              </v-select>
            </v-col>
            <v-col cols="10">
              <span>Message</span>
              <v-text-field
                name="message"
                v-model="message"
                label="What is Your Message?"
              >
              </v-text-field>
            </v-col>
            <v-col cols="10">
              <v-btn type="submit" form="submit-contact">
                <v-icon left>mdi-email</v-icon>
                Send Message</v-btn
              >
            </v-col>
          </v-row>
        </v-form>
      </v-flex>
    </v-layout>
    </v-flex>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      service: "",
      budget: "",
      message: "",
      budgets: [
        "under 500$",
        "500$-2500$",
        "2500$-5000$",
        "5000$-10000$",
        "10000$ or more"
      ],
      services: [
        "Need help with a one-off project",
        "Looking for a long term partnership",
        "Want to hire me full-time",
        "Just wanted to say hi!"
      ]
    };
  },
  methods: {
    sendEmail() {
      const emailData = {
        email: this.email,
        name: this.name,
        budget: this.budget,
        service: this.service,
        message: this.message
      };
      this.$store.dispatch("sendEmail", emailData);
      this.name = "";
      this.email = "";
      this.message = "";
      this.budget = "";
      this.service = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.row-pad{
  padding:150px 0 150px;
}
</style>
