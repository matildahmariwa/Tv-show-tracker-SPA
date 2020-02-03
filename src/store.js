import Vue from "vue";
import Vuex from "vuex";

import * as firebase from "firebase";
import { db } from './config/db';

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        movies:'',
       items:'',
        subscribers:'',
        sub:'',

        user:{
            loggedIn: false,
            data: '',
            subscribed:false,
        },
        admin:{
            loggedIn: false,
            data: '',
        }


    },
    getters: {
        user(state){
            return state.user
        },
        admin(state){
            return state.admin
        },
        getMovies(state){
            return state.movies
        },
        getSubscribers(state){
          return state.sub
        }

    },
    mutations: {
        SET_LOGGED_IN(state, value) {
            state.user.loggedIn = value;
        },
        set_user(state, data) {
            state.user.data = data;
        },
        add_items(state, items){
            state.items = items;
            db.collection('movies').add(items)
        },
        set_subscribed(state,status){
            state.user.subscribed = status;
        },
        setMovies(state){

            db.collection('movies').onSnapshot((snapshot) => {
                let items = [];

                snapshot.docs.forEach((doc)=>{
                    // eslint-disable-next-line no-console
                    console.log(doc.data());
                    items.push(doc.data())
                });

                state.movies = items;

            })

        },
        setSubscribers(state){

            db.collection('subscribers').onSnapshot((snapshot) => {
                let subscribers = [];

                snapshot.docs.forEach((doc)=>{
                    // eslint-disable-next-line no-console
                    console.log(doc.data());
                    subscribers.push(doc.data())
                });

                state.sub = subscribers;

            })

        }


    },

    actions: {
        fetchUser({commit}, user) {
            commit("SET_LOGGED_IN", user !== null);
            if (user) {
                commit("set_user", {
                    displayName: user.displayName,
                    email: user.email
                });
            } else {
                commit("set_user", null);
            }
        },
        add({commit},items) {
            commit('add_items', items),
            // eslint-disable-next-line no-console
            console.log(items)

        },
        setMovies({commit}) {
            commit('setMovies')
        },
        setSubscribers({commit}) {
            commit('setSubscribers')
        },
        setSubscribed({commit},status) {
            const messaging = firebase.messaging();
            messaging.requestPermission();
            db.collection('subscribers').add({

                email: firebase.auth().currentUser.email,
                displayName: firebase.auth().currentUser.displayName,
            });

            alert('You can now receive notifications!');
            commit('set_subscribed',status)
        }

    }

});
