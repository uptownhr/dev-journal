<template>
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

</template>
<style lang="scss" rel="stylesheet/scss">

</style>

<script type="text/ecmascript-6">
    import request from 'axios'

    export default {
        head: {
            title: 'Home Page'
        },
        async data ({params}) {
            let data = await request.get('http://localhost:3000/test')

            return {
                test: data.data
            }
        }
    }
</script>