import Vue from 'vue';
import Router from 'vue-router';
import addMovie from '../components/addMovie'
import Login from '../components/loginForm'
import movies from '../components/Movies'
import auth from '../components/auth'
import profile from '../components/Profile'
import all from '../components/AllMovies'
import showDetail from "../components/showDetail";
import admin from "../components/Admin";

Vue.use(Router);

const router= new Router({
    mode:'history',
    routes:[
        {
            path: '/',
            name: 'all',
            component: all
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/admin',
            name: 'admin',
            component: admin
        },

        {
            path: '/add',
            name: 'addMovie',
            component: addMovie
        },

        {
            path: '/movies',
            name: 'movies',
            component: movies,

        },
        {
            path: '/mo',
            name: 'movies',
            component: movies,

        },
        {
            path: '/profile',
            name: 'profile',
            component: profile,

        },
        {
            path: '/auth',
            name: 'auth',
            component: auth,

        },
        {
            path: '/item/:id',
            name: 'item_show',
            component:showDetail,

        },
    ]

});
export default router
