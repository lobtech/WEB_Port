<template>
    <div>
        <div class="z-blurEffect navbar invisible md:visible">
            <div class="logo">
                <img src="../../assets/image/logo.png" alt="" />
            </div>
            <div class="menu">
                <div class="item" :class="[{ 'item-active': Active('/home') }]" :style="[]" @click="toPage('/home')">Home</div>
                <div class="span"></div>
                <div class="item" :class="[{ 'item-active': Active('/store') }]" @click="toPage('/store')">Store</div>
                <div class="span"></div>
                <div class="item" :class="[{ 'item-active': Active('/book') }]" @click="toPage('/book')">Book</div>
            </div>
            <div class="tips" @click="toPage('/test')">Play-to-Earn MMORPG NFT game</div>
        </div>
        <div class="navbar visible md:invisible fixed opacity-100 md:opacity-0 transition-all left-0 top-0 flex items-center justify-center w-full backdrop-blur-lg backdrop-filter h-16">
            <div class="absolute left-4 w-10">
                <img src="../../assets/image/logo.png" alt="" />
            </div>
            <div class="text-xl font-medium">标题</div>
            <div class="absolute right-4 flex items-center">
                <svg class="mx-1 cursor-pointer text-3xl transition-all opacity-80 hover:opacity-100 visible md:opacity-0 md:invisible z-icon" aria-hidden="true">
                    <use xlink:href="#z-icon-screen"></use>
                </svg>
                <svg class="mx-1 cursor-pointer text-3xl transition-all opacity-80 hover:opacity-100 visible md:opacity-0 md:invisible z-icon" aria-hidden="true">
                    <use xlink:href="#z-icon-other"></use>
                </svg>
            </div>
            <div class="h-16"></div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import getCurrentInstance from '../../hooks/useCurrentInstance'
let { proxy } = getCurrentInstance() // 获取当前实例

// 跳转
let toPage = (path: string): any => {
    if (path === '/store') return window.open('http://test2.pryun.vip')
    proxy.$router.push(path)
}
const Active = computed(() => {
    return function (ptah: string) {
        return proxy.$route.path === ptah
    }
})
</script>
<style scoped>
.navbar {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    /* min-width: 1200px; */
    height: 60px;
    display: flex;
    align-items: center;
    padding-left: 30px;
    padding-right: 30px;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 999;
    color: rgba(255, 255, 255, 0.5);
}
.logo {
    height: 40px;
    width: 60px;
}
.logo > img {
    height: 100%;
    widows: 100%;
}
.menu {
    flex: 1;
    display: flex;
    align-items: center;
}
.menu > .item {
    font-size: 18px;
    font-weight: bolder;
    color: rgba(255, 255, 255, 0.4);
    cursor: pointer;
    transition-property: all;
    transition-timing-function: ease-out;
    transition-duration: 230ms;
    border-bottom-color: rgba(255, 255, 255, 0);
    border-bottom-width: 2px;
    border-bottom-style: solid;
    margin: 0 20px;
}
.menu > .item:hover {
    color: #ffffff;
    border-bottom-color: rgba(255, 255, 255, 1);
}
.menu > .item-active {
    color: #ffffff;
    border-bottom-color: rgba(255, 255, 255, 1);
}
.menu > .span {
    height: 12px;
    width: 2px;
    background-color: rgba(255, 255, 255, 0.4);
}
.tips {
    font-size: 16px;
    font-weight: bolder;
    color: rgba(255, 255, 255, 0.4);
    cursor: pointer;
    transition-property: color;
    transition-timing-function: ease-out;
    transition-duration: 230ms;
}
.tips:hover {
    color: rgba(255, 255, 255, 0.8);
}
</style>
