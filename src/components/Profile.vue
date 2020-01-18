<template>
<h3>These are your subscriptions</h3>
</template>
<script>
    import { mapGetters } from "vuex";
    export default {
        computed: {
            // map `this.user` to `this.$store.getters.user`
            ...mapGetters({
                user: "user"
            })
        }
    };
</script>
