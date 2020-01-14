import Vue from "vue";
import Vuex from "vuex";
// import * as firebase from "firebase";
import { db } from './config/db';
Vue.use(Vuex);
export default new Vuex.Store({
    state: {

        movies:[],
       items:'',

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
        add_items(state, items){
            state.items = items;
            db.ref('movies').push(items)
        },


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

        add({commit},items) {
            commit('add_items', items)
            // eslint-disable-next-line no-console
            console.log(items)

        }
    }
});
