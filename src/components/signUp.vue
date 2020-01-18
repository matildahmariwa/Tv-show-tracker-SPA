<template>
    <div>
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

<style>
    .inputs {
        border: none;
        box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);
        height: 36px;
        width: 208px;
        margin-bottom: 3px;
        margin-top: 20px;
    }
    #submit{
        width: 125px;
        height: 45px;
        margin-top: 7px;
        background-color: turquoise;
        border-radius: 5px;
        box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);
    }
</style>
