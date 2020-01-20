<template>
    <div>
        <h3>These are your subscriptions</h3>
        <h3>Click here to receive notifications about any releases</h3>
        <button class="subscribe" @click="subscribe">Subscribe</button>
        <button class="subscribe" @click="subscribe">UnSubscribe</button>
    </div>
</template>
<script>
    import {mapGetters} from "vuex";
    import firebase from 'firebase';
    import 'firebase/messaging'
    import {db} from '../config/db'

    export default {
        computed: {
            // map `this.user` to `this.$store.getters.user`
            ...mapGetters({
                user: "user"
            })
        },
        methods: {
            subscribe() {
                    db.collection('subscribers').add({
                        email: firebase.auth().currentUser.email,
                        displayName: firebase.auth().currentUser.displayName,
                    });
                alert('You can now receive notifications!');
            }
        }
    }
</script>

<style>
    .subscribe {
        background-color: dodgerblue;
        color: white;
        height: 46px;
        width: 110px;
        margin-left: 20px;
    }
</style>
