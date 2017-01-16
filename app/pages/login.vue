<template>
    <div class="hero">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">Login</h1>
                <form @submit.prevent="handle_login">

                    <label class="label">Email</label>
                    <p class="control">
                        <input type="text" class="input" v-model="email">
                    </p>

                    <label class="label">Password</label>
                    <p class="control">
                        <input type="text" class="input" v-model="password">
                    </p>

                    <div v-if="error" class="notification is-danger">
                        {{error}}
                    </div>

                    <p class="control">
                        <button class="button">Login</button>
                    </p>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
  const topNav = require('~components/top-nav.vue')

  export default {
    data () {
      return {
        expanded: false,
        email: '',
        password: '',
        error: null
      }
    },
    methods: {
      handle_login () {
        this.$store.dispatch('userLogin', {email: this.email, password: this.password})
          .then( res => {
            this.$router.push('/')
          })
          .catch( err => {
            this.error = err.response.data.error
          })
      }
    },
    components: {
      'top-nav': topNav
    }
  }
</script>