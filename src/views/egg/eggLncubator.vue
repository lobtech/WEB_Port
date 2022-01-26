<template>
    <div class="home">
        <div class="navbar">
            <div class="logo">
                <img src="https://d1td2c8hf7fv9k.cloudfront.net/logo.png" alt="" />
            </div>
            <div class="menu">
                <div class="item" @click="toHome">Home</div>
                <div class="span"></div>
                <div class="item" @click="toMarket">Market</div>
                <div class="span"></div>
                <div class="item" @click="toWiki">Wiki</div>
                <div class="span"></div>
                <div class="item" @click="toAirdrop">Airdrop</div>
                <div class="span"></div>
                <div class="item item-active" @click="toEgg">Egg lncubator</div>
        <button @click="one">地址</button>
            </div>
            <div class="tips" @click="connect(false)">{{ id || 'connect to wallet' }}</div>
        </div>
        <!-- 左上角标题 -->
        <div class="home-title">
            <div class="title-content">
                <img src="https://d1td2c8hf7fv9k.cloudfront.net/legend.png" />
                <div class="py-3">
                    Born for the
                    <span style="font-weight: bold; color: #fff">Territory</span>
                </div>
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
                        <img src="https://d1td2c8hf7fv9k.cloudfront.net/twitter.png" />
                    </a>
                </div>
                <div class="transition-all menu-icon">
                    <a href="https://discord.gg/Rp73r49htu" target="view_window">
                        <img src="https://d1td2c8hf7fv9k.cloudfront.net/discord.png" />
                    </a>
                </div>
                <div class="transition-all menu-icon">
                    <a href="https://www.instagram.com/legendofbeasts/" target="view_window">
                        <img src="https://d1td2c8hf7fv9k.cloudfront.net/instagram.png" />
                    </a>
                </div>
                <div class="transition-all menu-icon">
                    <a href="https://www.facebook.com/legendofbeasts" target="view_window">
                        <img src="https://d1td2c8hf7fv9k.cloudfront.net/facebook.png" />
                    </a>
                </div>
                <div class="transition-all menu-icon">
                    <a href="https://t.me/joinchat/PvFvoyL5A904NGY1" target="view_window">
                        <img src="https://d1td2c8hf7fv9k.cloudfront.net/telegram.png" />
                    </a>
                </div>
            </div>
        </div>
    </div>
    <!-- Egg -->
    <div class="scenes">
        <div class="EGG">
            <div class="title">
                <img class="left" src="https://d1td2c8hf7fv9k.cloudfront.net/guaizhao.png" />
                Egg lncubator
                <img class="right" src="https://d1td2c8hf7fv9k.cloudfront.net/guaizhao.png" />
            </div>
            <p>Put in the egg start hatching your own beast</p>

            <!-- box -->
            <div class="container">
                <!--最外边框 -->
                <div class="eggcontainer">
                    <!-- 金色边框线 -->
                    <div class="borderline">
                        <div class="number">NO.1</div>
                        <!-- 顶部金色圆角 -->
                        <div class="goldenfillet"></div>
                        <!-- 最底层覆盖，显示上右边框 -->
                        <div class="cover"></div>
                        <!-- 最高层级 -->
                        <div class="allcover"></div>
                        <!-- 角色 -->
                        <div class="role"></div>
                        <div class="timeButton">
                            <div class="time">05:12:45</div>
                            <div class="roleButton">Cancel</div>
                        </div>
                    </div>
                </div>
                <div class="eggcontainer">
                    <!-- 金色边框线 -->
                    <div class="borderline">
                        <div class="number">NO.2</div>
                        <!-- 顶部金色圆角 -->
                        <div class="goldenfillet"></div>
                        <!-- 最底层覆盖，显示上右边框 -->
                        <div class="cover"></div>
                        <!-- 最高层级 -->
                        <div class="allcover"></div>
                        <!-- 角色 -->
                        <div class="role"></div>
                        <div class="timeButton">
                            <div class="time">Completed!!!</div>
                            <div class="roleButton">Cancel</div>
                        </div>
                    </div>
                </div>
                <div class="eggcontainer">
                    <!-- 金色边框线 -->
                    <div class="borderline">
                        <div class="number">NO.3</div>
                        <!-- 顶部金色圆角 -->
                        <div class="goldenfillet"></div>
                        <!-- 最底层覆盖，显示上右边框 -->
                        <div class="cover"></div>
                        <!-- 最高层级 -->
                        <div class="allcover"></div>
                        <!-- 增加 -->
                        <div class="add">
                            <!-- 加 -->
                            <div class="tranver">
                                <div class="transverse"></div>
                                <div class="vertical"></div>
                            </div>
                        </div>
                        <div class="slogan">Please add the egg</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- the egg -->
        <div class="theEgg">
            <!-- 边框线 -->
            <div class="border">
                <div class="eggsbox">
                    <!-- left -->
                    <div class="eggbox">
                        <div class="eggs"></div>
                        <div class="eggs"></div>
                        <div class="eggs"></div>
                        <div class="eggs"></div>
                        <div class="eggs"></div>
                        <div class="eggs"></div>
                        <div class="eggs"></div>
                        <div class="eggs"></div>
                        <div class="eggs"></div>
                        <div class="eggs"></div>
                        <div class="eggs"></div>
                        <div class="eggs"></div>
                    </div>
                    <div class="scrllbar">
                        <div class="totop">></div>
                        <div class="scrllblock">
                            <div class="horizontal"></div>
                            <div class="horizontal"></div>
                            <div class="horizontal"></div>
                            <div class="horizontal"></div>
                        </div>
                        <div class="tobottom">></div>
                    </div>
                </div>
                <div class="eggsboxname">
                    <div class="text">Name: &nbsp The egg (Red)</div>
                    <div class="text">type: &nbsp &nbsp &nbsp <sapn class="textspan">Rare</sapn></div>
                    <div class="text">ability: &nbsp &nbsp &nbsp <span class="textspan">After incubating for 10 hours.you can acquire a mythical beast</span></div>
                    <div class="text">introduce: &nbsp <span class="textspan">A do not know when to want to be between heaven and earth god beast egg.no one knows what willl hatch from inside.only constantly nourish ts growth.will eventually reveal the true face of god beast.</span></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import store from '@/store'
