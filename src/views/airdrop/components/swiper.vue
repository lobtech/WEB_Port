<template>
  <div class="subscribes-swiper">
11111111

    <!-- <div v-for="(item, index) in subscribes" :key="index">
        <a :href="item.link" target="view_window">
            <img :src="item.img" alt="" />
        </a>
        <p v-if="item.state">Subscribed</p>
        <p v-else>check subscribe</p>
    </div> -->

  </div>
</template>

<script setup lang="ts">


import { setgroups } from 'process';
import { onMounted,defineComponent, ref, Prop, mergeProps } from 'vue';
const props = defineProps({
  subscribes:Array
})
console.log(props.subscribes);




// export default defineComponent({
//     name: 'Tabs',
//     props: {
//         listMenu: { // 菜单数据
//             type: Array,
//             required: true,
//             default(){
//                 return []
//             }
//         }
//     },
//     setup(props, context){
//         const listMenu = props.listMenu
//         function menuClick (menuName) {
//             // 通过自定义事件回传值
//             context.emit('menuClick', { menuName })
//         }
//         return {
//             listMenu,
//             menuClick
//         }
//     }
// })

</script>

<style lang="less" scoped>
.subscribes-swiper{
  width: 100%;
  height: 150px;
  background: #ccc;
  .swiper{
    width: 100%;
    height: 100%;
    .swiper-slide{
      width: 100%;
    height: 100%;
    }
  }
//             display: flex;
//             flex-direction: row;
//            div{
//               width: 30vw;
//               text-align: center;
//  border: 1px solid;
//                 padding: 1vw 0;
//                 border-radius: 1vw;
//                 p{
//                     margin: 1vw 0;
//                 }
//                 img{
//                     width: 40%;
//                 }

//               // display: flex;
//               // justify-items: center;
//            }
//            & > div:not(:last-child){
//                 margin-right: 2%;
//             }
//             & > div:hover{
//                 transform: scale(1.2);
//             }
        }
</style>