<template>
    <div class="test">
        <div class="content">
            <div @click="login">登录</div>
            <div @click="getNativeBalance">查询本地余额</div>
            <div @click="getTokenBalances">查询令牌余额</div>
            <div @click="getNFTOwners('0xffec052ee58e1a4d5848a61e7a68a79a94cd5c0e')">查询全部NFT</div>
            <div @click="getAllTokenIds('0xffec052ee58e1a4d5848a61e7a68a79a94cd5c0e')">查询全部类型</div>
            <div @click="getNFTMetadata('0xffec052ee58e1a4d5848a61e7a68a79a94cd5c0e')">获取NFT元信息</div>
            <div @click="getNFTs">获取当前用户资产</div>
            <div @click="logOut">注销登录</div>
        </div>
        <div style="height: 900px; width: 100%; background-color: #243635"></div>
    </div>
</template>
<script setup lang="ts">
import getCurrentInstance from '../../hooks/useCurrentInstance'
let { proxy } = getCurrentInstance() // 获取当前实例

const serverUrl = 'https://iryujqeq3c0k.usemoralis.com:2053/server'
const appId = 'pgxFvaT0RRCnC9efXnb6f6Ck9WxudIoscdigwwpU'
// @ts-ignore 忽略检测
import Moralis from 'moralis/dist/moralis.min.js'
Moralis.start({ serverUrl, appId }) // 连接到服务器

// 默认参数
let chain: any = 'bsc testnet' // 测试链
let address: string = '' // 默认地址 0xf55c6be2f9390301bfc66dd9f7f52495b56301dc
// 登录
async function login() {
    try {
        await logOut()
        let user = await Moralis.User.currentAsync()
        if (!user) {
            console.log(`---------->未登录:user`, user)
            user = await Moralis.authenticate()
            // @ts-ignore 忽略检测
        }
        address = user?.attributes.accounts[0] // 0xf55c6be2f9390301bfc66dd9f7f52495b56301dc
        console.log(`---------->登录成功:${address}`, user)
    } catch (error) {
        console.log(`---------->日志输出:error`, error)
        // proxy.$message.error(error)
    }
}

// 查询本地余额
const getNativeBalance = async () => {
    console.log(`---------->查询本地余额:address`, address)
    const res = await Moralis.Web3API.account.getNativeBalance({ chain, address })
    console.log(`---------->日志输出:res`, res)
}
// 查询令牌余额
const getTokenBalances = async () => {
    console.log(`---------->查询令牌余额:address`, address)
    const res = await Moralis.Web3API.account.getTokenBalances({ chain, address })
    console.log(`---------->日志输出:res`, res)
}
// 查询合约全部资产
const getNFTOwners = async (address: string) => {
    console.log(`---------->查询合约全部资产:address`, address)
    const res = await Moralis.Web3API.token.getNFTOwners({ chain, address })
    console.log(`---------->日志输出:res`, res)
}
//  查询合约全部资产类型
const getAllTokenIds = async (address: string) => {
    console.log(`---------->查询合约全部资产类型:address`, address)
    const res = await Moralis.Web3API.token.getAllTokenIds({ chain, address })
    console.log(`---------->日志输出:res`, res)
}
// 获取资产元信息
const getNFTMetadata = async (address: string) => {
    console.log(`---------->获取资产元信息:address`, address)
    const res = await Moralis.Web3API.token.getNFTMetadata({ chain, address })
    console.log(`---------->日志输出:res`, res)
}
// 获取用户资产
const getNFTs = async () => {
    console.log(`---------->获取用户资产:address`, address)
    const res = await Moralis.Web3API.account.getNFTs({ chain, address })
    console.log(`---------->日志输出:res`, res)
}
// 注销登录
const logOut = async () => {
    console.log(`---------->注销登录:address`, address)
    const res = await Moralis.User.logOut()
    address = ''
    console.log(`---------->日志输出:res`, res)
}
</script>
<style scoped>
.test {
    min-width: 1200px;
}
.content {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 150px;
}
.content > div {
    margin-top: 10px;
    background-color: rgba(2, 217, 255, 0.5);
    padding-left: 20px;
    padding-right: 20px;
    height: 36px;
    display: flex;
    align-items: center;
    border-radius: 6px;
    cursor: pointer;
    transition-property: all;
    transition-duration: 230ms;
    transition-timing-function: ease-out;
}
.content > div:hover {
    color: rgba(255, 255, 255, 1);
    background-color: rgba(2, 217, 255, 1);
}
</style>
