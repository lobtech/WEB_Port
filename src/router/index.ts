import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
const routes = [
    {
        name: 'home',
        path: '/',
        component: () => import('../views/home/index.vue'),
        meta: {
            keepAlive: false,
            showFooter: true,
            transition: 'slide-right',
        },
    },
    {
        name: 'comingSoon',
        path: '/comingSoon',
        component: () => import('../views/comingSoon/comingSoon.vue'),
        meta: {
            keepAlive: false,
            showFooter: true,
            transition: 'slide-right',
        },
    },
    {
        name: 'airdrop',
        path: '/airdrop',
        component: () => import('../views/airdrop/airdrop.vue'),
        meta: {
            keepAlive: false,
            showFooter: true,
            transition: 'slide-right',
        },
    },
    {
        name: 'egg',
        path: '/egg',
        component: () => import('../views/egg/eggLncubator.vue'),
        meta: {
            keepAlive: false,
            showFooter: true,
            transition: 'slide-right',
        },
    },
    {
        name: 'test',
        path: '/test',
        component: () => import('../views/test/index.vue'),
        meta: {
            keepAlive: false,
            showFooter: true,
            transition: 'slide-right',
        },
    },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router
