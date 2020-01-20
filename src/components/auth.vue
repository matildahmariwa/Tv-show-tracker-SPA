<template>
    <div>
        <h4 id="welcome">Sign in/Create Account to continue using movie tracker</h4>
    <div class="auth">
        <button @click="selectedComponent = 'login'" class="bins">Login</button>
        <button @click="selectedComponent = 'signUp'" class="bins">Sign Up</button>
    </div>
    <div class="">
        <keep-alive>
            <component :is="selectedComponent"></component>
        </keep-alive>
    </div>
    </div>
</template>

<script>

    import login from '../components/loginForm.vue'
    import signUp from '../components/signUp.vue'
    export default {
        name: 'app',
        components: {
            login,
            signUp,


        },
        data() {
            return {
                selectedComponent: 'login',
                show: false
            }
        }
    }
</script>
<style>
.bins{
    margin-right: 10px;
    margin-top: 7px;
    text-decoration: underline;
    border-radius: 5px;
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);
    margin-left: 52px;
}
    .auth{
        margin-top: 30px;
        margin-left: 100px;
    }
    #welcome{
        margin-top: 13px;
        margin-left: 287px;
        font-weight: bold;
    }

</style>
