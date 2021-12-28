<template>
    <div class="alert" :style="[Style]">
        <div class="content">
            <h3>Network Wrong</h3>
            <div class="text">{{ text }}</div>
            <div class="confim" @click="confim">confim</div> 
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Prop, computed, defineEmits} from 'vue'
const emit = defineEmits(["confim", "chang-name"]);

const props = defineProps({
    show: Boolean, // 显示隐藏
    text: [String, Number], // 层级
})

const confim: any = () => {
    // 调用 emit 打招呼
    emit("confim", "Hello!");
}

const Style: any = computed(() => {
    let style: any = {
        opacity: '1',
        "z-index": '1'
    }
    console.log(props.show, 'alertComponents');
    if (!props.show) {
        style = {
            opacity: '0',
            "z-index": '-1'
        }
    }
    return style
})
</script>

<style lang="less" scoped>
.alert{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #333;
    transition: all 230ms ease-out;
    // opacity: 0;
    .content{
        // width: 25vw;
        // height: 15vw;
        background-color: #ffffff;
        border-radius: 15px;
        text-align: center;
        h3{
            line-height: 4vw;
            border-bottom: 1px solid rgba(109, 109, 109, 0.5);
            font-weight: 600;
            font-size: 2vw;
        }
        .text{
            padding: 0 2vw;
            font-size: 1.5vw;
            line-height: 5vw;
        }
        .confim{
            line-height: 3vw;
            background-color: #232736;
            color: #fff;
            cursor: pointer;
            border-radius:  0 0 15px 15px;
        }
    }
}
</style>