<template>
    <v-layout column>
      <v-flex xs6 offset-xs3>
        <panel title="Register">
          <form 
            name="tab-tracker-form"
            autocomplete="off">
            <v-text-field
              label="Email"
              v-model="email"
            ></v-text-field>
            <br>
            <v-text-field
              label="Password"
              type="password"
              v-model="password"
              autocomplete="new-password"
            ></v-text-field>
          </form>
          <br>
          <div class="danger-alert" v-html="error" />
          <br>
          <v-btn
            dark
            class="cyan"
            @click="register">
            Register
          </v-btn>
        </panel>
      </v-flex>
    </v-layout>
  </template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
/*      //Implemented using Promises
        AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      .then(function (response) {
        console.log('Received response');
        console.log(response);
      })
      .catch(function (error) {
        console.log('Error occured');
        console.log(error);
      }) */
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password});
        } catch (error) {
          this.error = error.response.data.error 
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
