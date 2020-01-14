<!--<template>-->
<!--  <div class="container">-->

<!--            <div v-if="error" class="alert alert-danger">{{error}}</div>-->
<!--            <form @submit.prevent="submit">-->
<!--              <div class="form-group row">-->
<!--                <label for="email">Email</label>-->

<!--                <div class="col-md-6">-->
<!--                  <input id="email" type="email" name="email" value v-model="form.email" />-->
<!--                </div>-->
<!--              </div>-->

<!--              <div>-->
<!--                <label for="password">Password</label>-->

<!--                <div>-->
<!--                  <input id="password" type="password"  name="password" required v-model="form.password"/>-->
<!--                </div>-->
<!--              </div>-->


<!--                <div class="col-md-8 offset-md-4">-->
<!--                  <button type="submit" class="btn btn-primary">Login</button>-->
<!--                </div>-->

<!--            </form>-->
<!--          </div>-->

<!--</template>-->

<!--<script>-->
<!--  import firebase from "firebase";-->
<!--  export default {-->
<!--    data() {-->
<!--      return {-->
<!--        form: {-->
<!--          email: "",-->
<!--          password: ""-->
<!--        },-->
<!--        error: null-->
<!--      };-->
<!--    },-->
<!--    methods: {-->
<!--      submit() {-->
<!--        firebase-->
<!--                .auth()-->
<!--                .signInWithEmailAndPassword(this.form.email, this.form.password)-->
<!--                // eslint-disable-next-line no-unused-vars-->
<!--                .then(data => {-->
<!--                  this.$router.replace({ name: "Dashboard" });-->
<!--                })-->
<!--                .catch(err => {-->
<!--                  this.error = err.message;-->
<!--                });-->
<!--      }-->
<!--    }-->
<!--  };-->
<!--</script>-->
