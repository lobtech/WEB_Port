<template>
    <div class="home">
        <div class="navbar">
            <div class="logo">
                <img src="../../../assets/image/logo.png" alt="" />
            </div>
            <div class="menu">
                <div class="item item-active ">Home</div>
                <div class="span"></div>
                <div class="item" @click="toMarket">Market</div>
                <div class="span"></div>
                <div class="item" @click="toWiki">Wiki</div>
                <div class="span"></div>
                <div class="item" @click="toAirdrop">Airdrop</div>
            </div>
            <div class="tips" @click="connect(false)">{{ id || 'connect to wallet'}}</div>
        </div>
        <!-- 左上角标题 -->
        <div class="home-title">
            <div class="title-content">
                <img src="@/assets/image/legend.png" alt="" />
                <div class="py-3">Born for the <span style="font-weight: bold; color: #fff;">Territory</span></div>
            </div>
        </div>
        <!-- 中间按钮 -->
        <div class="home-menu">
            <div class="buttons">
                <div class="menu-btn" @click="toPdf">READ LITEPAPER</div>
                <div class="menu-position"></div>
                <div class="menu-btn" @click="toSub">SUBSCRIBE</div>
            </div>
            <div class="menu-icons">
                <div class="transition-all menu-icon">
                    <a href="https://twitter.com/legendofbeasts" target="view_window">
                        <img src="@/assets/image/twitter.png" alt="" />
                    </a>
                </div>
                <div class="transition-all menu-icon">
                    <a href="https://discord.gg/Rp73r49htu" target="view_window">
                        <img src="@/assets/image/discord.png" alt="" />
                    </a>
                </div>
                <div class="transition-all menu-icon">
                    <a href="https://www.instagram.com/legendofbeasts/" target="view_window">
                        <img src="@/assets/image/instagram.png" alt="" />
                    </a>
                </div>
                <div class="transition-all menu-icon">
                    <a href="https://www.facebook.com/legendofbeasts" target="view_window">
                        <img src="@/assets/image/facebook.png" alt="" />
                    </a>
                </div>
                <div class="transition-all menu-icon">
                     <a href="https://t.me/joinchat/PvFvoyL5A904NGY1" target="view_window">
                        <img src="@/assets/image/telegram.png" alt="" />
                    </a>
                </div>
            </div>
        </div>
        
    </div>
    <!-- 轮播图 -->
    <div class="scenes">
        <div class="title">
            <img class="left" src="@/assets/image/guaizhao.png" alt="">
            RRICH WORLD STRUCTURE
            <img class="right" src="@/assets/image/guaizhao.png" alt="">
        </div>
        <div class="scenes_content" ref="chatContent" @mouseenter="mouseScenes" @mouseout="mouseover" :style="{'right': right + 'px'}">
            <div class="demo1" ref="demo1">
                <img src="@/assets/image/0.jpg" alt="">
                <img src="@/assets/image/0-4.jpg" alt="">
                <img src="@/assets/image/0-1.jpg" alt="">
                <img src="@/assets/image/0-5.jpg" alt="">
                <img src="@/assets/image/0-3.jpg" alt="">
                <img src="@/assets/image/0-6.jpg" alt="">
            </div>
            <div class="demo2">
                <img src="@/assets/image/0.jpg" alt="">
                <img src="@/assets/image/0-4.jpg" alt="">
                <img src="@/assets/image/0-1.jpg" alt="">
                <img src="@/assets/image/0-5.jpg" alt="">
                <img src="@/assets/image/0-3.jpg" alt="">
                <img src="@/assets/image/0-6.jpg" alt="">
            </div>
        </div>
        <div class="title">
            <img class="left" src="@/assets/image/guaizhao.png" alt="">
            LOB WORLD
            <img class="right" src="@/assets/image/guaizhao.png" alt="">
        </div>
    </div>
    <!-- 视频 -->
    <div class="video">
        <div class="title">
            <!-- <img class="left" src="@/assets/image/guaizhao.png" alt=""> -->
            3D-NFT game that supports VR
            <!-- <img class="right" src="@/assets/image/guaizhao.png" alt=""> -->
        </div>
        <div class="video-content">
            <img src="../../../assets/image/112_02.png" alt="">
            <iframe class="iframe" src="https://www.youtube.com/embed/8C4IM3Q7Wjc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
    <!-- TokenOMics -->
    <div class="token-omics">
        <h1>
            <span>TOKENOMICS</span>
            <span>www.hbeasts.com</span>
        </h1>
        <div class="token-content">
            <h1>Legend of beasts Token: <span style="color: #ffc000;">$LOB</span>. Total Supply: 30,000,000</h1>
            <div class="token1-content">
                <img src="../../../assets/image/token1.png" class="token1" alt="">
            </div>
            <img src="../../../assets/image/token2.png" class="token2" alt="">
        </div>
    </div>
    <!-- ROAD MAP -->
    <div class="road-map">
        <h1>
            <span>ROAD MAP</span>
            <span>www.hbeasts.com</span>
        </h1>
        <div class="road-content">
            <img src="../../../assets/image/road.png" alt="">
        </div>
    </div>
    <!-- TEAM -->
    <div class="team">
        <h1>
            <span>TEAM</span>
            <span>www.hbeasts.com</span>
        </h1>
        <div class="team-content">
            <div class="items1">
                <div class="item">
                    <div>
                        <img src="../../../assets/image/4..png" alt="">
                        <p>CEO</p>
                    </div>
                    <div>
                        <h3>Feng Cheng</h3>
                        <span>Former Huawei manager have 5 years global working Experience, with rich project experience in the field of software development and product management.</span>
                    </div>
                </div>
                <div class="item">
                    <div>
                        <img src="../../../assets/image/6.png" alt="">
                        <p>COO</p>
                    </div>
                    <div>
                        <h3>Frank</h3>
                        <span>Deep understanding of financial regulations and cryptocurrencies, have professional user scene In the game field</span>
                    </div>
                </div>
                <div class="item">
                    <div>
                        <img src="../../../assets/image/7.png" alt="">
                        <p>Visual director</p>
                    </div>
                    <div>
                        <h3>Jack</h3>
                        <span>Former gameloft game planner, good at realistic character depiction and detailed control, able to guide any style of game</span>
                    </div>
                </div>
            </div>
            <div class="items2">
                <div class="item">
                    <div>
                        <img src="../../../assets/image/3..png" alt="">
                        <p>CTO</p>
                    </div>
                    <div>
                        <h3 style="width: 115%">Shreyas Vasuki</h3>
                        <span>with rich programming skills and problem-solving skills, familiar with blockchain application development.</span>
                    </div>
                </div>
                <div class="item">
                    <div>
                        <img src="../../../assets/image/5.png" alt="">
                        <p>CMO</p>
                    </div>
                    <div>
                        <h3>Roll</h3>
                        <span>has more than 4 years of working experience in cryptocurrency exchanges, have unique brand version and market experience.</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import store from '@/store'
