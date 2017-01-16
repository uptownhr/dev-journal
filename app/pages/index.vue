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
    async data () {
      /*let data = await request.get('http://localhost:3000/test')
      console.log('wtfzz', data)*/
      return {
        test: 'asdf'
      }
    },
    components: {
      'journal-nav': journalNav
    }
  }
</script>