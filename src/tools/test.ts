import { ethers } from "ethers";
import store from '../store';
import contractAddress from "./contract-address.json";
import EggFactoryArtifact from "./contracts/EggFactory.json";
import EggArtifact from "./contracts/Egg.json";
import HatchingEggArtifact from "./contracts/HatchingEgg.json";
import DragonArtifact from "./contracts/Dragon.json";
import LOBTokenArtifact from "./contracts/LOBToken.json";
import LootBoxArtifact from "./contracts/LootBox.json";
import LootBoxVendorArtifact from "./contracts/LootBoxVendor.json";
import MagicWeaponArtifact from "./contracts/MagicWeapon.json";
import BuildingArtifact from "./contracts/Building.json";
// const contractAddress: any = import.meta.globEager("./contract-address.json")
// const EggFactoryArtifact: any = import.meta.globEager("./contracts/EggFactory.json")
// const EggArtifact: any = import.meta.globEager("./contracts/Egg.json")
// const HatchingEggArtifact: any = import.meta.globEager("./contracts/HatchingEggArtifact.json")
// const DragonArtifact: any = import.meta.globEager("./contracts/DragonArtifact.json")


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


//获取EggFactory合约的实例对象
const _factory: any = () => {
    return new ethers.Contract(
        contractAddress.EggFactory,
        EggFactoryArtifact.abi,
        prover().getSigner(0)
    )
}


const _lootbox: any = () => {
    return new ethers.Contract(
        contractAddress.LootBox,
        LootBoxArtifact.abi,
        prover().getSigner(0)
    )
}

const _vendor: any = () => {
    return new ethers.Contract(
        contractAddress.LootBoxVendor,
        LootBoxVendorArtifact.abi,
        prover().getSigner(0)
    )
}

const _lob: any = () => {
    return new ethers.Contract(
        contractAddress.LOBToken,
        LOBTokenArtifact.abi,
        prover().getSigner(0)
    )
}

const _magicWeapon: any = () => {
    return new ethers.Contract(
        contractAddress.MagicWeapon,
        MagicWeaponArtifact.abi,
        prover().getSigner(0)
    )
}

const _building: any = () => {
    return new ethers.Contract(
        contractAddress.Building,
        BuildingArtifact.abi,
        prover().getSigner(0)
    )
}


//更新状态，孵化 或者 蛋蛋状态，蛋蛋又有几个之类的
const _updateBalance: any = async (address: any) => {
    //查询余额对象
    const balance = await _factory().balanceOf(address);  //调取这个蛋合约的查询余额方法，返回这个实例
    // this.setState({ balance });
    console.log(balance.gt(0), 'balance.gt(0)'); 
    if (balance.gt(0)) {   //如果balance.gt(0) 为 true 那么表示有蛋了， 为false 表示 没有领取过蛋
      let option = await _getOption(_hegg, address);
      let hatching = option > -1;
      console.log(option, 'option');
      if (hatching) {
        // Step 2 正在孵化蛋
        // this.setState({ hatching, option });
        // let path = await imgTest(option);
        // return { option, path };
        store.dispatch('dragon/change_hacting', true)
        let path = await imgTest(option);
        let dueTime= await _hegg().dueTime(address);
        let readyTime = new Date(dueTime.toNumber() * 1000);
        return { option, path, readyTime, dueTime };
      } else {
        // Step 1 有蛋，但是没孵化
        option = await _getOption(_egg, address);
        console.log(option, 'option2');
        
        // this.setState({ option });
        if (option < 0) {
          // Step 3 已经有龙了
          store.dispatch('dragon/change_hacting', false)
          let _balance = await _dragon().balanceOf(address);
          let num = _balance.toNumber();
          store.dispatch('dragon/change_dragonID', num)
          console.log(num, 'num');
          let path = await imgTest(num);
          return {option, path}
        }
        let path = await imgTest(option);
        // await imgTest(option)
        return { option, path };
      }
    }else{
        return false;
    }
}


const _getOption = async (contract: any, address: any) => {
    let numOptions = await contract().numOptions();
    for (let i = 0; i < numOptions; i++) {
      let b = await contract().balanceOf(address, i);
      console.log(b);
      if (b.gt(0)) {
        return i;
      }
    }
    return -1;
}

const _mint: any = async (address: any) => {
    const tx = await _factory().mintTo(address);
    // this.setState({ txBeingSent: tx.hash });
    // 我们使用。wait（）等待挖掘事务。这种方法
    // 返回事务的收据。
    const receipt = await tx.wait();

    // 收据包含一个状态标志，该标志为0表示错误。
    if (receipt.status === 0) {
    // 我们无法知道在执行事务时导致事务失败的确切错误
    // 是地雷，所以我们扔这个普通的。
        throw new Error("Transaction failed");
    }
}


const _startHatching: any = async (option: any) => {
    let tx = await _egg().hatch(option);
    // this.setState({ txBeingSent: tx.hash });
    const receipt = await tx.wait();
    // The receipt, contains a status flag, which is 0 to indicate an error.
    if (receipt.status === 0) {
      // We can't know the exact error that made the transaction fail when it
      // was mined, so we throw this generic one.
      throw new Error("Transaction failed");
    }
    // this.setState({ txBeingSent: undefined });
}

  
const imgTest: any = async (option: any) => {
    let temp  = option+1;
    const test = await _egg().uri(temp >= 3 ? 3 : temp);
    return test;
}



//通过LOB去购买的盲盒
const _buyWithLOB: any = async (address: any, option: Number) => {
    await _lob().approve(_vendor().address, 500000000);
    console.log(1)
    let price = await _vendor().getFeeToken(option);
    let balance = await _lob().balanceOf(address);
    if (price.gt(balance)) {
        console.log("Insufficient LOB balance")
    }
    let allowance = await _lob().allowance(address, _vendor().address);
    if (allowance.lt(price)) {
        await _lob().approve(_vendor().address, 500000000);
    }
    await _vendor().buyWithToken(option, 1);

}

//通过ETH去购买他
const _buyWithEther: any = async (address: any, option: number) => {
    let price = await _vendor().getFeeEther(option);
    await _vendor().buy(option, 1, { value: price });
}



//切换了网络
const changeNetWork: any = () => {
    console.log((window as any).ethereum);
    (window as any).ethereum.on("chainChanged", ([networkId]: any) => {
        console.log(networkId, "切换了网络");
    });
}

export {
    changeNetWork,
    prover,
    _factory,
    _updateBalance,
    _startHatching,
    imgTest,
    _mint,
    _buyWithLOB,
    _buyWithEther,
}