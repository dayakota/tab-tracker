<template>
  <div class="Register">
    <h1>Register</h1>
    <input type="email" v-model="email" name="email" placeholder="email" />
    <br/>
    <input type="password" v-model="password" name="password" placeholder="password" />
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'HelloWorld',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    register () {
      console.log(`Clicked ${this.email} ${this.password}`)
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
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
