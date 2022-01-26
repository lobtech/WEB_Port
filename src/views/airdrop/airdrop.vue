<template>
    <div class="container">
        <Alert text="Change network to avalanche testnet" :show="alertFlag" @confim="confim"></Alert>
        <div class="navbar" v-if="innerWidth > 740">
            <div class="logo">
                <img src="../../assets/image/logo.png" alt="" />
            </div>
            <div class="menu">
                <div class="item" @click="toHome">Home</div>
                <div class="span"></div>
                <div class="item " @click="toMarket">Market</div>
                <div class="span"></div>
                <div class="item" @click="toWiki">Wiki</div>
                <div class="span"></div>
                <div class="item item-active">Airdrop</div>
                <div class="span"></div>
                <div class="item" @click="toEgg">Egg lncubator</div>
            </div>
            <div class="tips" @click="connect(false)">{{ id || 'connect to wallet'}}</div>
        </div>
        <div class="title" v-else>
            <!-- <div class="title-logo">
                <img src="https://d1td2c8hf7fv9k.cloudfront.net/logo.png" alt="" />
            </div> -->
            <div class="title-logo">
                <div class="menu">
                    <div class="item" @click="toHome">Home</div>
                    <div class="span"></div>
                    <div class="item" @click="toMarket">Market</div>
                    <div class="span"></div>
                    <div class="item" @click="toWiki">Wiki</div>
                    <div class="span"></div>
                    <div class="item">Airdrop</div>
                    <div class="span"></div>
                <div class="item" @click="toEgg">Egg lncubator</div>
                </div>
            </div>
            <!-- <div class="title-text">{{ title }}</div> -->
            <div class="title-right">
                <div class="tips" @click="connect(false)">{{ id || 'connect to wallet'}}</div>
            </div>
        </div>
        <div class="position">
            <div>
                <div class="lost-lob">last Lob: <span>{{ pool }}</span></div>
                <div class="token-address"><span></span>Token Address:  0x934c9c52730Fe26187583Ed3712c17576901B68F</div>
                <div class="subscribes" v-if="innerWidth > 740">
                    <div v-for="(item, index) in subscribes" :key="index">
                        <a :href="item.link" target="view_window">
                            <img :src="item.img" alt="" />
                        </a>
                        <p v-if="item.state">Subscribed</p>
                        <p v-else>check subscribe</p>
                    </div>
                </div>
                <div class="subscribes2" v-else>
                            <div class="loop" v-for="(item, index) in subscribes" :key="index">
                                <a :href="item.link" target="view_window">
                                    <img :src="item.img" alt="" />
                                </a>
                                <p v-if="item.state">Subscribed</p>
                                <p v-else>check subscribe</p>
                            </div>
                </div>
                <div :class='{"get-lob": true, "get-lob2": isSetLob}'>
                    <span rel="nofollow" class="springtime-Link" @click="getLob">Get LOB!!!</span>
                </div>
                <div :class='{"not-root": true, "not-root2": checkGetLob}' v-if="!isSetLob">Please Subscribes</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, readonly, ref, provide, inject, onMounted, onUnmounted } from 'vue'
import {  useRouter } from 'vue-router'
import { Moralis, getNativeBalance, getTokenBalances, getNFTOwners, getAllTokenIds, getNFTs, transfer, callCloud, addListing } from '@/tools/moralis';
// import swiper from './components/swiper.vue';
import web3 from '@/tools/web3';
import contracts from '@/tools/contracts'
import store from '@/store'
// 引入swiper
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import "swiper/css/navigation"
import SwiperCore, {
  Navigation
} from 'swiper';
SwiperCore.use([Navigation]);



console.log(store.state, 'store');

const address = computed(() => store.state.moralis?.address) // 获取address
const innerWidth = computed(() => store.state.sys?.innerWidth || 0) // 监听屏幕宽度
const subscribes = [
    {
        img: import.meta.globEager('../../assets/image/twitter.png')['../../assets/image/twitter.png'].default,
        state: 0, //0 未关注   1 已关注
        link: 'https://twitter.com/legendofbeasts'
    },
    {
        img: import.meta.globEager('../../assets/image/discord.png')['../../assets/image/discord.png'].default,
        state: 0, //0 未关注   1 已关注
        link: 'https://discord.gg/Rp73r49htu'
    },
    {
        img: import.meta.globEager('../../assets/image/instagram.png')['../../assets/image/instagram.png'].default,
        state: 1, //0 未关注   1 已关注
        link: 'https://www.instagram.com/legendofbeasts/',
    },
    {
        img: import.meta.globEager('../../assets/image/facebook.png')['../../assets/image/facebook.png'].default,
        state: 0, //0 未关注   1 已关注
        link: 'https://www.facebook.com/legendofbeasts'
    },
    {
        img: import.meta.globEager('../../assets/image/telegram.png')['../../assets/image/telegram.png'].default,
        state: 0, //0 未关注   1 已关注
        link: 'https://t.me/joinchat/PvFvoyL5A904NGY1'
    },
]