import { computed, readonly, ref, provide, inject, onMounted, onUnmounted, onBeforeMount, onBeforeUnmount, onActivated, onDeactivated, onErrorCaptured } from 'vue'
import { useRouter } from 'vue-router'
import { Moralis, getNativeBalance, getTokenBalances, getNFTOwners, getAllTokenIds, getNFTs, transfer, callCloud, addListing } from '@/tools/moralis'
import { log } from 'console'

const one:any=()=>{
    console.log(1111);
    
}
const router = useRouter()
const toHome: any = () => {
    router.push({ path: `/` })
}
const toWiki: any = () => {
    window.open('https://wiki.hbeasts.com/')
}
const toMarket: any = () => {
    // window.open('https://test2.pryun.vip/home');
    router.push({ path: `/comingSoon` })
}
const toPdf: any = () => {
    window.open('https://game.hbeasts.com/design.pdf')
}
const toSub: any = () => {
    window.open('https://70iaogphcx0.typeform.com/to/Cl2GH4Gt')
}
const toAirdrop: any = () => {
    router.push({ path: `/airdrop` })
}
const toEgg: any = () => {
    router.push({ path: `/egg` })
}
let id = ref('')
let right = ref(1)
const chatContent = ref(null)
const demo1 = ref(null) as any

const connect: any = (type: any) => {
    if (type) {
        id.value = type.attributes.ethAddress
        let len = id.value.length - 1
        id.value = id.value[0] + id.value[1] + id.value[2] + id.value[3] + id.value[4] + id.value[5] + '*****' + id.value[len - 3] + id.value[len - 2] + id.value[len - 1] + id.value[len]
        return
    }
    Moralis.authenticate().then((res: any) => {
        console.log(res, '钱包登陆成功--------')
        id.value = res.attributes.ethAddress
        let len = id.value.length - 1
        id.value = id.value[0] + id.value[1] + id.value[2] + id.value[3] + id.value[4] + id.value[5] + '*****' + id.value[len - 3] + id.value[len - 2] + id.value[len - 1] + id.value[len]
    })
}

let test: any

