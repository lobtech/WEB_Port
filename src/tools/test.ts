import { ethers } from "ethers";

import contractAddress from "./contract-address.json";
import EggFactoryArtifact from "./contracts/EggFactory.json";
import EggArtifact from "./contracts/Egg.json";
import HatchingEggArtifact from "./contracts/HatchingEgg.json";
import DragonArtifact from "./contracts/Dragon.json";
// const contractAddress: any = import.meta.globEager("./contract-address.json")
// const EggFactoryArtifact: any = import.meta.globEager("./contracts/EggFactory.json")
// const EggArtifact: any = import.meta.globEager("./contracts/Egg.json")
// const HatchingEggArtifact: any = import.meta.globEager("./contracts/HatchingEggArtifact.json")
// const DragonArtifact: any = import.meta.globEager("./contracts/DragonArtifact.json")


const test: any = new ethers.Contract(
    contractAddress.EggFactory,
    EggFactoryArtifact.abi,
    
);


// We first initialize ethers by creating a provider using window.ethereum
const prover: any = () => {
    return new ethers.providers.Web3Provider((window as any).ethereum);  //供应商
}


//获取HatchingEgg合约的实例对象
const _hegg: any = () => {
    return new ethers.Contract(
        contractAddress.HatchingEgg,
        HatchingEggArtifact.abi,
        prover().getSigner(0)
    );
}

//获取EggFactory合约的实例对象
const _token: any = () => {
    return new ethers.Contract(
        contractAddress.EggFactory,
        EggFactoryArtifact.abi,
        prover().getSigner(0)
    );
}

//获取Egg合约的实例对象
const _egg: any = () => {
    return new ethers.Contract(
        contractAddress.Egg,
        EggArtifact.abi,
        prover().getSigner(0)
    );
}

//获取Dragon合约的实例对象
const _dragon: any = () => {
    return new ethers.Contract(
        contractAddress.Dragon,
        DragonArtifact.abi,
        prover().getSigner(0)
    );
}


//更新状态，孵化 或者 蛋蛋状态，蛋蛋又有几个之类的
const _updateBalance: any = async (address: any) => {
    //查询余额对象
    const balance = await _token().balanceOf(address);
    console.log(balance, 'balance')
    if (balance.gt(0)) {
      let option = await _getOption(_hegg(), address);
      
      let hatching = option > -1;
      console.log(hatching, option, 'hatching')

      //正在孵化执行里面的
      if (hatching) {
        let dueTime = await _hegg().dueTime(address);
        let timeReady = new Date(dueTime.toNumber() * 1000);

        //孵化中
        let isReady = timeReady < new Date();
      } else {
        //如果没有正在孵化，就只拿到
        option = await _getOption(_egg(), address);
        console.log(option, 'option')
        if(option > 0 || option == -1) return option;
        //蛋蛋个数为小于0，表示已经孵化了，得到龙的dragonId就行。
        if (option < 0) {
          let dragonId = await _dragon().tokenOfOwnerByIndex(address, 0);
          console.log(dragonId, 'dragonId');
        }
      }
    }
}


const _getOption = async (contract: any, address: any) => {
    for (let i = 0; i < 4; i++) {
      let b = await contract.balanceOf(address, i);
      console.log(b);
      console.log(b.gt(0))
      if (b.gt(0)) {
        return i;
      } 
    }
    return -1;
}


const _startHatching: any = async (option: any) => {
    await _egg().hatch(option);
}
  
const imgTest: any = async () => {
    console.log('9999999');
    
    const test = await _egg().uri(1);
    console.log(test, 'test');
    
}


//切换了网络
const changeNetWork: any = () => {
    console.log(11);
    console.log((window as any).ethereum);
    (window as any).ethereum.on("chainChanged", ([networkId]: any) => {
        console.log(networkId, "切换了网络");
    });
}

export {
    changeNetWork,
    prover,
    _token,
    _updateBalance,
    _startHatching,
    imgTest
}