let alertFlag: any = ref(false)
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
const toPdf: any = () => {
    window.open('https://www.hbeasts.com/design.pdf');
}
const toSub: any = () => {
    window.open('https://70iaogphcx0.typeform.com/to/Cl2GH4Gt');
}
const toEgg: any = () => {
    router.push({ path: `/egg` })
    
}
const confim: any = (e: any) => {
    alertFlag.value = false;
    // setTimeout(() => {
    //     alertFlag.value = !alertFlag.value;
    // }, 2000);
}

let id = ref("");
let right = ref(1);
const chatContent = ref(null);
const demo1 = ref(null) as any;
const pool = ref(0);
let ethAddress: any = "";
let isSetLob=ref(false) as any;
let isNotwork = ref(null) as any;

const checkGetLob = ref(false) as any;  
//连接钱包 type=true 表示上次已经登陆过了，不需要再出来钱包了
const connect: any = (type: any) => {
    if(type){
        id.value = type.attributes.ethAddress;
        ethAddress = id.value;
        eligible(id.value);
        let len = id.value.length-1;
        id.value = id.value[0]+id.value[1]+id.value[2]+id.value[3]+id.value[4]+id.value[5]+"*****"+id.value[len-3]+id.value[len-2]+id.value[len-1]+id.value[len];
        isNotwork.value = true;
        return;
    }
    Moralis.authenticate().then((res: any) => {  
        console.log(res,'success--------');
        id.value = res.attributes.ethAddress;
        ethAddress = id.value;
        eligible(id.value);
        isNotwork.value = true;
        let len = id.value.length-1;
        id.value = id.value[0]+id.value[1]+id.value[2]+id.value[3]+id.value[4]+id.value[5]+"*****"+id.value[len-3]+id.value[len-2]+id.value[len-1]+id.value[len];
    })
}

//查询是否符合领取条件  false： 符合   true：不符合
const eligible = (address: string) => {
    web3.eligible(address).then((res: any) => {
        console.log(res, '------res');
        if(!res) {
            isSetLob.value = true;
            isNotwork.value = true;
        }
    }).catch((err: any) => {
        alertFlag.value = true;
        isNotwork.value = false;
        console.log(err, '------err');
    })
}

const distribute = () => {
    // console.log(contracts.airdrop.name, contracts.money.address, ethAddress);
    web3.distribute(contracts.airdrop.name, contracts.money.address, ethAddress).then((res: any) => {
        console.log(res, '------getlobsuccess');
        isSetLob.value = false; //设置为已经领取状态
    }).catch((err: any) => { 
        console.log(err, '------getloberr');
    })
}

const getLob = () => {
    console.log(store.state.moralis?.chain);
    if(isSetLob.value) {
        distribute();
    }else{
        checkGetLob.value = true;
        setTimeout(() => {
            checkGetLob.value = false;
        }, 1000);
        // if(isNotwork.value == false) alertFlag.value = true;
        if(!ethAddress){
            connect();
        }
    }
}

onMounted(()=>{
    // Moralis.User.logOut()
    web3.pool().then((res: any) => {
        pool.value = res.substring(0, res.length - 14) / 10000;
    })
    // getTokenBalances().then((res: any) => {
    //     console.log(res.balance / Math.pow(10, 18), 'get Lost');
    // })
    Moralis.User.currentAsync().then((res: any) => {
        console.log(res, 'succes');
        if(res) connect(res);
    }).catch((res: any) => {
        console.log(res, 'err');
    })

    web3.setAirdrop('0xfc6a38DCd922bBbf3707D955B3202D221a2D2FE6', false)
})

</script>

<style lang="less" scoped>   

@keyframes fadeInDown {
        0% {
            opacity: 0;
            -webkit-transform: translateY(-30px);
            -ms-transform: translateY(-30px);
            transform: translateY(-30px);
        }
        100% {
            opacity: 1;
            -webkit-transform: translateY(0);
            -ms-transform: translateY(0);
            transform: translateY(0);
        }
    }              
