<template>

<div id="app">

      <div  v-for="item in this.$store.getters.getMovies" :key="item.name">
        {{ item.name }}<br /><br /><small >Delete</small>
        <hr />
      </div>
</div>

</template>

<script>


  export default {
    name: 'app',
    beforeCreate: function () {
      this.$store.dispatch('setMovies')
    },
    components: {

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
