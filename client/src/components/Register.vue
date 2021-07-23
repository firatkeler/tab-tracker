<template>
  <v-layout column align-center justify-center>
      <v-container class="col-6 main">
        <v-row>
          <v-col
            cols="12"
          >
            <div class="white elevation-2">
              <v-toolbar flat dense class="cyan" dark>
                <v-toolbar-title>Register</v-toolbar-title>
              </v-toolbar>
              <v-container fill-height fluid class="col-9">
                <v-row
                  align="center"
                  justify="center"
                >
                  <v-col cols="12">
                    <v-text-field type="email" v-model="email" name="email" placeholder="email" />
                  </v-col>
                </v-row>
                <v-row
                  align="center"
                  justify="center"
                >
                  <v-col cols="12">
                    <v-text-field type="password" v-model="password" name="password" placeholder="password" />
                  </v-col>
                </v-row>
                <v-row
                  align="center"
                  justify="center"
                >
                  <v-col cols="12">
                    <div class="error" v-html="error"></div>
                  </v-col>
                </v-row>
                <v-row
                  align="center"
                  justify="center"
                >
                  <v-col cols="12">
                    <v-btn @click="register">Register</v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </div>
          </v-col>
        </v-row>
      </v-container>
  </v-layout>
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
  .main {
    border: 1px solid gray;
  }
  .error {
    color: red;
  }
</style>
