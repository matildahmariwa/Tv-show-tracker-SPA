<template>
    <div>

        <div class="search">
            <h1>All movies</h1>
            <p>Search for movie here</p>
            <input type='text' v-model="search">

    <div  v-for="item in filteredMovie" :key="item.id">
        <img v-bind:src="item.cover_image" style="height:100px;width: 100px">

        {{ item.name }}<br/>

<!--        <router-link :to="{ name: 'item_show', params: { id: item.id }}">read  more</router-link>-->

        <small >Delete</small>
        <hr />
    </div>
    </div>
    </div>
</template>
<script>

    export default {

        data () {
            return {
                search: '',
                results:'',
            }
        },
        name: 'app',
        created() {
            this.$store.dispatch('setMovies')
        },
        components: {


        },
        computed:{
            items(){
                return this.$store.getters.getMovies
            },
            filteredMovie:function(){
                let self= this;
                return this.items.filter(function(item){
                    return item.name.toLowerCase().indexOf(self.search.toLowerCase()) >= 0
                        || item.cast.toLowerCase().indexOf(self.search.toLowerCase()) >= 0
                        || item.genre.toLowerCase().indexOf(self.search.toLowerCase()) >= 0;
                    }
                )
            }

        }

    }
</script>
<style lang="scss">

</style>
