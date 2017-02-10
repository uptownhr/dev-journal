<template>
  <div>
    <template v-if="root">
      <router-link :to="`/post/${post.title}/${post._id}`" class="menu-label">{{post.title}}</router-link>

      <ul v-if="post.children" class="menu-list">
        <menu-post
          :key="child._id"
          v-for="(child, index) in post.children"
          :post="child"
          :root="false"
          :last="post.children.length == (index + 1)"
        ></menu-post>
        <a v-if="loggedIn" @click="handle_add(post._id)">+</a>
      </ul>
    </template>
    <template v-else-if="post.children.length > 0">
      <li>
        <a>{{post.title}}</a>
        <ul class="menu-list">
          <menu-post
            :key="child._id"
            v-for="(child, index) in post.children"
            :post="child"
            :root="false"
            :last="post.children.length == (index + 1)"
          ></menu-post>
          <a v-if="loggedIn" @click="handle_add(post._id)">+</a>
        </ul>
      </li>
    </template>
    <template v-else>
      <li><a>{{post.title}}</a></li>
      <li v-if="loggedIn">
        <ul>
          <li>
            <a @click="handle_add(post._id)">+</a>
          </li>
        </ul>
      </li>
    </template>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'


  export default {
    name: 'menu-post',
    props: {
      post: {
        children: []
      },
      root: {
        default: true
      },
      last: {}
    },
    computed: {
      editable () {
        return (this.$store.state.current_user.email != undefined)
      },
      ...mapGetters([
        'loggedIn'
      ])
    },
    methods: {
      handle_add (parent_id) {
        this.$store.dispatch('posts/createPost', {parent_id})
      }
    }
  }
</script>

<style rel="stylesheet/scss">
  .test {

  }
</style>