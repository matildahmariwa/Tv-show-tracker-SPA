<template>
    <div>
        <div>
            <form>
                <input type="text" placeholder="Enter movie name" name="name" v-model="form.name"> <br>
                <input type="text" placeholder="Enter genre" name="genre" v-model="form.genre"><br>
                <input type="text" placeholder="Enter rating" name="rating" v-model="form.rating"><br>
                <textarea name="cast" id="" cols="30" rows="10" placeholder="enter cast"
                          v-model="form.cast"></textarea>
                <br>
                <textarea name="reviews" cols="30" rows="10" placeholder="enter reviews"
                          v-model="form.reviews"></textarea>
                <br>
            </form>
            <button v-on:click="submitItems">Submit</button>



        </div>
    </div>
</template>

<script>

    export default {

        data() {
            return {
                form: {}
            }
        },
        methods: {
            submitItems() {
                this.$store.dispatch('add',{
                    items:{
                        name: this.form.name,
                        genre: this.form.genre,
                        rating: this.form.rating,
                        cast: this.form.cast,
                        reviews: this.form.reviews,
                    }
                });
                // eslint-disable-next-line no-console
                console.log(this.form.name)
                this.form = {}
            }

        }
    }


</script>