@keyframes springtimeAniamtScale2 {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.15);
    }
    100% {
        transform: scale(1);
    }
}
@keyframes test {
    0% {
        transform: scale(2);
    }
    10%{
        transform: translateX(15px);
    }
    20%{
        transform: translateX(-15px);
    }
    30%{
        transform: translateX(15px);
    }
    40%{
        transform: translateX(-15px);
    }
    50% {
        transform: translateX(15px);
    }
    60%{
        transform: translateX(-15px);
    }
    70%{
        transform: translateX(15px);
    }
    80%{
        transform: translateX(-15px);
    }
    90%{
        transform: translateX(15px);
    }
    100% {
        transform: scale(1)
    }
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
    z-index: 99900;
}
.title{
    .menu{
        display: flex;
        align-items: center;
        .span{
            height: 12px;
            max-height: 12px;
            width: 0.1rem;
            margin: 0 0.5rem;
            background-color: rgba(255, 255, 255, 0.9);
        }
        .item{
            background-color: rgba(69, 207, 189, 0.2);
            padding: 0.5rem 0.5rem;
            border-radius: 17px;
            font-size: 12px;
        }
    }
}
.title-right {
    .tips {
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 18px;
        padding: 0.5rem;
        font-size: 2vw;
        font-weight: bolder;
        color: rgba(255, 255, 255, 0.9);
        cursor: pointer;
        transition-property: color;
        transition-timing-function: ease-out;
        transition-duration: 230ms;
    }
}
.container{
    background-image: url('https://d1td2c8hf7fv9k.cloudfront.net/0-2.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 600px;
    // min-width: 640px;
    overflow: auto;
    height: 100%;
    // display: flex;
    .position{
    animation: fadeInDown .8s linear;

        background-color: rgba(0, 0, 0, 0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 4vw;
        width: 100%;
        // overflow: hidden;
        height: 100%;
        font-weight: 600;
        color: #ffffff;
        flex-wrap: wrap;
        .not-root{
            text-align: center;
            font-size: 0.8vw;
            color: #ffffff;
            margin-top: 0.2vw;
        }
        .not-root2{
            animation: test 1s linear;
        }
        .lost-lob{
            text-align: center;    
        }
        .token-address{
            font-size: 1vw;
            text-align: center;
            margin: 2vw;
            }
        .get-lob2{
            animation: springtimeAniamtScale2 1.2s linear infinite;
            background-image: linear-gradient(180deg,#ffe65c 0,#ffb13b 100%) !important;
            box-shadow: 0 4px 10px 0 rgb(122 0 13 / 30%) !important;
            color: #b20015 !important;
        }
        .get-lob{
            background-image: linear-gradient(180deg,#9b9b9b 0,#444444 100%);
            text-align: center;
            cursor: pointer;
            transition: .2s;
            letter-spacing: 1px;
            font-size: 24px;
            color: #c5c5c5;
            border-radius: 40px;
            bottom: 20px;
            line-height: 50px;
            width: 20vw;
            min-width: 200px;
            margin: 4vw auto;
            margin-bottom: 0;
        }
        .subscribes{
            // width: 80vw;
            display: flex;
            justify-content: center;
            & > div{
                width: 10vw;
                min-width: 50px;
                font-size: 1vw;
                text-align: center;
                transition-property: all;
                transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
                transition-duration: 0.15s;
                cursor: pointer;
                border: 1px solid;
                padding: 1vw 0;
                border-radius: 1vw;
                p{
                    margin: 1vw 0;
                }
                img{
                    width: 40%;
                }
            }
            & > div:not(:last-child){
                margin-right: 2%;
            }
            & > div:hover{
                transform: scale(1.2);
            }
        }
        .subscribes2{
            // width: 80vw;
            display: flex;
            justify-content: center;
            & > div{
                width: 15vw;
                min-width: 50px;
                font-size: 1vw;
                text-align: center;
                transition-property: all;
                transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
                transition-duration: 0.15s;
                cursor: pointer;
                border: 1px solid;
                padding: 1vw 0;
                border-radius: 1vw;
                p{
                    margin: 1vw 0;
                }
                img{
                    width: 40%;
                }
            }
            & > div:not(:last-child){
                margin-right: 2%;
            }
            & > div:hover{
                transform: scale(1.2);
            }
        }
            
          
            
            .loop{
                margin-right: 2%;
            }
            .loop:last-child{
                margin-right: 0%;
            }
            // .loop:hover{
            //     transform: scale(1.2);
            // }
        }

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