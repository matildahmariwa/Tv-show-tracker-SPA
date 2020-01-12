import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '../components/Login';
import Login from '../components/Dashboard';
import addMovie from '../components/addMovie'

Vue.use(Router);

const router= new Router({
    mode:'history',
    routes:[
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
    ]

});
export default router
