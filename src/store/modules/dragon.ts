import { Module } from 'vuex'
import { State } from '..'

// 定义state类型
const states = {
    hacting: false,
    dragonID: 0,
}

export type typeof_dragon = typeof states
export default {
    namespaced: true,
    state: states,
    mutations: {
        change_hacting(state, payload: any) {
            state.hacting = payload;
        },
        change_dragonID(state, payload: any) {
            state.dragonID = payload;
        },
    },
    actions: {
        change_hacting({ commit }, paylaod: any){
            commit('change_hacting', paylaod)
        },
        change_dragonID({ commit }, paylaod: any){
            commit('change_dragonID', paylaod)
        },
    },
} as Module<typeof_dragon, State>
