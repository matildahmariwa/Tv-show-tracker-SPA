<template>
    <div>
    <nav>
        <div class="container">

<!--                    <div v-if="user.loggedIn">-->
<!--                        <div class="nav-item">{{user.data.email}}</div>-->
<!--                        <li class="nav-item">-->
<!--                            <a class="nav-link" @click.prevent="signOut">Sign out</a>-->
<!--                        </li>-->
<!--                    </div>-->
<!--                    <div v-else>-->
<!--                        <li class="nav-item">-->
<!--                            <router-link to="login" class="nav-link">Login</router-link>-->
<!--                        </li>-->

<!--                    </div>-->

        </div>
    </nav>
    </div>
</template>
<script>
    import { mapGetters } from "vuex";
    import firebase from "firebase";
    export default {
        computed: {
            ...mapGetters({

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
