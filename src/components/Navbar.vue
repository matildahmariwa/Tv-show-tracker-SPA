<template>
    <div>

<!--        <div class="title-bar" data-responsive-toggle="example-menu" data-hide-for="medium">-->
<!--            <button class="menu-icon" type="button" data-toggle="example-menu"></button>-->
<!--            <div class="title-bar-title">Menu</div>-->
<!--        </div>-->
        <template class="top-bar" id="example-menu">
            <div class="top-bar-left">

                <ul class="dropdown menu" data-dropdown-menu>
                    <li><button><router-link to="/">Home</router-link></button></li>
                    <li>
                        <router-link to="">Search movies</router-link>
                    </li>

                    <template v-if="user.loggedIn">-->
                                       <div class="nav-item">{{user.data.displayName}}</div>
                                   <li> <button @click.prevent="signOut" style="color:white">Sign out</button></li>
                                   </template>
                    <template v-else>
                    <li><router-link to="/auth">Login</router-link></li>
                    </template>
                    <li><button><router-link to="/admin">Admin</router-link></button></li>

                </ul>
            </div>
<!--            end of navigation-->

        </template>

    </div>


</template>

<script>
    import { mapGetters } from "vuex";
    import firebase from "firebase";
export default {
 computed:{
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
                        name: "auth"
                    });
                });
        }
    }
};

</script>
<style lang="scss">
    #logo{
        float:left;


        color:white !important;
    }
    ul{
        background-color:#000508;
        color:white;
        height:61px;
        color: white;
        padding-left: 768px;

        li{
            display:inline-block;
            padding-right: 24px;
            padding-top: 12px;
            float:right;
            a{
                color:white;
            }

        }
    }


</style>
