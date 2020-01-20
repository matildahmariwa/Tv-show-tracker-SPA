<template>
    <div>
        <div class="grid-container">
        <form @submit.prevent="login" >

            <div class="textbox">
                <i class="icon-envelope"></i>
                <input type="email"  placeholder="Email" name="email" class="inputs" v-model="form.email">
            </div>
            <input type="hidden" name="_token">
            <div class="textbox">
                <i class="icon-lock" ></i>
                <input type="password"  placeholder="Password" name="password" value="" class="inputs" autocomplete="new-password" v-model="form.password">

            </div>

            <button id="submit">Login</button>

        </form>
    </div>
    </div>
</template>

<script>
    import firebase from 'firebase';
    export default {
        data() {
            return {
                form: {
                    email: "",
                    password: ""
                },
                error: null
            }
        },
        methods: {
            login() {
                firebase
                    .auth()
                    .signInWithEmailAndPassword(this.form.email, this.form.password)
                    .then(data => {
                        this.$router.replace({ name: "profile" });
                    })
                    .catch(err => {
                        this.error = err.message;
                    });
            }
        }
    };


</script>

<style>

</style>
