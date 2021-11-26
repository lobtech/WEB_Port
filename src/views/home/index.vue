<template>
    <div class="home">
        <div class="main">
            <!-- 左上角标题 -->
            <div class="title">
                <img src="@/assets/image/legend.png" alt="" />
                <div class="declaration">Born for the <span style="color: #ff050d">Territory</span></div>
            </div>
            <!-- 右下角按钮 -->
            <div class="menu">
                <div class="btns">
                    <div class="btn">READ LITEPAPER</div>
                    <div style="width: 60px"></div>
                    <div class="btn">SUBSCRIBE</div>
                </div>
                <div class="other">
                    <div class="icon">
                        <img src="@/assets/image/twitter.png" alt="" />
                    </div>
                    <div class="icon">
                        <img src="@/assets/image/discord.png" alt="" />
                    </div>
                    <div class="icon">
                        <img src="@/assets/image/instagram.png" alt="" />
                    </div>
                    <div class="icon">
                        <img src="@/assets/image/facebook.png" alt="" />
                    </div>
                    <div class="icon">
                        <img src="@/assets/image/telegram.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <!-- 预售 -->
        <div class="presell" v-if="0">
            <div class="flex items-center justify-center title">● <span style="font-size: 40px; padding: 0 20px"> Presell </span> ●</div>
            <div class="eggs">
                <div class="flex items-center justify-center title" @click="initEggs">Eggs Sell</div>
                <div class="list">
                    <div class="flex items-center justify-center item" v-for="(item, index) in eggs_list" :key="index">
                        <div class="flex items-center justify-center img"><img src="../../assets/image/logo.png" alt="" /></div>
                        <div class="name">{{ item.name }}</div>
                        <div class="flex items-center sell">
                            <div class="selled" :style="[Style_selled(item.residue_num, item.total)]"></div>
                            <div class="selled-right-span" :style="[Style_selled(item.residue_num, item.total)]"></div>
                            <div class="sell-scale">{{ item.residue_num }}/{{ item.total }}</div>
                            <div class="flex items-center is-sell">
                                <span style="width: 60px">{{ item.isSell ? 'On Sell' : 'Unlock' }} </span>
                                <template v-if="item.isSell">
                                    <svg class="z-icon" aria-hidden="true">
                                        <use xlink:href="#z-icon-unlock"></use>
                                    </svg>
                                </template>
                                <template v-else>
                                    <svg class="z-icon" aria-hidden="true">
                                        <use xlink:href="#z-icon-lock"></use>
                                    </svg>
                                </template>
                            </div>
                            <div class="countdown">{{ Countdown(item.sell_time) }}</div>
                        </div>
                        <div class="flex items-center justify-center price">
                            <img src="../../assets/image/sell.png" alt="" />
                            <div>{{ item.price }} ELBT</div>
                        </div>
                        <div v-if="item.isSell && item.residue_num > 0" class="flex items-center justify-center buy">To Buy</div>
                        <div v-else class="flex items-center justify-center buy" style="background-color: rgba(0, 0, 0, 0)"></div>
                    </div>
                </div>
            </div>
            <div class="houses">
                <div class="flex items-center justify-center title">Houses Sell</div>
                <div class="list">
                    <div class="item" v-for="(item, index) in houses_list" :key="index">
                        <div class="card">
                            <div class="index">{{ index + 1 }}</div>
                            <div class="img">
                                <img src="@/assets/image/hoses.png" alt="" />
                            </div>
                            <div class="circle"></div>
                            <div class="sell-scale">2000/2000</div>
                            <div class="price">
                                <img src="../../assets/image/sell.png" alt="" />
                                <div>300 ELBT</div>
                            </div>
                        </div>
                        <div class="flex items-center justify-center buy">To Buy</div>
                    </div>
                    <div class="item">
                        <div class="card">
                            <div class="index">{{ houses_list.length + 1 }}</div>
                            <div class="img">
                                <img src="@/assets/image/null.png" alt="" />
                            </div>
                            <div class="circle" style="background: #3a4050"></div>
                            <div class="sell-scale">2000/2000</div>
                            <div class="price">
                                <img src="../../assets/image/sell.png" alt="" />
                                <div>300 ELBT</div>
                            </div>
                        </div>
                        <div class="flex items-center justify-center buy">To Buy</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div style="height: 900px; width: 100%; background-color: #242736"></div>
        <div style="height: 900px; width: 100%; background-color: #173444"></div> -->
    </div>
