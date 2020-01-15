<template>
    <div class="container">
        <div>

            <router-link :to="{ name: 'Add' }" class="nav-link">Add Item</router-link>
            <h1>Movies</h1>


        </div>

    </div>
</template>
<script>
    import { mapGetters } from "vuex";
    export default {
        computed: {
            ...mapGetters({
                user: "user"
            })
        }
    };
</script>
