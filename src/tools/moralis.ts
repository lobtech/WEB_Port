import store from '@/store'
// @ts-ignore 忽略检测
import Moralis from 'moralis/dist/moralis.min.js'
// 加载Moralis
const serverUrl = store.state.moralis?.serverUrl
const appId = store.state.moralis?.appId
Moralis.start({ serverUrl, appId }) // 连接到服务器

const chain = store.state.moralis?.chain
const address = '0xF55c6Be2F9390301bFc66Dd9f7f52495B56301dC' || store.state.moralis?.user.accounts
// 查询本地余额
const getNativeBalance = async () => {
    console.log(`---------->查询本地余额:address`, address)
    const res = await Moralis.Web3API.account.getNativeBalance({ chain, address })
    console.log(`---------->日志输出:res`, res)
    return res;
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
    let  address = '0x4A19eFF337a4089d69956fBCd61FD5007a5Ee803'
    console.log(`---------->获取用户资产:address`, address)
    const res = await Moralis.Web3API.account.getNFTs({ chain, address })
    console.log(`---------->日志输出:res`, res)
}
// 转移资产
const transfer = async (contractAddress = '0xc2ca9dbb46a1cda83056b0e4c427c5917d6797a3', receiver = '0x4A19eFF337a4089d69956fBCd61FD5007a5Ee803') => {
    // const { contractAddress = '0xF55c6Be2F9390301bFc66Dd9f7f52495B56301dC', receiver = '0xF55c6Be2F9390301bFc66Dd9f7f52495B56301dC' } = options
    const address = store.state.moralis?.address
    const options = {
        type: 'erc20', // 货币类型['native','erc20','erc721','erc1155'] === ['通用货币','游戏代币','唯一资产','其他多数量资产']
        // amount: Moralis.Units.Token('10', '18'), // 数量（唯一资产没有数量）
        amount: 45, // 数量（唯一资产没有数量）
        receiver, // 交易对象
        contractAddress, // 交易对象所在合约地址
        tokenId: '3', // NFT资产id
    }
    let res = await Moralis.transfer(options)
}

// 请求云函数
const callCloud = async () => {
    const params = { movie: 'The Matrix' }
    const res = await Moralis.Cloud.run('test', params)
    console.log(`---------->日志输出:res`, res)
}
// 上架
const addListing = async () => {
    const params = { movie: 'The Matrix' }
    const res = await Moralis.Cloud.run('test', params)
    console.log(`---------->日志输出:res`, res)
}

export { Moralis, getNativeBalance, getTokenBalances, getNFTOwners, getAllTokenIds, getNFTs, transfer, callCloud, addListing }
