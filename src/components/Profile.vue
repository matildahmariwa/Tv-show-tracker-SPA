<template>
    <div>
<h3>These are your subscriptions</h3>
    <h3>Click here to receive notifications about any releases</h3>
    <button id="subscribe" @click="subscribe">Subscribe</button>
    </div>
</template>
<script>
    import { mapGetters } from "vuex";
    export default {
        computed: {
            // map `this.user` to `this.$store.getters.user`
            ...mapGetters({
                user: "user"
            })
        },
        methods:{
           subscribe(){
               firebase.messaging.requestPermission()
           }
        }
    };
</script>

<style >
   #subscribe{
       background-color: dodgerblue;
       color: white;
       height: 46px;
       width: 110px;
       margin-left: 20px;
   }
</style>