// const Marquee: any = () => {
//     var speed = 20;
//     // const width = computed(() => demo1._rawValue.clientWidth)
//     // console.log(width);
//     function Marquee() {
//         right.value += 2;
//         if (right.value > demo1?._rawValue.clientWidth * 2 - document.body?.clientWidth) {
//             right.value = demo1?._rawValue.clientWidth - document.body?.clientWidth;
//         }
//     }
//     test = setInterval(Marquee, speed);
//     store.dispatch('user/setTime', test)
// }
const mouseScenes: any = () => {
    // clearInterval(test)
    store.dispatch('user/clearTime')
    test = null
}
// const mouseover: any = () => {
//     if (!store.state.user?.time) Marquee();
// }

// onMounted(() => {

//     right.value = 0
//     // console.log(right.value)
//     setTimeout(() => {
//         // Marquee();
//     }, 2000)
//     Moralis.User.currentAsync()
//         .then((res: any) => {
//             // console.log(res, 'succes')
//             if (res) connect(res)
//         })
//         .catch((res: any) => {
//             console.log(res, 'err')
//         })
//     // console.log(store.state.user?.time, 'time')
// })

onUnmounted(() => {
    store.dispatch('user/clearTime')
    test = null
})

onBeforeUnmount(() => {
    // ...
    console.log('onBeforeUnmount')
})
// scrollToBottom() {
//             this.$nextTick(() =>{
//                 this.$refs.chatContent.scrollTop = this.$refs.chatContent.scrollHeight;
//             })
//         }
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
@keyframes fadeInLeft {
    0% {
        opacity: 0;
        -webkit-transform: translateX(-80px);
        -ms-transform: translateX(-80px);
        transform: translateX(-80px);
    }
    100% {
        opacity: 1;
        -webkit-transform: translateX(0);
        -ms-transform: translateX(0);
        transform: translateX(0);
    }
}
@keyframes fadeInRight {
    0% {
        opacity: 0;
        -webkit-transform: translateX(80px);
        -ms-transform: translateX(80px);
        transform: translateX(80px);
    }
    100% {
        opacity: 1;
        -webkit-transform: translateX(0);
        -ms-transform: translateX(0);
        transform: translateX(0);
    }
}
.left {
    animation: fadeInLeft 0.5s linear;
}
.right {
    animation: fadeInRight 0.5s linear;
}
.home {
    background-image: url('https://d1td2c8hf7fv9k.cloudfront.net/0-2.jpg');
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
    animation: fadeInDown 0.8s linear;

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
    color: rgba(102, 29, 29, 0.5);
    backdrop-filter: blur(20px);
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
.market {
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
    animation: fadeInLeft 0.8s linear;
    position: relative;
    max-height: 60vh;
    height: 55vh;
    width: 100%;
    .title-content {
        color: rgba(255, 255, 255, 0.5);
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 0.15s;
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
    img {
        width: 90%;
        height: auto;
    }
    .py-3 {
        font-size: 1.5vw;
        line-height: 1.5vw;
        padding-top: 1.5vw;
        padding-bottom: 1.5vw;
    }
}
.home-menu {
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
    .buttons {
        font-size: 1.125rem;
        line-height: 1.75rem;
        align-items: center;
        display: flex;
        color: #ffffff80;
        .menu-btn {
            transition-property: all;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 0.3s;
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
        .menu-position {
            width: 4vw;
        }
        .menu-btn:hover {
            box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.5);
            opacity: 1;
        }
    }
    .menu-icons {
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
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 0.15s;
        }
        .menu-icon img {
            height: 32px;
            max-height: 32px;
        }
        .menu-icon:hover {
            transform: scale(1.2);
        }
    }
}
/////////////////EGG/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
.scenes {
    // display: block !important;
    width: 100%;
    overflow: hidden;
    padding: 8vh 2vw;
    display: flex;
    justify-content: space-around;
    .EGG {
        // width: 60%;
        p {
            padding-left: 1.5vw;
            font-size: 1.5vw;
            font-weight: 600;
            color: #fff;
            display: inline-block;
        }
        // 卡片总大盒子
        .container {
            display: flex;
            padding: 3vw 1vw;
            width: 60vw;
            display: flex;
            justify-content: space-around;
            // display: block;
            // background: red;
            // 卡片----最外边框
            .eggcontainer {
                width: 18vw;
                height: 25vw;
                background: #464155;
                border-radius: 2vw;
                box-shadow: 10px 10px 20px #000;
                display: flex;
                justify-items: auto;

                // background-image: linear-gradient(#424556, #262127);
                .borderline {
                    //金色边框线
                    width: 17vw;
                    height: 24vw;
                    // background: rgb(32,30,31);
                    // background: rgba(255, 255, 255, 1);
                    border-radius: 1.5vw;
                    border: 2px solid #c4af74;
                    box-sizing: border-box;
                    background: rgba(196, 175, 116, 0.2);
                    margin: auto;
                    position: relative;
                    .number {
                        //名次

                        position: absolute;
                        right: 2vw;
                        top: 1vw;
                        color: #fff;
                        font-size: 1.2vw;
                    }
                    .goldenfillet {
                        //金色圆角

                        width: 10vw;
                        height: 6vw;
                        border: 2px solid #c4af74;
                        box-sizing: border-box;
                        background: #404558;
                        // border-top: 0;
                        // border-bottom: 0;
                        border-radius: 1.4vw;
                        position: absolute;
                        top: -2px;
                        left: -2px;
                        z-index: 2;
                    }
                    .cover {
                        //最低层覆盖，显示右上角

                        width: 17vw;
                        height: 21vw;
                        border-radius: 1.5vw;
                        border: 2px solid #c4af74;
                        box-sizing: border-box;
                        position: absolute;
                        bottom: -2px;
                        left: -2px;
                        z-index: 1;
                        background-image: linear-gradient(#424556, #262127);

                        // background: rgb(32, 30, 31);
                    }
                    .allcover {
                        //最高层级

                        width: 16.5vw;
                        height: 20.6vw;
                        border-radius: 1.5vw;
                        // border: 2px solid #c4af74;
                        box-sizing: border-box;
                        position: absolute;
                        bottom: 0.5px;
                        // left: 1px;
                        z-index: 3;
                        background-image: linear-gradient(#424556, #262127);
                    }
                    .role {
                        //角色

                        width: 12vw;
                        height: 12vw;
                        border-radius: 1.5vw;
                        background: brown;
                        position: absolute;
                        left: 50%;
                        top: 5vw;
                        transform: translateX(-6vw);
                        box-shadow: 5px 5px 10px #202126 inset;
                        z-index: 4;
                        background-image: linear-gradient(#424556, #262127);
                    }
                    .add {
                        //角色

                        width: 12vw;
                        height: 12vw;
                        border-radius: 1.5vw;
                        background: black;
                        position: absolute;
                        left: 50%;
                        top: 5vw;
                        transform: translateX(-6vw);
                        box-shadow: 5px 5px 10px #202126 inset;
                        z-index: 4;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        .tranver {
                            width: 3vw;
                            height: 3vw;
                            .transverse {
                                width: 3vw;
                                height: 0.4vw;
                                border-radius: 0.5vw;
                                background: #c1a25c;
                                transform: translateY(1.7vw);
                            }
                            // 竖
                            .vertical {
                                width: 0.4vw;
                                height: 3vw;
                                border-radius: 0.5vw;
                                background: #c1a25c;
                                transform: translateX(1.3vw);
                            }
                        }
                        // 横
                    }
                    .timeButton {
                        width: 100%;
                        height: 6vw;
                        text-align: center;
                        position: absolute;
                        // left: 4.4vw;
                        bottom: 0;
                        z-index: 6;
                        .time {
                            //时间
                            z-index: 6;
                            font-size: 2vw;
                            color: #fff;
                        }
                        .roleButton {
                            width: 7.5vw;
                            height: 2.4vw;
                            text-align: center;
                            cursor: pointer;
                            line-height: 2.4vw;
                            border-radius: 0.4vw;
                            background: rgba(45, 86, 143,.6);
                            color: #fff;
                            transform: translateX(60%);
                            margin-top: 2vh;
                            font-size: 1.6vw;
                            z-index: 6;
                        }
                        .roleButton:hover {
            box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.5);
            background: rgb(45, 86, 143);
            opacity: 1;
        }
                    }
                    .slogan {
                        width: 100%;
                        height: 6vw;
                        line-height: 6vw;
                        text-align: center;
                        position: absolute;
                        bottom: 0;
                        z-index: 6;
                        color: #fff;
                        font-size: 1.3vw;
                    }
                }
            }
        }
    }
    .theEgg {
        width: 50vw;
        height: 36.7vw;
        margin-top: 4vw;
        background: #464155;
        border-radius: 2vw;
        .border {
            width: 31.5vw;
            height: 35.7vw;
            background: #31302e;
            border-radius: 1.5vw;
            border: 2px solid #c4af74;
            box-sizing: border-box;
            margin: auto;
            margin-top: 0.5vw;
            .eggsbox {
                width: 30.5vw;
                height: 55%;
                background: #3f3830;
                border-radius: 1vw;
                box-sizing: border-box;
                margin: auto;
                margin-top: 0.5vw;
                box-shadow: 5px 5px 5px #202126 inset;
                padding: 0.5vw;
                display: flex;
                .eggbox {
                    width: 94%;
                    height: 100%;
                    display: flex;
                    // justify-content: space-between;
                    flex-wrap: wrap;
                    .eggs {
                        width: 21%;
                        height: 27%;
                        background: #746637;
                        border-radius: 0.5vw;
                        box-shadow: 2px 2px 5px black inset;
                        margin: 0.5vw;
                    }
                }
                .scrllbar {
                    width: 6%;
                    height: 90%;
                    background: #bc9e55;
                    margin-top: 3%;
                    border-radius: 5vw;
                    position: relative;
                    .totop {
                        width: 100%;
                        height: 11%;
                        transform: rotate(-90deg);
                        position: absolute;
                        top: 0;
                        text-align: center;
                        border-radius-top: 5vw;
                        font-size: 1.5vw;
                        box-shadow: 5px 0px 6px #3f3830 inset;
                    }
                    .tobottom {
                        position: absolute;
                        bottom: 0;
                        width: 100%;
                        height: 11%;
                        font-size: 1.5vw;
                        transform: rotate(90deg);
                        text-align: center;
                        box-shadow: 5px 0px 6px #3f3830 inset;
                    }
                    .scrllblock {
                        width: 120%;
                        height: 20%;
                        background-image: linear-gradient(#d0b75b, #3f3830);
                        position: absolute;
                        top: 40%;
                        left: -9%;
                        box-shadow: 0px 2px 3px #3f3830, 0px -5px 6px #3f3830;
                        border-radius: 0.5vw;
                        // position: relative;
                        .horizontal {
                            width: 60%;
                            height: 5%;
                            background: #302a18;
                            // position: absolute;
                            // left: 21%;
                            margin-left: 21%;
                            margin-top: 0.5vw;
                        }
                    }
                    // margin: .5vw;
                }
            }
            .eggsboxname{
                height: 45%;
                padding: 1vw;
                .text{
                    font-size: 1.1vw;
                    color: #fff;
                    margin-top: .4vw;
                    display: flex;
                    .textspan{
                        font-size: .1vw;
                        // background: red;
                        // display: inline-block;
                    }
                }
            }
        }
    }

    & > div {
        width: 100%;
    }
    .title {
        height: 23%;
        font-size: 3vw;
        font-weight: 600;
        line-height: 23%;
        display: flex;
        align-items: center;
        // justify-content: center;
        color: #fff;
        position: relative;
        .left,
        .right {
            width: 30px;
            margin: 0 1vw;
        }
        .right {
            -moz-transform: scaleX(-1);
            -webkit-transform: scaleX(-1);
            -o-transform: scaleX(-1);
            transform: scaleX(-1);
            /*兼容IE*/
            filter: FlipH;
        }
    }
    .title:first-child {
        height: 27%;
    }
}
.scenes_content {
    height: 50%;
    width: 2000% !important;
    min-height: 300px;
    display: flex;
    position: relative;
    .demo1 {
        // width: 100%;
        height: 100%;
    }
    .demo2 {
        // width: 100%;
        height: 100%;
    }
    img {
        height: 100%;
        margin-right: 10px;
    }
}

.scenes {
    // height: 100vh;
    background-color: #232736;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // position: relative;
}
</style>
