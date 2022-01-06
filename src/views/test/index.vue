<template>
    <div class="container">
       <div>
           <div class="item" @click="stock">stock_mint（mint个数）</div>
           <div class="item" @click="airDropSelect">airDropSelect（查询是否已经领取过了 ）</div>
           <div class="item" @click="setProver">setProver  (获取供应商实例对象)</div>
           <div class="item" @click="mintTo">mintTo  (获取一个蛋)</div>
           <div class="option">蛋蛋的数量: {{ option == -1 ? '你的龙已经孵化了' : option}}</div>
           <div class="item" @click="mintTo">hacting egg (孵化这个蛋)</div>
       </div>
    </div>
</template>

<script lang="ts" setup > 
import { ref, onMounted } from 'vue';
import Web3 from '@/tools/web3';
import { 
    changeNetWork,
    prover,
    _token,
    _updateBalance,
    imgTest
} from '@/tools/test';
const address: any = ref(null)
const option: any = ref(0) as any;
const stock = () => {
    console.log(Web3.stock());
    // Web3.stock()
}

const airDropSelect = () => {
    // Web3.airDropTest.contains()
    Web3.setAirdrop('0xfc6a38DCd922bBbf3707D955B3202D221a2D2FE6', false)
}

const setProver = () => {
    console.log(prover());
    console.log(prover().getSigner(0));
   
}

const mintTo = async () => {
    const token = _token(address.value) //返回合约的账户对象
    console.log(token);
    const tx = await token.mintTo(address.value); //将自己的address传入合约，调取合约的mintTo方法
    console.log(tx, 'tx')
    const receipt = await tx.wait();
    console.log(receipt, 'receipt');
    
    // The receipt, contains a status flag, which is 0 to indicate an error.
    if (receipt.status === 0) {
        // We can't know the exact error that made the transaction fail when it
        // was mined, so we throw this generic one.
        throw new Error("Transaction failed");
    }

    // 如果我们到了这里，交易成功了，所以你可能想
    // 更新你的状态。在这里，我们更新用户的余额。 用计时器去不断的更新领取状态
    await _updateBalance(address.value);
}


async function getAddress(){
    const [selectedAddress] = await (window as any).ethereum.enable();
    address.value = selectedAddress;
    const blance = await _updateBalance(address.value);
    option.value = blance;
}

onMounted(() => {
    changeNetWork()
    getAddress()
    // imgTest()
    
})
</script>

<style scoped lang="less"> 
.container{
    background: linear-gradient(rgb(73, 156, 224), rgb(6, 46, 83));
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .item{
        min-width: 100px;
        border: 2px solid;
        cursor: pointer;
        padding: 10px 20px;
        text-align: center;
        margin-bottom: 19px;
        color: #fff;
    }
    .option{
        color: #fff;
        text-align: center;
        margin-bottom: 19px;
    }
}
</style>