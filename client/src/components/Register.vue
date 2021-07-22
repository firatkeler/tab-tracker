<template>
  <div>
    <h1>Register</h1>
    <input type="email" v-model="email" name="email" placeholder="email" />
    <br>
    <input type="password" v-model="password" name="password" placeholder="password" />
    <br>
    <div class="error" v-html="error"></div>
    <br>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService'
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
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (err) {
        this.error = err.response.data.error
      }
    }
  }
}
</script>

<style scoped>
  .error {
    color: red;
  }
</style>
