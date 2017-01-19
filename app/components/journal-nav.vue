<template>
  <aside class="menu">
    <menu-post
      :key="post._id"
      v-for="(post,index) in posts"
      :post="post"
      :last="posts.length == (index+1)"
    ></menu-post>
    <a @click="handle_add()">+ root</a>
  </aside>
</template>

<script>
  import menuPost from '~components/menu-post.vue'

  export default {
    computed: {
      posts () {
        let posts = this.$store.getters['posts/root']

        console.log('root', posts)

        return posts
      }
    },
    components: {
      'menu-post': menuPost
    },
    methods: {
      handle_add (parent_id) {
        console.log(parent_id)
        this.$store.dispatch('posts/createPost', {parent_id})
      }
    }
  }
</script>