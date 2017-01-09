<template>
    <div class="container is-fluid">
        <top-nav :expanded="expanded" @menu_toggled="handle_toggle_menu"></top-nav>

        <nuxt />
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