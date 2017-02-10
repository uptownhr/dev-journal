<template>
  <div class="columns is-fluid">
    <div class="column is-3">
      <journal-nav></journal-nav>
    </div>
    <div class="column">
      <h1 class="title">Title: {{post.title}}</h1>
      <input class="input" v-model="post.title"><br/><br/>

      <h1 class="title is-4">Body</h1>
      <div class="columns">
        <div class="column is-6">
          <textarea class="textarea" v-model="post.body"></textarea>
        </div>
        <div class="column is-6">
          <div class="content" v-html="marked"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" rel="stylesheet/scss">

</style>

<script type="text/ecmascript-6">
  import { mapGetters } from 'vuex'
  import request from 'axios'
  import journalNav from '~components/journal-nav.vue'
  import marked from 'marked'

  export default {
    name: 'index',
    head: {
      title: 'Home Page'
    },
    data () {
      return {
        post: {}
      }
    },
    computed: {
      ...mapGetters('posts', ['latest']),
      marked () {
        //let post = JSON.parse(JSON.stringify(this.post))
        return marked(this.post.body || '', { sanitize: true })
      }
    },
    fetch ({store, params}) {
      return store.dispatch('posts/getPosts')
        .then( res => {
          console.log(this.latest)
          this.post = this.latest
        })
    },
    mounted () {
      this.post = { ... this.latest }
    },
    components: {
      'journal-nav': journalNav
    }
  }
</script>