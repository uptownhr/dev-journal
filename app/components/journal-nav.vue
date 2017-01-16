<template>
  <aside class="menu">
    <menu-post
      v-for="(post,index) in posts"
      :post="post"
      :editable="editable"
      :last="posts.length == (index+1)"
    ></menu-post>
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
                title: 'Vue Component'
              },
              {
                title: 'Vue Router'
              },
              {
                title: 'Vuex',
                children: [
                  { title: 'Store' }
                ]
              }
            ]
          },
          {
            title: 'Projects',
            children: [
              {
                title: 'Shalendar'
              },
              {
                title: 'Bambee'
              },
              {
                title: 'Hackable'
              },
              {
                title: 'Amplfy'
              },
              {
                title: 'Startuptabs'
              }
            ]
          },
          {
            title: 'Docker How Tos',
            children: [
              {
                title: 'Building a node image'
              },
              {
                title: 'Jwilder Nginx Proxy'
              },
              {
                title: 'Dingy, Docker for Mac'
              }
            ]
          }
        ]
      }
    },
    computed: {
      editable () {
        return (this.$store.state.current_user.email != undefined)
      }
    },
    components: {
      'menu-post': menuPost
    }
  }
</script>