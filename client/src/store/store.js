import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        menu: false,
        service: false,
        populars: undefined
    },
    mutations: {
        set_menu (state) {
            state.menu = !state.menu
        },
        switch_to_woman (state) {
            state.service = false;
        },
        switch_to_man (state) {
            state.service = true;
        },

        set_popular (state, payload) {
            state.populars = payload
        },
    },
    actions: {
        async get_popular () {
            const response = await fetch('/api/populars/get-all');
            console.log(response)
            const payload = await response.json();
            console.log(payload)
            this.commit('set_popular', payload);
        }
    }
})

export default store;