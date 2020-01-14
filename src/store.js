import Vue from "vue";
import Vuex from "vuex";
import { db } from './config/db';
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        user: {
            loggedIn: false,
            data: null
        },
        movies:null,
        newMovie:''
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
        add({newItem}) {

            this.$firebaseRefs.db.ref('movies').push(newItem);
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

        adding({commit}, {newItem}) {
            commit('add', newItem)
        }
    }
});
