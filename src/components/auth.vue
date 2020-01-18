<template>
    <div>
    <div>
        <button @click="selectedComponent = 'login'" class="bins">Login</button>
        <button @click="selectedComponent = 'signUp'" class="bins">Sign Up</button>
    </div>
    <div class="d-flex justify-content-center">
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
