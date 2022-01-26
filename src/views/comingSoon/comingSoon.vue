<template>
    <div class="container">
        <div class="position">Coming Soon</div>
        <div class="navbar">
            <div class="logo">
                <img src="../../assets/image/logo.png" alt="" />
            </div>
            <div class="menu">
                <div class="item" @click="toHome">Home</div>
                <div class="span"></div>
                <div class="item item-active" @click="toMarket">Market</div>
                <div class="span"></div>
                <div class="item" @click="toWiki">Wiki</div>
                <div class="span"></div>
                <div class="item" @click="toAirdrop">Airdrop</div>
                <div class="span"></div>
                <div class="item" @click="toEgg">Egg lncubator</div>
            </div>
            <div class="tips" @click="connect(false)">{{ id || 'connect to wallet'}}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, readonly, ref, provide, inject, onMounted, onUnmounted } from 'vue'
import {  useRouter } from 'vue-router'
import { Moralis, getNativeBalance, getTokenBalances, getNFTOwners, getAllTokenIds, getNFTs, transfer, callCloud, addListing } from '@/tools/moralis';
let name = ref('ccy')
const router = useRouter()
const toWiki: any = () => {
    window.open('https://wiki.hbeasts.com/');
}
const toHome: any = () => {
     router.push({ path: `/` })
}
const toMarket: any = () => {
    // window.open('https://test2.pryun.vip/home');
    router.push({ path: `/comingSoon` })
}
const toAirdrop = () => {
     router.push({ path: `/airdrop` })
}
const toEgg: any = () => {
    router.push({ path: `/egg` })
    
}
const toPdf: any = () => {
    window.open('https://www.hbeasts.com/design.pdf');
}
const toSub: any = () => {
    window.open('https://70iaogphcx0.typeform.com/to/Cl2GH4Gt');
}
let id = ref("");
let right = ref(1);
const chatContent = ref(null);
const demo1 = ref(null) as any;

const connect: any = (type: any) => {
    if(type){
        id.value = type.attributes.ethAddress;
        let len = id.value.length-1;
        id.value = id.value[0]+id.value[1]+id.value[2]+id.value[3]+id.value[4]+id.value[5]+"*****"+id.value[len-3]+id.value[len-2]+id.value[len-1]+id.value[len];
        return;
    }
    Moralis.authenticate().then((res: any) => {
        console.log(res,'钱包登陆成功--------');
        id.value = res.attributes.ethAddress;
        let len = id.value.length-1;
        id.value = id.value[0]+id.value[1]+id.value[2]+id.value[3]+id.value[4]+id.value[5]+"*****"+id.value[len-3]+id.value[len-2]+id.value[len-1]+id.value[len];
    })
}


onMounted(()=>{
    Moralis.User.currentAsync().then((res: any) => {
        console.log(res, 'succes');
        if(res) connect(res);
    }).catch((res: any) => {
        console.log(res, 'err');
        
    })
})


</script>

<style lang="less">
.container{
    background-image: url('https://d1td2c8hf7fv9k.cloudfront.net/0-2.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 600px;
    min-width: 640px;
    overflow: auto;
    height: 100%;
    // display: flex;
    .position{
        background-color: rgba(0, 0, 0, 0.4);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 4vw;
        width: 100%;
        height: 100%;
        font-weight: 600;
        color: #ffffff;
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
    font-size: 14px;
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
.market{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}
.tips {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 18px;
    padding: 10px;
    font-size: 14px;
    font-weight: bolder;
    color: rgba(255, 255, 255, 0.9);
    cursor: pointer;
    transition-property: color;
    transition-timing-function: ease-out;
    transition-duration: 230ms;
}
.tips:hover {
    color: rgba(255, 255, 255, 0.8);
}
}

</style>