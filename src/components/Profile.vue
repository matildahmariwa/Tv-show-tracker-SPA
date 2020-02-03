<template>
    <div>
        <h3>These are your subscriptions</h3>
        <h3>Click here to receive notifications about any releases</h3>

        <template v-if="user.subcribed">
            <button class="subscribe" @click="subscribe">Subscribe</button>
        </template>
        <template v-else>
            <button class="subscribe" @click="Unsubscribe">UnSubscribe</button>
        </template>


    </div>
</template>
<script>
    import {mapGetters} from "vuex";
    import firebase from 'firebase';
    import 'firebase/messaging'
    import {db} from '../config/db'

    export default {
        data() {
            return {}
        },
        computed: {
            user() {
                return this.$store.state.user;
            },
            // ...mapGetters({
            //     user: "user"
            // })
        },

        methods: {
            subscribe() {
                this.$store.dispatch('setSubscribed', true)
            },
            methods: {
                //     Unsubscribe: function (id) {
                //         if (id !== null && id !== undefined) {
                //             db.collection("subscribers").where('id', '==', id).get()
                //                 .then(doc => {
                //                     doc.forEach(item => {
                //                         user.ref.delete().then(() => {
                //                             console.log('Movie successfully deleted')
                //
                //                         })
                //                     })
                //                 }).catch(function (error) {
                //                 this.error = error
                //             })
                //         } else {
                //             this.error = 'Invalid ID'
                //         }
                //     }
                // }
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
