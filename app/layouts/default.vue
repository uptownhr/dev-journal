<template>
    <div class="container is-fluid">
        <top-nav :expanded="expanded" @menu_toggled="handle_toggle_menu"></top-nav>

        <div class="columns is-fluid">
            <div class="column">
                <aside class="menu">
                    <p class="menu-label">
                        Exploring Vue
                    </p>
                    <ul class="menu-list">
                        <li><a>Vue Component</a></li>
                        <li><a>Vue Router</a></li>
                        <li>
                            <a>Vuex</a>
                            <ul>
                                <li><a>Store</a></li>
                            </ul>
                        </li>
                    </ul>
                    <p class="menu-label">
                        Projects
                    </p>
                    <ul class="menu-list">
                        <li><a>Shalendar</a></li>
                        <li><a>Bambee</a></li>
                        <li><a>Hackable</a></li>
                        <li><a>Amplfy</a></li>
                        <li><a>Startuptabs</a></li>
                    </ul>
                    <p class="menu-label">
                        Docker How Tos
                    </p>
                    <ul class="menu-list">
                        <li><a>Building a node image</a></li>
                        <li><a>Jwilder Nginx Proxy</a></li>
                        <li><a>Dingy, Docker for Mac</a></li>
                    </ul>
                </aside>
            </div>
            <div class="column">
                <nuxt />
            </div>
        </div>
    </div>

</template>

<script type="text/ecmascript-6">
    const topNav = require('~components/top-nav.vue')

    export default {
        name: 'default-layout',
        data: function () {
            return {
                expanded: false
            }
        },
        methods: {
            handle_toggle_menu () {
                this.expanded = !this.expanded
            }
        },
        components: {
            'top-nav': topNav
        }
    }
</script>

<style lang="scss">
    .menu {
        padding-left: 1rem;
    }
</style>