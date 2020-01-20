<template>
    <div>
    <div>
        <div class="container">
            <div class="grid-x movies container">
                <div v-for="item in items" :key="item.id" class="cell medium-3 small-12 large-12">
                    <div class="cell medium-6 small-12 large-12">
                        <div class="card" style="width: 100%">
                            <div class="card-body">
                                <div class="card-section">
                                    <img v-bind:src="item.cover_image" style="height:120px" >
                                    {{ item.name }}<br/>
                                    {{ item.rating }}<br/>
                                    {{ item.description }}<br/>
                                    <button id="delete" @click="deleteMovie">Delete</button>
                                </div>

                            </div>

                        </div>
                        <div class="admin-buttons">
<!--                            <button id="delete" @click="deleteMovie">Delete</button>-->
                            <button id="edit">Edit</button>
                        </div>
                    </div>

                </div>
            </div>
            <!--                <router-link :to="{ name: 'item_show', params: { id: item.id }}">View details</router-link>-->

        </div>
    </div>
    </div>
</template>

<script>
    import { db } from '../config/db';
    export default {
        name: "adminMovies",
        created() {
            this.$store.dispatch('setMovies')
        },
        computed: {
            items() {
                return this.$store.getters.getMovies
            }
        },
        methods: {
            deleteMovie: function (id) {
                if (id !== null && id !== undefined) {
                    db.collection("movies").doc(id).delete().then(function () {
                        console.log('Movie successfully deleted')
                    }).catch(function (error) {
                        this.error = error
                    })
                } else {
                    this.error = 'Invalid ID'
                }
            }
        }
    }
</script>

<style scoped>
    #delete{
        background-color: #E74C3C ;
        height: 33px;
        width: 69px;
        margin-left: 20px;
        color: white;
        border-radius: 5px
    }
    #edit{
        background-color: #85C1E9 ;
        height: 33px;
        width: 69px;
        margin-left: 20px;
        color: white;
        border-radius: 5px;
    }
    .admin-buttons{
        margin-bottom: 5px;
    }

</style>

