<template>
    <div>
        <template v-if="root">
            <p class="menu-label">
                {{post.title}}
            </p>

            <ul v-if="post.children" class="menu-list">
                <li v-for="post in post.children">sss</li>
                <menu-post v-for="child in post.children" :post="child" :root="false"></menu-post>
            </ul>
        </template>
        <template v-else-if="post.children">
            <li>
                <a>{{post.title}}</a>
                <ul class="menu-list">
                    <menu-post v-for="child in post.children" :post="child" :root="false"></menu-post>
                </ul>
            </li>
        </template>
        <template v-else>
            <li><a>{{post.title}}</a></li>
        </template>
    </div>
</template>

<script>
    export default {
        props: {
            post: {},
            root: {
                default: true
            }
        },
        name: 'menu-post'
    }
</script>