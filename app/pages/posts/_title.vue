<template>
    <div>{{test}}</div>
</template>

<script>
    export default {
        computed: {
            test () {
                return this.$route.params.title
            }
        }
    }
</script>