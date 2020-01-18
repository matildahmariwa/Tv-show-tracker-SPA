<template>
    <div>
       <ul>
          <h1 id="logo">TV TRACKER</h1>
           <li> <router-link to="/movies">Search movies</router-link></li>
           <li> <router-link to="/add">Add Movie</router-link></li>

           <template v-if="user.loggedIn">
               <div class="nav-item">{{user.data.displayName}}</div>
           <li> <button @click.prevent="signOut">Sign out</button></li>
           </template>
           <template v-else>
           <li><router-link to="/auth">Login</router-link></li>
           </template>
           <li><router-link to="/">Admin</router-link></li>

       </ul>
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
<style scoped>
    #logo{
        float:left;

        padding-top: 5px;
        color:white;
    }
    ul{
        background-color: black;
        color:white;
        /*margin-top: -57px !important;*/
        height:61px;
    }
li{
    display:inline-block;
    padding-right: 24px;
    padding-top: 12px;
    float:right;

}
</style>
