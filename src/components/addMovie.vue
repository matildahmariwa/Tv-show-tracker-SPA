<template>
    <div>
        <div class="form-info">
            <h3>Enter movie information here</h3>
            <form>
                <input type="text" placeholder="Enter movie name" name="name" v-model="form.name"> <br>
                <input type="text" placeholder="Enter genre" name="genre" v-model="form.genre"><br>
                <input type="text" placeholder="Enter rating" name="rating" v-model="form.rating"><br>

                <input type="url"  name="trailer" v-model="form.trailer" placeholder="trailer"><br>
                <textarea name="cast" id="" cols="30" rows="10" placeholder="enter cast"
                          v-model="form.cast"></textarea>
                <br>
                <textarea name="reviews" cols="30" rows="10" placeholder="enter reviews"
                          v-model="form.reviews"></textarea>
                <br>

                <textarea name="description" cols="30" rows="10" placeholder="enter description"
                          v-model="form.description"></textarea>
                <br>

            </form>
            <button v-on:click="submitItems">Submit</button>

        </div>
    </div>
</template>

<script>
    import { uuid } from 'vue-uuid';
    export default {

        data() {
            return {
                form: {}
            }
        },
        methods: {
            submitItems() {
                this.$store.dispatch('add',{
                        id:uuid.v4(),
                        name: this.form.name,
                        genre: this.form.genre,
                        rating: this.form.rating,
                        cast: this.form.cast,
                        reviews: this.form.reviews,
                        cover_image:this.form.cover_image,
                        description:this.form.description,
                        trailer:this.form.trailer

                });
                // eslint-disable-next-line no-console
                console.log(this.form.name)
                this.form = {}
            }

        }
    }


</script>

<style scoped>
    form{
        margin-left: 50px;

    }
    input{
        border: none;
        outline: none;
        color: black;
        -moz-box-shadow: 0 0 3px #ccc;
        -webkit-box-shadow: 0 0 3px #ccc;
        box-shadow: 0 0 3px #ccc;
        height: 43px;
        width: 360px;
        padding: 20px;
        box-sizing: border-box;
        border-radius: 4px;
        margin-top: 30px;
    }
    textarea{
        width: 360px;
        padding: 20px;
        box-sizing: border-box;
        border-radius: 4px;
        margin-top: 7px;
        border: none;
        outline: none;
        color: black;
        -moz-box-shadow: 0 0 3px #ccc;
        -webkit-box-shadow: 0 0 3px #ccc;
        box-shadow: 0 0 3px #ccc;
    }
    button{
        width: 125px;
        height: 45px;
        margin-top: 5px;
        background-color: turquoise;
        text-transform: uppercase;
        letter-spacing: 6px;
        border-radius: 15px !important;
        margin-left: 117px !important;
        border: none;
        box-shadow: 0 0 3px #ccc;
    }
    .form-info{
        margin-bottom: 20px;
    }
</style>
