<template>
    <aside class="menu">
        wtf
        <menu-post v-for="post in posts" :post="post"></menu-post>

        ====
        <br>


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
</template>

<script>
    import menuPost from '~components/menu-post.vue'

    export default {
        data () {
            return {
                posts: [
                    {
                        title: 'Exploring Vue',
                        children: [
                            {
                                title: 'Vue Component',
                                children: [
                                    {
                                        title: 'Interesting...',
                                        children: [
                                            {
                                                title: 'Vue Component',
                                                children: [
                                                    {
                                                        title: 'Interesting...'
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        components: {
            'menu-post': menuPost
        }
    }
</script>