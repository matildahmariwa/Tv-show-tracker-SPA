<template>
    <div class="grid-container">
        <form @submit.prevent="register">
        <input type="name" placeholder="Username" name="name"  class="inputs"  v-model="form.name"> <br>
        <input type="email" placeholder="email" name="email"  class="inputs"  v-model="form.email">
        <input type="password" placeholder="password" name="password"  class="inputs" v-model="form.password">
        <br>
        <button id="submit">Submit</button>
        </form>
    </div>
</template>

<script>
    import firebase from 'firebase';
    export default{
        data() {
            return {
                form: {
                    name: "",
                    email: "",
                    password: ""
                },
                error: null
            }

        },
        methods:{

            register()
            {
                firebase
                    .auth()
                    .createUserWithEmailAndPassword(this.form.email, this.form.password)
                    .then(data => {
                        data.user
                            .updateProfile({
                                displayName: this.form.name
                            })
                            .then(() => {
                                this.$router.replace({ name: "profile" });
                            });
                    })
                    .catch(err => {
                        this.error = err.message;
                    });
            }


        }

    }
</script>

<style >
    form{

    }

</style>
