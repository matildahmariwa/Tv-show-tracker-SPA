<template>
    <div>
        <div>
            <form >
            <input type="text" placeholder="Enter movie name" v-model="newItem.name"> <br>
            <input type="text" placeholder="Enter genre" v-model="newItem.genre"><br>
            <input type="text" placeholder="Enter rating" v-model="newItem.rating"><br>
            <textarea name="" id="" cols="30" rows="10" placeholder="enter cast" v-model="newItem.cast"></textarea> <br>
            <textarea name=""  cols="30" rows="10" placeholder="enter reviews" v-model="newItem.reviews"></textarea> <br>
            <input type="submit" v-on:click="add" >
            </form>
        </div>
    </div>
</template>

<script>
    import { db } from '../config/db';
    export default {
        components: {
            // eslint-disable-next-line vue/no-unused-components
            name: 'AddMovie'
        },
        firebase: {
            movies:db.ref('movies')
        },
        data () {
            return {
                newItem: {
                    name: '',
                    genre: '',
                    rating: '',
                    reviews: '',
                    cast: '',
                }
            }
        },
        methods: {
            add() {
                this.$firebaseRefs.movies.push({
                    name: this.newItem.name,
                    price: this.newItem.genre,
                    rating: this.newItem.rating,
                    reviews: this.newItem.reviews,
                    cast: this.newItem.cast,

                });
                this.newItem.name = '';
                this.newItem.genre = '';
                this.newItem.rating = '';
                this.newItem.reviews= '';
                this.newItem.cast= '';
                this.$router.push('/dashboard')
            }
        }
    }


</script>
