<template>
    <bg></bg>
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
import bg from '@/components/layout/bg.vue'
</script>
<style></style>