import { computed, readonly, ref, provide, inject, onMounted, onUnmounted } from 'vue'
import {  useRouter } from 'vue-router'
import { Moralis, getNativeBalance, getTokenBalances, getNFTOwners, getAllTokenIds, getNFTs, transfer, callCloud, addListing } from '@/tools/moralis';

const router = useRouter()
const toWiki: any = () => {
    window.open('https://wiki.hbeasts.com/');
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
const toAirdrop: any = () => {
    router.push({ path: `/airdrop` })
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

let test: any;

const Marquee: any = () => {
    var speed = 20;
    // const width = computed(() => demo1._rawValue.clientWidth)
    // console.log(width);
    function Marquee(){
        right.value+=2;
        if(right.value > demo1?._rawValue.clientWidth * 2 - document.body.clientWidth){
            right.value = demo1?._rawValue.clientWidth - document.body.clientWidth;
        }
    }
    test = setInterval(Marquee,speed);
}
const mouseScenes: any = () => {
    clearInterval(test)
    test = null;
}
const mouseover: any = () => {
    if(!test) Marquee();
}
onMounted(()=>{
    right.value = 0;
    console.log(right.value);
    
    setTimeout(() => {
        Marquee();
    }, 2000);
    Moralis.User.currentAsync().then((res: any) => {
        console.log(res, 'succes');
        if(res) connect(res);
    }).catch((res: any) => {
        console.log(res, 'err');
        
    })
})
onUnmounted(()=>{
    clearInterval(test)
})
// scrollToBottom() {
//             this.$nextTick(() =>{
//                 this.$refs.chatContent.scrollTop = this.$refs.chatContent.scrollHeight;
//             })
//         }   

</script>

<style lang="less" scoped>
.home {
    background-image: url('@/assets/image/0-2.jpg');
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
        right: 30%;
        display: flex;
        position: absolute;
        left: 0;
        bottom: 0;
        top: 0;
        justify-content: center;
        align-items: center;
        width: 148px;
        max-width: 390px;
        max-height: 80px;
        flex-wrap: wrap;
        padding: 8px;
        padding-left: 12px;
        padding-right: 12px;
        margin: auto;
    }
    img{
        width: 90%;
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
            height: 60px;
            max-height: 60px;
            padding: 0 60px;
            background-color: #2d60af;
            box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.4);
            opacity: 0.7;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #ffffff;
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
        .menu-icon  img {
            height: 32px;
            max-height: 32px;
        }
        .menu-icon:hover {
            transform: scale(1.2);
        }
    }
}
.scenes{
    display: block !important;
    width: 100%;
    overflow: hidden;
    & > div{
        width: 100%;
    }
    .title{
        height: 23%;
        font-size: 1.4vw;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        position: relative;
        .left,
        .right{
            width: 30px;
            margin: 0 1vw;
        }
        .right{
            -moz-transform:scaleX(-1);
            -webkit-transform:scaleX(-1);
            -o-transform:scaleX(-1);
            transform:scaleX(-1);
            /*兼容IE*/
            filter:FlipH;
        }
    }
    .title:first-child{
        height: 27%;
    }
}
.scenes_content{
    height: 50%;
    width: 2000% !important;
    min-height: 300px;
    display: flex;
    position: relative;
    .demo1{
        // width: 100%;
        height: 100%;
    }
     .demo2{
        // width: 100%;
        height: 100%;
    }
    img{
        height: 100%;
        margin-right: 10px;
    }
}
.video{
    .title{
        font-size: 2vw;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        position: absolute;
        top: 2vh;
    }
}
.video,
.scenes,
.token-omics,
.road-map,
.team{
    height: 100vh;
    background-color: #232736;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    
    .video-content{
        width: 60%;
        height: 37.5vw;
        max-width: 1600px;
        max-height: 1000px;
        position: relative;
        img{
            width: 40%;
            max-width: 148px;
            min-width: 110px;
            height: 20px;
            max-height: 45px;
            min-height: 20px;
            position: absolute;
            left: 0;
            right: 0;
            margin: 0 auto;
            z-index: 26;
            //top: 21.3vh;
            //background-color: #232736;
        }
        .iframe{
            width: 100%;
            height: 100%;
            z-index: 0;
            border: 9px solid;
            border-image: url('../../../assets/image/SS.png') 25/22px repeat;
        }
    }
   
}
.token-omics{
    position: relative;
    & > h1{
        position: absolute;
        left: 0;
        right: 0;
        top: 3vw;
        margin: 0 auto;
        color: #fff;
        font-size: 3vw;
        padding: 0 4vw;
        span:last-child{
            float: right;
            font-size: 2vw;
        }
    }
    .token-content{
        position: relative;
        margin-top: 2vw;
        h1{
            // position: absolute;
            left: 0;
            right: 0;
            top: -90px;
            margin: 0 auto;
            text-align: center;
            color: #fff;
            font-size: 2vw;
            font-style: italic;
            margin-bottom: 60px;
        }
        .token1-content{
            display: inline-block;
            background-color: #d9d9d9;
            margin-right: 7vw;
            border-radius: 30px;
            vertical-align: top;
        }
        .token1{
            width: 40vw;
            min-width: 600px;
        }
        .token2{
            margin-top: 20px;
            width: 24vw;
            min-width: 400px;
        }
    }
}
.road-map{
    position: relative;
    & > h1{
        position: absolute;
        left: 0;
        right: 0;
        top: 3vw;
        margin: 0 auto;
        color: #fff;
        font-size: 3vw;
        padding: 0 4vw;
        span:last-child{
            float: right;
            font-size: 2vw;
        }
    }
    .road-content{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        img{
            width: 60%;
        }
    }
}
.team{
    & > h1{
        position: absolute;
        left: 0;
        right: 0;
        top: 3vw;
        margin: 0 auto;
        color: #fff;
        font-size: 3vw;
        padding: 0 4vw;
        span:last-child{
            float: right;
            font-size: 2vw;
        }
    }
    .team-content{
        width: 100%;
        height: 100px;
        color: #fff;
        & > div{
            display: flex;
            justify-content: center;
        }
        .item{
            width: 25vw;
            min-width: 374px;
            margin-bottom: 2vw;
            // height: 20vw;
            div{
                width: 60%;
                display: inline-block;
                padding: 15px;
                h3{
                    margin-bottom: 1vw;
                    font-size: 2vw;
                    font-weight: 600;
                    text-align: center;
                }
                span{
                    font-size: 1.2vw;
                    line-height: 1.4vw;
                }
            }
            div:first-child{
                width: 40%;
                text-align: center;
                vertical-align: top;
                p{
                    margin-top: 1vw;
                    font-size: 2vw;
                    font-weight: 600;
                    text-align: center;
                }
            }
            img{
                width: 100%;
            }
        }
        .item:not(:last-child){
            margin-right: 3vw;
        }
    }
}
</style>
