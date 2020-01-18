<template>


<div id="app">


  <navbar></navbar>

  <router-view></router-view>

      <div  v-for="item in items" :key="item">
        {{ item }}<br /><br /><small >Delete</small>
        <hr />
      </div>




</div>

</template>

<script>
import navbar from './components/Navbar'
import {mapGetters} from "vuex";

  // import {mapState} from "vuex";
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