</template>
<script setup lang="ts">
import getCurrentInstance from '../../hooks/useCurrentInstance'
let { proxy } = getCurrentInstance() // 获取当前实例
import { computed, reactive, ref } from 'vue'
// @ts-ignore 忽略检测
import Moralis from 'moralis/dist/moralis.min.js'

// 蛋
let eggs_list: obj[] = reactive([])
interface obj {
    name: string
    [key: string]: any
}
const initEggs = (): void => {
    eggs_list = [
        { name: 'Round1', residue_num: 2000, total: 2000, isSell: false, price: 0.2, sell_time: '1637403600100' },
        { name: 'Round2', residue_num: 2000, total: 2000, isSell: false, price: 0.2, sell_time: '1637403600100' },
        { name: 'Round3', residue_num: 2000, total: 2000, isSell: false, price: 0.2, sell_time: '1637334000000' },
        { name: 'Round4', residue_num: 2000, total: 2000, isSell: false, price: 0.2, sell_time: '1637404000000' },
        { name: 'Round5', residue_num: 2000, total: 2000, isSell: false, price: 0.2, sell_time: '1637642448000' },
        { name: 'Round6', residue_num: 2000, total: 2000, isSell: false, price: 0.2, sell_time: '1637942425000' },
        { name: 'Round7', residue_num: 2000, total: 2000, isSell: false, price: 0.2, sell_time: '1638201069000' },
        { name: 'Round8', residue_num: 2000, total: 2000, isSell: false, price: 0.2, sell_time: '1688201641000' },
    ]
    setTimeout(() => {
        for (let egg of eggs_list) {
            let num: number = 2000
            let isSell: boolean = false
            if (egg['name'] === 'Round1') {
                num = 0
                isSell = true
            }
            if (egg['name'] === 'Round2') {
                num = 1243
                isSell = true
            }
            if (egg['name'] === 'Round3') {
                num = 467
                isSell = true
            }
            if (egg['name'] === 'Round4') {
                num = 134
                isSell = true
            }
            egg['residue_num'] = num
            egg['isSell'] = isSell
        }
    }, 1000)
}
initEggs()
let houses_list: any = reactive([])
let chain: string = 'bsc testnet' // 测试链
let address: string = '' // 默认地址 0xf55c6be2f9390301bfc66dd9f7f52495b56301dc

const serverUrl = 'https://iryujqeq3c0k.usemoralis.com:2053/server'
const appId = 'pgxFvaT0RRCnC9efXnb6f6Ck9WxudIoscdigwwpU'
Moralis.start({ serverUrl, appId }) // 连接到服务器
//  查询合约全部资产类型
const getAllTokenIds = async (address?: string) => {
    console.log(`---------->查询合约全部资产类型:address`, address)
    const res = await Moralis.Web3API.token.getAllTokenIds({ chain, address })
    for (const item of res.result) {
        item.metadata = JSON.parse(item.metadata)
        // houses_list.value.push(item)
    }
    houses_list.push(...res.result)
    // const length = houses_list.value.length
    // for (let i: any; i <= length; i++) {
    //     console.log(`---------->日志输出:i`, i)
    // }
    // houses_list.value
    console.log(`---------->日志输出:houses_list`, houses_list)
}
getAllTokenIds('0xffec052ee58e1a4d5848a61e7a68a79a94cd5c0e')

