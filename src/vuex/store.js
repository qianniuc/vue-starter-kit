import Vue from 'vue';
import Vuex from 'vuex';
import { ADD_ONE, SUBTRACT_ONE } from './mutation-types';

Vue.use(Vuex);

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state: {
        count: 0,
    },
    getters: {
        count: state => state.count,
    },
    mutations: {
        [ADD_ONE](state) {
            state.count++;
        },
    },
    actions: {
        [ADD_ONE]({ commit }) {
            commit('ADD_ONE');
        },
    },
});