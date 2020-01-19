<template>


<div id="app">
    <navbar></navbar>
    <router-view></router-view>

</div>

</template>

<script>
import navbar from './Navbar'

  export default {
    name: 'app',
    created() {
      this.$store.dispatch('setMovies')
    },
    components: {
     navbar,


    },
    computed:{
      items(){
        return this.$store.getters.getMovies
      },

    }

  }
</script>

<style>

</style>
