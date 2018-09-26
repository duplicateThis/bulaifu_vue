import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const home = r => require.ensure([], () => r(require('../pages/home.vue')), 'home')

export default new Router({
    // mode: 'history',
    routes: [
        {path: '/', redirect: '/home'},
        {
            name: 'home',
            path: '/home',
            component: home,
            children: [

            ]
        }
    ]
})
