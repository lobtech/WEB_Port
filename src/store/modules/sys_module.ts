import { Module } from 'vuex'
import { State } from '..'

// 定义state类型
const states = {
    blurEffect: false as boolean, // 背景高斯模糊
}
export type typeof_sys_module = typeof states
export default {
    namespaced: true,
    state: states,
    mutations: {
        // 设置高斯模糊
        setBlurEffect(state, paylaod: boolean) {
            state['blurEffect'] = paylaod
        },
    },
    actions: {
        setBlurEffect({ commit }, paylaod: boolean) {
            commit('setBlurEffect', paylaod)
        },
    },
} as Module<typeof_sys_module, State>
