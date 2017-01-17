<template>
  <div>
    <template v-if="root">
      <p class="menu-label">
        {{post.title}}
      </p>

      <ul v-if="post.children" class="menu-list">
        <menu-post
          v-for="(child, index) in post.children"
          :post="child"
          :root="false"
          :last="post.children.length == (index + 1)"
        ></menu-post>
        <a @click="handle_add(post._id)">+ {{post._id}}</a>
      </ul>
    </template>
    <template v-else-if="post.children">
      <li>
        <a>{{post.title}}</a>
        <ul class="menu-list">
          <menu-post
            v-for="(child, index) in post.children"
            :post="child"
            :root="false"
            :last="post.children.length == (index + 1)"
          ></menu-post>
          <a @click="handle_add(post._id)">+ {{post._id}} </a>
        </ul>
      </li>
    </template>
    <template v-else>
      <li><a>{{post.title}} - {{post._id}} {{post}}</a></li>
      <li v-if="editable"><a v-if="last" @click="handle_add(post._id)">Add?</a></li>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'menu-post',
    props: {
      post: {},
      root: {
        default: true
      },
      last: {}
    },
    computed: {
      editable () {
        return (this.$store.state.current_user.email != undefined)
      }
    },
    methods: {
      handle_add (parent_id) {
        console.log(parent_id)
        this.$store.dispatch('posts/createPost', {parent_id})
      }
    }
  }
</script>

<style rel="stylesheet/scss">
  .test {

  }
</style>