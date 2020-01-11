<template>
    <nav>
        <div class="container">

                    <template v-if="user.loggedIn">
                        <div class="nav-item">{{user.data.displayName}}</div>
                        <li class="nav-item">
                            <a class="nav-link" @click.prevent="signOut">Sign out</a>
                        </li>
                    </template>
                    <template v-else>
                        <li class="nav-item">
                            <router-link to="login" class="nav-link">Login</router-link>
                        </li>

                    </template>

        </div>
    </nav>
</template>
<script>
    import { mapGetters } from "vuex";
    import firebase from "firebase";
    export default {
        computed: {
            ...mapGetters({
// map `this.user` to `this.$store.getters.user`
                user: "user"
            })
        },
        methods: {
            signOut() {
                firebase
                    .auth()
                    .signOut()
                    .then(() => {
                        this.$router.replace({
                            name: ""
                        });
                    });
            }
        }
    };
</script>
