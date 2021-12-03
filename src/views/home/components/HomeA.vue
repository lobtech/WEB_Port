<template>
    <div class="title">
        <!-- <div class="title-logo">
            <img src="../../../assets/image/logo.png" alt="" />
        </div> -->
        <div class="title-logo">
            <div class="menu">
                <div class="item">Home</div>
                <div class="span"></div>
                <div class="item" @click="toMarket">Market</div>
                <div class="span"></div>
                <div class="item" @click="toWiki">Wiki</div>
            </div>
        </div>
        <!-- <div class="title-text">{{ title }}</div> -->
        <div class="title-right">
            <div class="tips" @click="connect(false)">{{ id || 'connect to wallet'}}</div>
        </div>
    </div>
    <div class="relative home">
        <!-- 左上角标题 -->
        <div class="home-title">
            <div class="title-content">
                <img src="@/assets/image/legend.png" alt="" />
                <div class="py-3 text-xl">Born for the <span style="color: #fff; font-weight: bold;">Territory</span></div>
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
                <div class="menu-icon">
                    <a href="https://twitter.com/legendofbeasts" target="view_window">
                        <img src="@/assets/image/twitter.png" alt="" />
                    </a>
                </div>
                <div class="menu-icon">
                    <a href="https://discord.gg/Rp73r49htu" target="view_window">
                        <img src="@/assets/image/discord.png" alt="" />
                    </a>
                </div>
                <div class="menu-icon">
                    <a href="https://www.instagram.com/legendofbeasts/" target="view_window">
                        <img src="@/assets/image/instagram.png" alt="" />
                    </a>
                </div>
                <div class="menu-icon">
                    <a href="https://www.facebook.com/legendofbeasts" target="view_window">
                        <img src="@/assets/image/facebook.png" alt="" />
                    </a>
                </div>
                <div class="menu-icon">
                     <a href="https://t.me/joinchat/PvFvoyL5A904NGY1" target="view_window">
                        <img src="@/assets/image/telegram.png" alt="" />
                    </a>
                </div>
            </div>
        </div>
        <!-- <div style="background-color: aqua; height: 600px; width: 50%"></div>
        <div style="background-color: rgb(55, 65, 65); height: 600px; width: 50%"></div>
        <div style="background-color: rgb(175, 138, 58); height: 600px; width: 50%"></div> -->
    </div>
    <!-- 轮播走马灯 -->
    <div class="scenes">
        <div class="title">
            <img class="left" src="@/assets/image/guaizhao.png" alt="">
            RRICH WORLD STRUCTURE
            <img class="right" src="@/assets/image/guaizhao.png" alt="">
        </div>
        <div class="scenes_content" ref="chatContent" :style="{'right': right + 'px'}">
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
         <div class="title2">
            <!-- <img class="left" src="@/assets/image/guaizhao.png" alt=""> -->
            3D-NFT game that supports VR
            <!-- <img class="right" src="@/assets/image/guaizhao.png" alt=""> -->
        </div>
         <div class="video-content">
            <img src="../../../assets/image/112_02.png" alt="">
            <iframe class="iframe" src="https://www.youtube.com/embed/8C4IM3Q7Wjc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
    <!-- token-omics -->
    <div class="token-omics">
        <div class="token-content">
            <h2>TOKENOMICS</h2>
            <div>
                <div class="table">
                    <div>Type</div>
                    <div>Number</div>
                    <div>Proportion</div>
                </div>
                <div class="content">
                    <div>Public Sale</div>
                    <div>5,400,000</div>
                    <div>18%</div>
                </div>
                <div class="content">
                    <div>Team and Advisor</div>
                    <div>3,000,000</div>
                    <div>10%</div>
                </div>
                <div class="content">
                    <div>Community</div>
                    <div>3,000,000</div>
                    <div>10%</div>
                </div>
                <div class="content">
                    <div>In Game</div>
                    <div>6,900,000</div>
                    <div>23%</div>
                </div>
                <div class="content">
                    <div>Reserve</div>
                    <div>3,300,000</div>
                    <div>11%</div>
                </div>
                <div class="content">
                    <div>Ecosystem</div>
                    <div>6,000,000</div>
                    <div>20%</div>
                </div>
                <div class="content">
                    <div>User</div>
                    <div>2,400,000</div>
                    <div>8%</div>
                </div>
                <div class="content">
                    <div>Total</div>
                    <div>30,000,000</div>
                    <div>100%</div>
                </div>
            </div>
        </div>
    </div>
    <!-- ROAD MAP -->
    <div class="road-map">
        <div class="road-content">
            <h1>ROAD MAP</h1>
            <div class="content">
                <div class="item">
                    <h3>2021.9 concept</h3>
                    <div class="bold"></div>
                    <ul>
                        <li>Build the Team</li>
                        <li>Social media build</li>
                        <li>Game world design</li>
                        <li>Casual social attributes</li>
                    </ul>
                </div>
                <div class="item">
                    <h3>2022.11 Ready</h3>
                    <div class="bold"></div>
                    <ul>
                        <li>Official website</li>
                        <li>Online White paper release</li>
                        <li>Novel story release</li>
                        <li>Game Demo</li>
                        <li>Cooperative agency</li>
                        <li>Number of 2000 users</li>
                    </ul>
                </div>
                <div class="item">
                    <h3>2022.1 Pre-sale</h3>
                    <div class="bold"></div>
                    <ul>
                        <li>Game Map online</li>
                        <li>Number of 5000 user</li>
                        <li>NFT Marketing online</li>
                        <li>Sample Room Demo</li>
                        <li>Multiplayer interaction</li>
                    </ul>
                </div>
                <div class="item">
                    <h3>2022.3 Launch</h3>
                    <div class="bold"></div>
                    <ul>
                        <li>Game asset system online</li>
                        <li>Career system online</li>
                        <li>NFT Mortgage lease and sale function</li>
                        <li>Number of 15000  users</li>
                    </ul>
                </div>
                <div class="item">
                    <h3>2022.5 maintenance</h3>
                    <div class="bold"></div>
                    <ul>
                        <li>Content operation</li>
                        <li>Life cycle management</li>
                        <li>Ready for the PVP stage</li>
                    </ul>
                </div>
            </div>
        </div> 
    </div>
    <!-- Team -->
    <div class="team">
        <div class="team-content">
            <h1>TEAM</h1>
            <div class="content">
                <div class="item">
                    <div class="head">
                        <img src="../../../assets/image/4..png" alt="">
                        <h2>CEO</h2>
                    </div>
                    <div class="text">
                        <h2>Feng Cheng</h2>
                        <span>Former Huawei manager have 5 years global working Experience, with rich project experience in the field of software development and product management.</span>
                    </div>
                </div>
                <div class="item">
                    <div class="head">
                        <img src="../../../assets/image/6.png" alt="">
                        <h2>CEO</h2>
                    </div>
                    <div class="text">
                        <h2>Frank</h2>
                        <span>Deep understanding of financial regulations and cryptocurrencies, have professional user scene In the game field</span>
                    </div>
                </div>
                <div class="item">
                    <div class="head">
                        <img src="../../../assets/image/7.png" alt="">
                        <h2>Visual director</h2>
                    </div>
                    <div class="text">
                        <h2>Jack</h2>
                        <span>Former gameloft game planner, good at realistic character depiction and detailed control, able to guide any style of game</span>
                    </div>
                </div>
                <div class="item">
                    <div class="head">
                        <img src="../../../assets/image/3..png" alt="">
                        <h2>CTO</h2>
                    </div>
                    <div class="text">
                        <h2>Shreyas Vasuki</h2>
                        <span>with rich programming skills and problem-solving skills, familiar with blockchain application development.</span>
                    </div>
                </div>
                <div class="item">
                    <div class="head">
                        <img src="../../../assets/image/5.png" alt="">
                        <h2>CMO</h2>
                    </div>
                    <div class="text">
                        <h2>Roll</h2>
                        <span>has more than 4 years of working experience in cryptocurrency exchanges, have unique brand version and market experience.</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { computed, readonly, ref, provide, inject, onMounted } from 'vue'
