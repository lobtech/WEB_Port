<template>
    <div class="h-full absolute left-0 top-0 w-full home">
        <!-- 左上角标题 -->
        <div class="relative home-title">
            <div class="h-40 flex flex-wrap justify-center items-center absolute left-0 right-0 top-0 bottom-0 m-auto md:right-1/4 xl:right-1/2 w-64 p-4 px-6 transform md:scale-125 xl:scale-150 transition-all title-content">
                <img src="@/assets/image/legend.png" alt="" />
                <div class="py-3 text-xl">Born for the <span style="color: #ff050d">Territory</span></div>
            </div>
        </div>
        <div class="relative flex flex-col items-center overflow-hidden transform home-menu">
            <div class="flex p- items-center text-base md:text-lg xl:text-2xl">
                <div class="transition-all menu-btn">READ LITEPAPER</div>
                <div class="w-10 md:w-12 xl:w-16"></div>
                <div class="transition-all menu-btn">SUBSCRIBE</div>
            </div>
            <div class="flex mt-5 justify-center items-center scale-75 md:scale-90 xl:scale-100">
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
        <div>
            <!-- 右下角按钮 -->
        </div>
        <!-- 预售 -->
        <div class="presell" v-if="false">
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
    </div>
</template>
<script setup lang="ts">
import getCurrentInstance from '../../hooks/useCurrentInstance'
let { proxy } = getCurrentInstance() // 获取当前实例
import { computed, onMounted, reactive, ref } from 'vue'
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
onMounted(() => {
    Moralis.start({ serverUrl, appId }) // 连接到服务器
    getAllTokenIds('0xffec052ee58e1a4d5848a61e7a68a79a94cd5c0e')
})
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
    min-height: 90vh;
}
.home-title {
    min-height: 60vh;
    color: rgba(255, 255, 255, 0.5);
}
.home-menu {
    padding-top: 100px;
    min-height: 30vh;
    color: rgba(255, 255, 255, 0.5);
}
.menu-btn {
    padding: 10px 20px;
    background-color: #2d60af;
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.4);
    opacity: 0.7;
}
.menu-btn:hover {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.5);
    opacity: 1;
}
.menu-icon {
    height: 48px;
    width: 48px;
    margin: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.menu-icon > img {
    height: 32px;
}
.menu-icon:hover {
    transform: scale(1.2);
}
</style>
