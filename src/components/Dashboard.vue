<template>
    <div class="container">
        <div>


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
