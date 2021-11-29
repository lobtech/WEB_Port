<template>
    <div class="relative home">
        <div class="z-blurEffect navbar invisible md:visible">
            <div class="logo">
                <img src="../../../assets/image/logo.png" alt="" />
            </div>
            <div class="menu">
                <div class="item item-active ">Home</div>
                <div class="span"></div>
                <div class="item">Store</div>
                <div class="span"></div>
                <div class="item">Book</div>
            </div>
            <div class="tips">Play-to-Earn MMORPG NFT game</div>
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
    </div>
</template>
<script setup lang="ts">
import store from '@/store'
import { computed, readonly, ref, provide, inject } from 'vue'
const menuItemValue: any = inject('title') // 菜单标题
const setTitle: any = inject('setTitle') // 设置菜单
const setLoading: any = inject('setLoading') // 设置loading
const login: any = inject('login') // 登录
const logout: any = inject('logout') // 注销
const IsActive: any = inject('IsActive') // 是否激活
const toPage: any = inject('toPage') // 跳转到新页面
const changeShow: any = inject('changeShow') // 是否显示
const selectMenuItem: any = inject('selectMenuItem') // 设置子菜单
const marketplace_list: any = inject('marketplace_list')
const prediction_list: any = inject('prediction_list')
const other_list: any = inject('other_list')

const accounts = computed(() => store.state.moralis?.user.accounts)
const username = computed(() => store.state.moralis?.user.username)
</script>

<style lang="less" scoped>
.home {
    background-image: url('@/assets/image/bg.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 600px;
    min-width: 640px;
    overflow: auto;
    height: 100%;
    // display: flex;
}
.navbar {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    /* min-width: 1200px; */
    height: 60px;
    max-height: 60px;
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
    max-width: 60px;
    max-height: 40px;
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
    font-size: 1.2vw;
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
    max-height: 12px;
    width: 2px;
    max-width: 2px;
    background-color: rgba(255, 255, 255, 0.4);
}
.tips {
    font-size: 1.2vw;
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
        right: 25%;
        display: flex;
        position: absolute;
        left: 0;
        bottom: 0;
        top: 0;
        justify-content: center;
        align-items: center;
        width: 128px;
        max-width: 300px;
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
        font-size: 1.5vw;
        line-height: 1.5vw;
        padding-top: 1.5vw;
        padding-bottom: 1.5vw;
    }
}
.home-menu{
    width: 100%;
    padding-top: 100px;
    min-height: 30vh;
    color: #ffffff80;
    overflow: hidden;
    align-items: center;
    flex-direction: column;
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    display: flex;
    position: absolute;
    transform: translate(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    .buttons{
        font-size: 1.125rem;
        line-height: 1.75rem;
        align-items: center;
        display: flex;
        color: #ffffff80;
        .menu-btn{
            transition-property: all;
            transition-timing-function: cubic-bezier(.4,0,.2,1);
            transition-duration: .15s;
            cursor: pointer;
            padding: 10px 20px;
            background-color: #2d60af;
            box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.4);
            opacity: 0.7;

        }
        .menu-position{
            width: 4vw;
        }
        .menu-btn:hover {
            box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.5);
            opacity: 1;
        }
    }
    .menu-icons{
        display: flex;
        align-items: center;
        margin-top: 2.5vw;
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