// 计算售卖百分比
let Style_selled = computed(() => {
    return function (residue_num: number, total: number) {
        let scale: string = ((Math.max(0, total - residue_num) / total) * 10).toFixed(0)
        let style = { width: `${scale}0%`, 'transition-duration': `${600 + (Number(scale) - 10) * 50}ms` }
        return style
    }
})
let now = ref(new Date().getTime())
setInterval(() => {
    now.value = new Date().getTime()
}, 1000)
// 计算剩余开售时间
let Countdown = computed(() => {
    return function (time: string | number) {
        time = Number(time) - now.value // 剩余时间
        if (time <= 0) return ''
        const s: number = 1000 // 秒
        const m: number = 60 * 1000 // 分
        const h: number = 60 * 60 * 1000 // 时

        let _h: number | string = Math.floor(time / h)
        time = time - _h * h // 计算剩余时间搓
        let _m: number | string = Math.floor(time / m)
        time = time - _m * m // 计算剩余时间搓
        let _s: number | string = Math.floor(time / s)
        _h = _h < 999 ? _h : '???'
        _m = _m < 10 ? `0${_m}` : _m
        _s = _s < 10 ? `0${_s}` : _s
        let str: string = `${_h}:${_m}:${_s}`
        // console.log(`---------->日志输出:str`, str)
        return str
    }
})
</script>
<style scoped>
.home {
    /* min-width: 1200px; */
}

.main {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    /* min-width: 1200px; */
    height: 900px;
}
.main > .title {
    position: absolute;
    top: 200px;
    left: 20%;
    width: 320px;
    color: rgba(255, 255, 255, 0.8);
}
.main > .title > .declaration {
    margin-top: 10px;
    text-align: center;
    font-size: 28px;
    color: rgba(255, 255, 255, 1);
    opacity: 0.6;
}
.main > .menu > .btns {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
}

.main > .menu > .btns > .btn {
    padding: 0 60px;
    height: 64px;
    line-height: 64px;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.8);
    font-size: 22px;
    background-color: #2d60af;
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.5);
    transition-property: all;
    transition-timing-function: ease-out;
    transition-duration: 230ms;
    overflow: hidden;
    opacity: 0.7;
}
.main > .menu > .btns > .btn:hover {
    color: rgba(255, 255, 255, 1);
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.6);
    opacity: 1;
}

.main > .menu {
    position: absolute;
    top: 640px;
    left: 50%;
    transform: translateX(-50%);
}
.main > .menu .other {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;
}
.main > .menu .other > .icon {
    margin: 10px;
    height: 48px;
    width: 48px;
    padding: 8px;
    border-radius: 50%;
    transition-property: all;
    transition-timing-function: ease-out;
    transition-duration: 230ms;
}
.main > .menu .other > .icon:hover {
    cursor: pointer;
    transform: scale(1.2);
}

