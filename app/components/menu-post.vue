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
        </ul>
      </li>
    </template>
    <template v-else>
      <li><a>{{post.title}}</a></li>
      <li><a v-if="last">Add</a></li>
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
    }
  }
</script>

<style rel="stylesheet/scss">
  .test {

  }
</style>