<template>
    <div class="book">
        <div class="content" :class="[{ 'z-blurEffect': show }]">
            <div class="content-book" :class="[{ 'content-book-show': show }]">
                文本内容
                <!-- <div v-html="books"></div> -->
            </div>
        </div>
        <div style="height: 900px; width: 100%; background-color: #242736"></div>
        <div style="height: 900px; width: 100%; background-color: #173444"></div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const show = ref(false)
setTimeout(() => {
    show.value = true
})
</script>
<style scoped>
.book {
    min-width: 1200px;
}
.content {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    min-width: 1200px;
    height: 900px;
    padding-top: 150px;
    display: flex;
    justify-content: center;
    height: 900px;
    background-color: rgba(0, 0, 0, 0.3);
    transition: all ease-out 500ms;
}
.content-book {
    height: 600px;
    width: 80%;
    min-width: 1000px;
    background-color: #242736;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    border-radius: 6px;
    opacity: 0;
    transition: all cubic-bezier(0.62, -0.14, 0.62, 1.25) 500ms;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    color: rgba(255, 255, 255, 0.8);
    transform: scale(0.8);
}
.content-book-show {
    opacity: 1;
    transform: scale(1);
}
</style>