.presell {
    position: relative;
    background-color: #242736;
    min-width: 1200px;
    color: rgba(255, 255, 255, 0.5);
}
.presell > .title {
    height: 80px;
    font-size: 28px;
    color: #ffffff;
}
.presell > .eggs {
    padding: 20px;
    width: 80%;
    margin: auto;
    background-color: #282b3a;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.1);
}
.presell > .eggs > .title {
    height: 80px;
    font-size: 28px;
    color: #ffffff;
}
.presell > .eggs > .list > .list > .item {
    margin: auto;
    width: 800px;
    height: 80px;
    color: rgba(255, 255, 255, 0.8);
}
.presell > .eggs > .list > .item > .img {
    height: 50px;
    width: 50px;
}
.presell > .eggs > .list > .item > .name {
    padding: 0 10px;
}
.presell > .eggs > .list > .item > .sell {
    position: relative;
    width: 300px;
    height: 36px;
    border-radius: 16px;
    background-color: #3a4050;
    overflow: hidden;
}
.presell > .eggs > .list > .item > .sell > .selled {
    position: relative;
    height: 36px;
    border-radius: 15px;
    background: linear-gradient(to right, #01e7ff, #9162fe);
    transition: all ease-out 500ms;
    z-index: 9;
}
.presell > .eggs > .list > .item > .sell > .selled-right-span {
    position: absolute;
    left: 10px;
    top: -6px;
    height: 48px;
    border-radius: 23px;
    background: #282b3a;
    transition: all ease-out 500ms;
    z-index: 1;
}
.presell > .eggs > .list > .item > .sell > .sell-scale {
    position: absolute;
    left: 0;
    top: 0;
    height: 36px;
    line-height: 36px;
    width: 100px;
    padding: 0 10px;
    z-index: 99;
}
.presell > .eggs > .list > .item > .sell > .is-sell {
    position: absolute;
    left: 100px;
    top: 0;
    height: 36px;
    line-height: 36px;
    width: 110px;
    padding: 0 10px;
    z-index: 99;
}
.presell > .eggs > .list > .item > .sell > .is-sell > .z-icon {
    margin-left: 5px;
    font-size: 24px;
    color: rgba(255, 255, 255, 0.8);
}
.presell > .eggs > .list > .item > .sell > .countdown {
    position: absolute;
    right: 0;
    top: 0;
    height: 36px;
    line-height: 36px;
    width: 90px;
    text-align: right;
    padding: 0 10px;
    z-index: 99;
}
.presell > .eggs > .list > .item > .price {
    width: 160px;
    padding: 0 10px;
    font-size: 18px;
    font-weight: bolder;
}
.presell > .eggs > .list > .item > .price > img {
    width: 60px;
    height: 60px;
}
.presell > .eggs > .list > .item > .buy {
    height: 40px;
    width: 100px;
    border-radius: 12px;
    background-color: #2d5791;
    font-size: 18px;
    transition: all ease-out 230ms;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.8);
}
.presell > .eggs > .list > .item > .buy:hover {
    background-color: #0f3b75;
    color: rgba(255, 255, 255, 1);
}
.presell > .houses {
    padding: 20px;
    width: 80%;
    margin: 50px auto 0;
    background-color: #282b3a;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.presell > .houses > .title {
    height: 80px;
    font-size: 28px;
    color: #ffffff;
}
.presell > .houses > .list {
    display: flex;
    justify-content: center;
    width: 100%;
}
.presell > .houses > .list > .item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.presell > .houses > .list > .item > .card {
    position: relative;
    color: rgba(255, 255, 255, 0.8);
    margin: 10px;
    height: 320px;
    width: 200px;
    border-radius: 6px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
}

.presell > .houses > .list > .item > .card > .index {
    position: absolute;
    left: 10px;
    top: 10px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #617da4;
    color: rgba(255, 255, 255, 0.8);
    text-align: center;
    line-height: 20px;
}
.presell > .houses > .list > .item > .card > .img {
    height: 160px;
    padding: 20px;
    overflow: hidden;
    img {
        height: 100%;
    }
}
.presell > .houses > .list > .item > .card > .circle {
    transition: all 230ms ease-out;
    width: 100px;
    height: 100px;
    background: conic-gradient(#9260fd, #00e8ff, #9260fd);
    border-radius: 50%;
    mask: radial-gradient(transparent 40px, #000 40px);
}
.presell > .houses > .list > .item > .card > .sell-scale {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.presell > .houses > .list > .item > .card > .price {
    height: 40px;
    display: flex;
    align-items: center;
}
.presell > .houses > .list > .item > .card > .price > img {
    height: 32px;
}
.presell > .houses > .list > .item > .buy {
    height: 40px;
    width: 100px;
    border-radius: 12px;
    background-color: #2d5791;
    font-size: 18px;
    transition: all ease-out 230ms;
    color: rgba(255, 255, 255, 0.8);
    cursor: pointer;
}

.presell > .houses > .list > .item > .buy:hover {
    background-color: #0f3b75;
    color: rgba(255, 255, 255, 1);
}
</style>
