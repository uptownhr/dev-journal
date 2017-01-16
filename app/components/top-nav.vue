<template>
    <nav class="nav">
        <div class="nav-left">
            <nuxt-link to="/" class="nav-item">Home</nuxt-link>
            <nuxt-link to="/posts" class="nav-item">Posts</nuxt-link>
            <nuxt-link to="/my-projects" class="nav-item">My Projects</nuxt-link>
            <nuxt-link to="/about-me" class="nav-item">About Me</nuxt-link>
        </div>
        <div class="nav-center"></div>
        <div @click="handle_toggle_menu" :class="['nav-right', 'nav-menu', menuExpanded]">
            <template v-if="$store.state.current_user.email">
                <nuxt-link @click="handle_toggle_menu" to="/admin" class="nav-item">Admin</nuxt-link>
                <a @click="handle_logout" class="nav-item">Logout</a>
            </template>
            <template v-else>
                <nuxt-link @click="handle_toggle_menu" to="/login" class="nav-item">Login</nuxt-link>
            </template>

        </div>
        <span class="nav-toggle" @click="handle_toggle_menu">
            <span></span>
            <span></span>
            <span></span>
        </span>
    </nav>
</template>

<script>
  export default {
    props: ['expanded'],
    computed: {
      menuExpanded () {
        return this.expanded ? 'is-active' : ''
      }
    },
    methods: {
      handle_toggle_menu () {
        this.$emit('menu_toggled')
      },
      handle_logout () {
        this.$store.dispatch("userLogout")
      }
    }
  }
</script>