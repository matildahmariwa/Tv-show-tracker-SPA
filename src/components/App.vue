<template>

    <div id="app">
        <navbar></navbar>
        <router-view></router-view>

    </div>

</template>

<script>
    import navbar from './Navbar'

    export default {
        name: 'app',
        created() {
            this.$store.dispatch('setMovies')
        },
        components: {
            navbar,
        },
        computed: {
            items() {
                return this.$store.getters.getMovies
            },

        }

    }
</script>

<style>
    .inputs {
        border: none !important;
        box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1) !important;
        height: 36px !important;
        margin-bottom: 3px !important;
        margin-top: 20px !important;
        width: 500px !important;
    }

    #submit {
        width: 125px !important;
        height: 45px;
        margin-top: 7px;
        background-color: turquoise;
        border-radius: 5px;
        box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);
    }
</style>
