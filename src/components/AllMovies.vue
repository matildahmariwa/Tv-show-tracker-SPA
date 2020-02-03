<template>
    <div>
        <div class="grid-x intro">
            <div class="cell large-6 medium-8 small-12 one">

                <p class="description">

                    <span class="movie-name">SEE</span> <br>

                    An american drama action created by Sam levinson <br>
                    A virus has decimated humankind. Those who survived <br> emerged blind. Centuries later when twins
                    are born with
                    <br>the mythic ability to a threatened queen.
                </p>
                <button id="btn-1">WATCH</button>
                <button id="btn-2">TRAILERS</button>
            </div>
            <div class="cell large-6 medium-8 small-12 two">
                <img style="margin-left: 5px"
                     src="https://cdn2.glamour.es/uploads/images/thumbs/es/glam/4/s/2019/37/2_minutos_jason_momoa_increible_trailer_see_4344_620x620.jpg">

            </div>
        </div>
        <div class="search">
            <h1>All movies</h1>
            <p>Search for movie here</p>
            <input type='text' v-model="search">
            <div class="container">
            <div class="grid-x movies container">
            <div v-for="item in filteredMovie" :key="item.id" class="cell medium-3 small-12 large-3">
                    <div class="cell medium-3 small-12 large-3">
                        <div class="card">
                            <div class="card-body">
                                <div class="card-section">
                                <img v-bind:src="item.cover_image" >
                                {{ item.name }}<br/>
                                    <i class="fas fa-star"></i>  {{ item.rating }}<br/>
                                    {{ item.genre }}<br/>

                                    <p> <router-link :to="{ name: 'item_show', params: { id: item.id }}">View details</router-link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            </div>
        </div>
    </div>
</template>
<script>
    export default {

        data() {
            return {
                search: '',
                results: '',
            }
        },
        name: 'app',
        created() {
            this.$store.dispatch('setMovies')
        },
        components: {},
        computed: {
            items() {
                return this.$store.getters.getMovies
            },
            filteredMovie: function () {
                let self = this;
                return this.items.filter(function (item) {
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
    .intro {
        background-color: #000508;
        color: white;

        .one {
            color: white;

            button {
                color: white;

            }

            .logo {

            }

            #btn-1 {
                background-color: white;
                color: black;
                height: 32px;
                width: 101px;
                letter-spacing: 3px;
                margin-left: 141px;
                margin-right: 30px;
            }

            #btn-2 {
                height: 32px;
                width: 101px;
                background-color: turquoise;
            }

        }

        two {
            overflow: hidden;
        }

        .description {
            margin-top: 140px;
            margin-left: 141px;

            .movie-name {
                font-size: 39px;
            }
        }


    }
    .card {
        box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1) !important;
        border: none;
        width: 300px;
    }
.fas{
    color: #85C1E9;
}

</style>
