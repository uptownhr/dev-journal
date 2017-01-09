<template>
    <section class="section">
        <h1 class="title">Vuex Store</h1>
        <p>Easy way to get started</p>
        <pre>
            npm install vuex
            const Vue = require('vue'),
                  Vuex = require('vuex')

            const store = new Vuex({
               data: {
                  title: 'title'
               }
            })

            new Vue({ store }).$mount('#app')
        </pre>
        {{test}}

        {{$store.state.current_user.name}}
    </section>
</template>
<style lang="scss" rel="stylesheet/scss">

</style>

<script type="text/ecmascript-6">
    import request from 'axios'

    export default {
        head: {
            title: 'Home Page'
        },
        async data ({params}) {
            let data = await request.get('http://localhost:3000/test')

            return {
                test: data.data
            }
        }
    }
</script>