<template>
    <nav class="nav">
        <div class="nav-left">
            <nuxt-link to="/" class="nav-item">Home</nuxt-link>
            <nuxt-link to="/posts" class="nav-item">Posts</nuxt-link>
            <nuxt-link to="/my-projects" class="nav-item">My Projects</nuxt-link>
            <nuxt-link to="/about-me" class="nav-item">About Me</nuxt-link>
        </div>
        <div class="nav-center"></div>
        <div :class="['nav-right', 'nav-menu', menuExpanded]">
            <a @click="handle_logout" v-if="$store.state.current_user.username" class="nav-item">Logout</a>
            <nuxt-link v-else to="/login" class="nav-item">Login</nuxt-link>
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