import Vue from "vue";
import Vuex from "vuex";
// import * as firebase from "firebase";
import { db } from './config/db';
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        user: {
            loggedIn: false,
            data: null
        },
        movies:null,
        newMovie:'',

    },
    getters: {
        user(state){
            return state.user
        },

    },
    mutations: {
        Is_logged_in(state, value) {
            state.user.loggedIn = value;
        },
        set_user(state, data) {
            state.user.data = data;
        },
        add({payload}) {

            db.ref('movies').push(payload)
            this.$router.push('/dashboard')
        }
    },
    actions: {
        fetchUser({commit}, user) {
            commit("is_logged_in", user !== null);
            if (user) {
                commit("set_user", {

                    email: user.email
                });
            } else {
                commit("set_user", null);
            }
        },

        adding({commit}, payload) {
            // eslint-disable-next-line no-console

            commit('add', payload)
        }
    }
});
