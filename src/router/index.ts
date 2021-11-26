import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        name: 'home',
        path: '/home',
        component: () => import('../views/home/index.vue'),
        meta: {
            keepAlive: true,
            showFooter: true,
            transition: 'slide-right',
        },
    },
    {
        name: 'book',
        path: '/book',
        component: () => import('../views/book/index.vue'),
        meta: {
            keepAlive: true,
            showFooter: true,
            transition: 'slide-right',
        },
    },
    {
        name: 'test',
        path: '/test',
        component: () => import('../views/test/index.vue'),
        meta: {
            keepAlive: true,
            showFooter: true,
        },
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router