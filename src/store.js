import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        user: {
            loggedIn: false,
            data: null
        }
    },
    getters: {
        user(state){
            return state.user
        }
    },
    mutations: {
        Is_logged_in(state, value) {
            state.user.loggedIn = value;
        },
        set_user(state, data) {
            state.user.data = data;
        }
    },
    actions: {
        fetchUser({ commit }, user) {
            commit("is_logged_in", user !== null);
            if (user) {
                commit("set_user", {

                    email: user.email
                });
            } else {
                commit("set_user", null);
            }
        }
    }
});
