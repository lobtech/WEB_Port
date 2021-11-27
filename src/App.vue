<template>
    <div class="h-full w-screen bg-scroll bg-cover bg-origin-border bg-no-repeat bg-center bg"></div>
    <navbarVue></navbarVue>
    <router-view v-slot="{ Component }">
        <keep-alive>
            <component :is="Component" :key="$route.path" v-if="$route.meta.keepAlive" />
        </keep-alive>
        <component :is="Component" :key="$route.path" v-if="!$route.meta.keepAlive" />
    </router-view>
</template>
<script setup lang="ts">
import navbarVue from '@/components/layout/navbar.vue'
</script>
<style scoped>
.bg {
    width: 100%;
    min-height: 90vh;
    height: 100vh;
    z-index: -1;
    background-image: url('@/assets/image/bg.jpg');
}
</style>
