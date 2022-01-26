<template>
    <div class="container">
       <div>
           <div class="item" @click="stock">stock_mint（mint个数）</div>
           <div class="item" @click="airDropSelect">airDropSelect（查询是否已经领取过了 ）</div>
           <div class="item" @click="setProver">setProver  (获取供应商实例对象)</div>
           <div class="item" @click="_transferTokens">mintTo  (获取一个蛋)</div>
           <div class="option" >
                <div v-if="!hacting" class="option">蛋蛋的状态值（-1 为 已经孵化了）: {{ option == -1 ? '你的龙已经孵化了' : option}}</div>
                <div v-else class="option">
                    <p>蛋蛋的状态值（-1 为 已经孵化了）: 你已经有蛋了可以孵化了，点击破壳</p>
                    <p>Egg Option: {{ option }}</p>
                    <p>是否具备破壳条件: true</p>
                    <p>可以破壳的时间为：  {{ readyTime }}</p>
                </div>
                <img v-if="eggImg" :src="eggImg" class="eggimg"/>
                <div></div>
           </div>
           <div class="item" @click="startHatching">startHatching egg (孵化这个蛋)</div>
           <div class="item" @click="breakUp">Break up (破壳出龙)</div>
           <div class="item" v-if="dragonID > 0">
              <h2>Congratz! You've got a mighty Dragon</h2>
              <p>Dragon ID: {{ dragonID || 0}}</p>
           </div>
           <div class="item" @click="updateBalance">_updateBalance (刷新余额状态)</div>
           <div class="item" @click="updateBalance">_updateBalance (刷新余额状态)</div>
           <div class="item" @click="updateBalance">_updateBalance (刷新余额状态)</div>
       </div>
       <div style="margin-left: 30px;">
           <div class="option"><h1 style="font-size: 40px;">Sale: 50% off everything!</h1></div>
           <div class="option"><h1>用LOB购买的盲盒</h1></div>
           <div class="item">
               <span class="cloum"  @click="buyWithLOB(0)">S BOX
               </span>
               <span class="cloum"  @click="buyWithLOB(1)">SS BOX</span>
               <span class="cloum"  @click="buyWithLOB(2)">SSS BOX</span>
               <span class="cloum"  @click="buyWithLOB(3)">Gold Box</span>
               <span class="cloum"  @click="buyWithLOB(4)">Diamond BOX</span>
               <span class="cloum"  @click="buyWithLOB(5)">Normal Box 1</span>
               <span class="cloum"  @click="buyWithLOB(6)">Normal Box 2</span>
           </div>
           <div class="option"><h1>用ETH购买的盲盒</h1></div>
           <div class="item">
               <span class="cloum"  @click="buyWithEther(0)">S BOX</span>
               <span class="cloum"  @click="buyWithEther(1)">SS BOX</span>
               <span class="cloum"  @click="buyWithEther(2)">SSS BOX</span>
               <span class="cloum"  @click="buyWithEther(3)">Gold BOX</span>
               <span class="cloum"  @click="buyWithEther(4)">Diamond BOX</span>
           </div>
       </div>
    </div>
</template>

<script lang="ts" setup> 
import { ref, onMounted, getCurrentInstance, computed } from 'vue';
import Web3 from '@/tools/web3';
import store from '@/store';
import { 
    changeNetWork,
    prover,
    _factory,
    _updateBalance,
    _startHatching,
    _mint,
    _buyWithLOB,
    _buyWithEther,
} from '@/tools/test';


const { proxy } = getCurrentInstance() as any;
const address: any = ref(null); //获取自己的钱包地址
const option: any = ref(0) as any; //状态值
const eggImg: any = ref("") as any;
const dueTime: any = ref('dueTime');
const readyTime: any = ref('readyTime');
let dragonID: any = ref(0) as any;
computed(() => {
    if(address.value){
        console.log('9999999');
    }
})


const stock = () => {
    console.log(Web3.stock());
    // Web3.stock()
}

const hacting = computed(() => store.state.dragon?.hacting)
dragonID = computed(() => store.state.dragon?.dragonID || 0)

const airDropSelect = () => {
    // Web3.airDropTest.contains()
    Web3.setAirdrop('0xfc6a38DCd922bBbf3707D955B3202D221a2D2FE6', false)
}

const setProver = () => {
    console.log(prover());
    console.log(prover().getSigner(0));
}

//领蛋
const _transferTokens = async () => {
   await _mint(address.value)
   getAddress()
}

const updateBalance: any = () => {
    _updateBalance(address.value);
}

const startHatching: any = async () => {
   await _startHatching(option.value);
}

const breakUp: any = () => {
    // _breakUp()
}

// step1 获取地址，并且初始化蛋蛋的状态值 获取蛋蛋的信息
async function getAddress(){
    const [selectedAddress] = await (window as any).ethereum.enable();
    address.value = selectedAddress;
    const blance = await _updateBalance(address.value);
    console.log(blance, 'blance2');
    if(blance == false) {
        option.value = "请领取一个蛋";
    }else{
        option.value = blance.option;
        if(blance.path) {
            getImg(blance.path)
        }
        if(blance.dueTime){
            dueTime.value = blance.dueTimel;
            readyTime.value = blance.readyTime;
        }
    }
    // if(address.value) init(address.value)
}

const getImg: any = (path: any) => {
    path = path.replaceAll("https://assets.hbeasts.com/", "/api")
    proxy.$api.get(`${path}`).then((res: any) => {
        console.log(res);
        eggImg.value = res.image;
    })
}


const buyWithLOB: any = (option: Number) => {
     _buyWithLOB(address.value, option)
}

const buyWithEther: any = (option: Number) => {
    _buyWithEther(address.value, option)
}

onMounted(() => {
    changeNetWork()
    getAddress()
    // imgTest()
})


</script>

<style scoped lang="less"> 
.container{
    background: linear-gradient(rgb(192, 105, 34), rgb(233, 32, 6));
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
        .cloum{
            border: 1px solid #fff;
            height: 100%;
            display: inline-block;
            margin-right: 10px;
            padding: 5px 10px;
        }
    }
    .option{
        color: #fff;
        text-align: center;
        margin-bottom: 19px;
        p{
            margin-bottom: 20px;
        }
    }
    .eggimg{
        width: 50px;
    }
}
</style>