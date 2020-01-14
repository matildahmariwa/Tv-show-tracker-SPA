<template>
    <div class="container">
        <div>

            <router-link :to="{ name: 'Add' }" class="nav-link">Add Item</router-link>
            <h1>Movies</h1>
            <div  v-for="item in state.items" :key="item.id"><v-btn @click="(item.id)">Delete</v-btn>
                {{ item.name }}
            </div>

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
