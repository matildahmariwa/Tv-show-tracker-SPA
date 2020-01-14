<template>
    <div>
        <div>
            <form>
                <input type="text" placeholder="Enter movie name" name="name" v-model="newItem.name"> <br>
                <input type="text" placeholder="Enter genre" name="genre" v-model="newItem.genre"><br>
                <input type="text" placeholder="Enter rating" name="rating" v-model="newItem.rating"><br>
                <textarea name="cast" id="" cols="30" rows="10" placeholder="enter cast"
                          v-model="newItem.cast"></textarea>
                <br>
                <textarea name="reviews" cols="30" rows="10" placeholder="enter reviews"
                          v-model="newItem.reviews"></textarea>
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
                newItem: {}
            }
        },
        methods: {
            submitItems() {
                this.$store.dispatch('adding', this.newItem)
                // eslint-disable-next-line no-console
                // console.log(this.newItem)
            }

        }
    }


</script>
