import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        menu: false,
        service: false,
        popular: undefined
    },
    mutations: {
        set_menu (state) {
            state.menu = !state.menu
        },
        set_popular (state, payload) {
            state.popular = payload
        },
        switch_to_woman (state) {
            state.service = false;
        },
        switch_to_man (state) {
            state.service = true;
        },
    },
    actions: {
        async get_popular () {
            const response = await fetch('/api/populars/get-all')
            const payload = await response.json();
            this.commit('set_popular', payload);
        }
    }
})

export default store;