import { Moralis, getNativeBalance, getTokenBalances, getNFTOwners, getAllTokenIds, getNFTs, transfer, callCloud, addListing } from '@/tools/moralis';

// import Moralis from 'moralis/dist/moralis.min.js'
const id = ref("")
const right = ref(1)
const demo1 = ref(null) as any;
const title = inject('title') as string // 菜单标题
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
const toWiki: any = () => {
    window.open('https://wiki.hbeasts.com/');
}
const toMarket: any = () => {
    window.open('https://test2.pryun.vip/home');
}
const toPdf: any = () => {
    window.open('https://www.hbeasts.com/design.pdf');
}
const toSub: any = () => {
    window.open('https://70iaogphcx0.typeform.com/to/Cl2GH4Gt');
}
const Marquee: any = () => {
    var speed = 20;    
    // const width = computed(() => demo1._rawValue.clientWidth)
    // console.log(width);
    function Marquee(){
        right.value+=2;
        if(right.value > demo1._rawValue.clientWidth * 2 - document.body.clientWidth){
            right.value = demo1._rawValue.clientWidth - document.body.clientWidth;
        }
    }
    test = setInterval(Marquee,speed);
}

onMounted(()=>{
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
</script>

<style scoped lang="less">
.home {
    overflow: auto;
    background-image: url('@/assets/image/moble_bg.jpg');
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
    z-index: 99900;
}
.title-logo {
    
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
.home-title {
    position: relative;
    max-height: 60vh;
    height: 60vh;
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
        width: 248px;
        height: 80px;
        max-height: 80px;
        flex-wrap: wrap;
        padding: 8px;
        padding-left: 12px;
        padding-right: 12px;
        margin: auto;
    }
    img{
        max-width: 90%;
        height: auto;
    }
    .py-3{
        margin-top: 6vw;
        font-size: 5vw;
        line-height: 1.5vw;
        padding-top: 1.5vw;
        padding-bottom: 1.5vw;
    }
}
.home-menu{
    width: 100%;
    padding-top: 6vh;
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
            padding: 6px 40px;
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
    height: 100vh;
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
        z-index: 0;
        background-color: #232736 !important;
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
    width: 13000px !important;
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
    height: 60vh;
    background-color: #232736;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .title2{
        font-size: 3vw;
        font-weight: 600;
        color: #fff;
        position: absolute;
        top: 3vh;
    }
    .video-content{
        width: 100%;
        height: 63.75vw;
        position: relative;
        img{
            width: 148px;
            max-width: 148px;
            min-width: 148px;
            height: 20px;
            max-height: 45px;
            min-height: 40px;
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
    height: 100vh;
    background-color: #232736;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .token-content{
        h2{
            font-size: 8vw;
            margin-bottom: 10vw;

        }
        color: #fff;
        .table,
        .content{
            width: 90vw;
            display: flex;
            align-items: center;
            div{
                border: 1px solid #333;
                width: 33.33%;
                padding: 6px 0;
                text-align: center;
            }
        }
        .table > div:first-child,
        .content > div:first-child{
            width: 50%;
        }
    }
}
.road-map{
    min-height: 100vh;
    background-color: #232736;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    color: #fff;
    .road-content{
        width: 90%;
        h1{
            font-size: 8vw;
            margin-bottom: 10vw;
        }
        .content{
            width: 100%;
            .item{
                min-height: 100px;
                padding-left: 10vw;
                padding-bottom: 2vh;
                position: relative;
                h3{
                    font-size: 6vw;
                    margin-bottom: 1vw;
                }
                .bold{
                    position: absolute;
                    left: 0;
                    top: 0;
                    border-radius: 50%;
                    background-color: #fff;
                    width: 5vw;
                    height: 5vw;
                }
                ul{
                    list-style: outside;
                    padding-left: 5vw;
                }
            }
            .item:not(:last-child)::before{
                content: "";
                position: absolute;
                left: 2.3vw;
                height: 100%;
                border: 1px dashed #fff;
            }
        }
    }
}
.team{
    min-height: 100vh;
    background-color: #232736;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    color: #fff; 
     .team-content{
        width: 90%;
        h1{
            font-size: 8vw;
            margin-bottom: 10vw;
        }
        .content{
            width: 100%;
            .item{
                display: flex;
                margin-bottom: 2vw;
                .head{
                    width: 20%;
                    img{
                        width: 100%;
                    }
                    h2{
                        text-align: center;
                        font-size: 1vw;
                    }
                }
                .text{
                    width: 80%;
                    padding: 1vw;
                    h2{
                        font-size: 7vw;
                    }
                    span{
                        font-size: 1vw;
                    }
                }
            }
        }
     }
}
</style>
