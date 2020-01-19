import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '../components/Login';
import Login from '../components/Dashboard';
import addMovie from '../components/addMovie'
import movies from '../components/Movies'
import auth from '../components/auth'
import profile from '../components/Profile'
import all from '../components/AllMovies'
import showDetail from "../components/showDetail";

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
            path: '/add',
            name: 'addMovie',
            component: addMovie
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard,

        },
        {
            path: '/movies',
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
