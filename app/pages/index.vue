<template>
  <div class="columns is-fluid">
    <div class="column">
      <journal-nav></journal-nav>
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
  import journalNav from '~components/journal-nav.vue'


  export default {
    name: 'index',
    head: {
      title: 'Home Page'
    },
    fetch ({store, params}) {
      return store.dispatch('posts/getPosts')
    },
    computed: {
      posts () {
        return this.$store.state.posts.posts
      }
    },
    components: {
      'journal-nav': journalNav
    }
  }
</script>