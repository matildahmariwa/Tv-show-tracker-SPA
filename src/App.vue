<template>


<div id="app">
  <router-view></router-view>
  <navbar></navbar>

    <h1>This is the main view</h1>
  {{shows}}
      <div  v-for="item in items" :key="item">
        {{ item}}<br /><br /><small >Delete</small>
        <hr />
      </div>
</div>

</template>

<script>
  import navbar from './components/Navbar'
  import {mapState} from "vuex";
  export default {
    name: 'app',
    created() {
      this.$store.dispatch('setMovies')
    },
    components: {
     navbar
    },
    computed:{
      items(){
        return this.$store.getters.getMovies
      },
      ...mapState({
          shows: state=>state.movies
      })
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
