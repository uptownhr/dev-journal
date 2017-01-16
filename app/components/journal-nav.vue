<template>
  <aside class="menu">
    <menu-post
      v-for="(post,index) in posts"
      :post="post"
      :last="posts.length == (index+1)"
    ></menu-post>
    <a>+</a>
  </aside>
</template>

<script>
  import menuPost from '~components/menu-post.vue'

  export default {
    computed: {
      posts () {
        return this.$store.getters['posts/posts']
      }
    },
    components: {
      'menu-post': menuPost
    }
  }
</script>