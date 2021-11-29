<template>
    <div class="relative home">
        <div class="title">
            <div class="title-logo">
                <img src="../../../assets/image/logo.png" alt="" />
            </div>
            <div class="title-text">{{ title }}</div>
            <div class="title-right">
                <svg class="z-icon" aria-hidden="true">
                    <use xlink:href="#z-icon-screen"></use>
                </svg>
                <svg class="z-icon" aria-hidden="true">
                    <use xlink:href="#z-icon-other"></use>
                </svg>
            </div>
        </div>
        <!-- 左上角标题 -->
        <div class="home-title">
            <div class="title-content">
                <img src="@/assets/image/legend.png" alt="" />
                <div class="py-3 text-xl">Born for the <span style="color: #ff050d">Territory</span></div>
            </div>
        </div>
        <!-- 中间按钮 -->
        <div class="home-menu">
            <div class="buttons">
                <div class="menu-btn">READ LITEPAPER</div>
                <div class="menu-position"></div>
                <div class="menu-btn">SUBSCRIBE</div>
            </div>
            <div class="menu-icons">
                <div class="transition-all menu-icon">
                    <img src="@/assets/image/twitter.png" alt="" />
                </div>
                <div class="transition-all menu-icon">
                    <img src="@/assets/image/discord.png" alt="" />
                </div>
                <div class="transition-all menu-icon">
                    <img src="@/assets/image/instagram.png" alt="" />
                </div>
                <div class="transition-all menu-icon">
                    <img src="@/assets/image/facebook.png" alt="" />
                </div>
                <div class="transition-all menu-icon">
                    <img src="@/assets/image/telegram.png" alt="" />
                </div>
            </div>
        </div>
        <!-- <div style="background-color: aqua; height: 600px; width: 50%"></div>
        <div style="background-color: rgb(55, 65, 65); height: 600px; width: 50%"></div>
        <div style="background-color: rgb(175, 138, 58); height: 600px; width: 50%"></div> -->
    </div>
</template>
<script setup lang="ts">
import { computed, readonly, ref, provide, inject } from 'vue'

// import Moralis from 'moralis/dist/moralis.min.js'
const title = inject('title') as string // 菜单标题
</script>

<style scoped lang="less">
.home {
    overflow: auto;
    background-image: url('@/assets/image/bg.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 600px;
    /* min-width: 640px; */
    overflow: auto;
    height: 100%;
    // display: flex;
}
.title {
    position: fixed;
    left: 0;
    top: 0;
    height: 48px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    padding: 0 10px;
    transition: all 230ms ease-out;
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(20px);
    color: rgba(255, 255, 255, 1);
}
.title-logo {
    height: 44px;
    width: 44px;
    display: flex;
    align-items: center;
}
.title-logo > img {
    width: 100%;
}
.title-text {
    position: absolute;
    height: 44px;
    width: 50vw;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    z-index: -1;
    display: flex;
    align-items: center;
    justify-content: center;
}
.title-right > .z-icon {
    font-size: 24px;
    padding: 6px;
}
.home-title {
    position: relative;
    max-height: 60vh;
    height: 55vh;
    width: 100%;
    .title-content{
        color: rgba(255, 255, 255, 0.5);
        transition-property: all;
        transition-timing-function: cubic-bezier(.4,0,.2,1);
        transition-duration: .15s;
        right: 0;
        display: flex;
        position: absolute;
        left: 0;
        bottom: 0;
        top: 0;
        justify-content: center;
        align-items: center;
        width: 278px;
        height: 80px;
        max-height: 80px;
        flex-wrap: wrap;
        padding: 8px;
        padding-left: 12px;
        padding-right: 12px;
        margin: auto;
    }
    img{
        max-width: 100%;
        height: auto;
    }
    .py-3{
        margin-top: 6vw;
        font-size: 6vw;
        line-height: 1.5vw;
        padding-top: 1.5vw;
        padding-bottom: 1.5vw;
    }
}
.home-menu{
    width: 100%;
    padding-top: 50px;
    min-height: 30vh;
    color: #ffffff80;
    overflow: hidden;
    align-items: center;
    flex-direction: column;
    display: flex;
    position: absolute;
    .buttons{
        font-size: 1.125rem;
        line-height: 1.75rem;
        align-items: center;
        // display: flex;
        color: #ffffff80;
        .menu-btn{
            transition-property: all;
            transition-timing-function: cubic-bezier(.4,0,.2,1);
            transition-duration: .15s;
            cursor: pointer;
            padding: 10px 50px;
            background-color: #2d60af;
            box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.4);
            opacity: 0.8;
            text-align: center;
        }
        .menu-position{
            height: 4vw;
        }
        .menu-btn:hover {
            box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.5);
            opacity: 1;
        }
    }
    .menu-icons{
        display: flex;
        align-items: center;
        margin-top: 5vh;
        .menu-icon {
            height: 48px;
            width: 48px;
            max-width: 48px;
            max-height: 48px;
            margin: 0 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            transition-property: all;
            transition-timing-function: cubic-bezier(.4,0,.2,1);
            transition-duration: .15s;
        }
        .menu-icon > img {
            height: 32px;
            max-height: 32px;
        }
        .menu-icon:hover {
            transform: scale(1.2);
        }
    }
}
</style>
