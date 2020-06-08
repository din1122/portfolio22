  
<template>
<v-layout wrap style="height:100vh;">
  <v-flex xs10 ma-auto>
<v-form id="submit-contact" @submit.prevent="sendEmail">
    <v-text-field v-model="name" name="name"></v-text-field>
    <v-text-field  type="email" v-model="email" name="email"></v-text-field>
    <v-text-field v-model="message" name="message"></v-text-field>
    <v-btn type="submmit" form="submit-contact">Submit</v-btn>
</v-form>
</v-flex>
</v-layout>
</template>
<script>
export default {
  data () {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    sendEmail () {
      const emailData = {
        email: this.email,
        name: this.name,
        message: this.message
      }
      this.$store.dispatch('sendEmail', emailData)
      this.name = ''
      this.email = ''
      this.message = ''
    }
  }
}
</script>
<style>

</style>
