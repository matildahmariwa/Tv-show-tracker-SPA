<template>
    <div class="search">
        <h1>All movies</h1>
        <p>Search for movie here</p>
        <input type='text' v-model='query' @keyup='getResult(query)'>
        <div v-for='result in results' :key='result.id'>
            <p>{{result.title}}</p>
            <img v-bind:src="'http://image.tmdb.org/t/p/w500/' + result.poster_path" width='100px'>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        name: 'movies',
        data () {
            return {
                query: '',
                results:'',
            }
        },
        methods: {
            getResult(query) {
                axios.get('https://api.themoviedb.org/3/tv/1?api_key=d929bd727f8c7acba3e05c6348561228&language=en-US&append_to_response=' + this.query)
                    .then(response => console.log(response));

            }

        }
    }
</script>
