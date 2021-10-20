import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import home from '../pages/home.vue'
import profil from '../pages/profil.vue'
import motivation from '../pages/motivation.vue'
import contact from '../pages/contact.vue'
import beer from '../pages/beer.vue'


const routes = [ 
    {
        path: '/beer',
        component: beer

    },

   
    {
        path: '/home',
        component: home

    },

    {
        path: '/profil',
        component: profil

    },

    {
        path: '/motivation',
        component: motivation

    },
    {
        path: '/contact',
        component: contact

    }

]

const router = new VueRouter({
    mode:'history',
    routes: routes
})

export default router