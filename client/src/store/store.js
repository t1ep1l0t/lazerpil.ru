import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        menu: false,
        popular: undefined
    },
    mutations: {
        set_menu (state) {
            state.menu = !state.menu
        },
        set_popular (state, payload) {
            state.popular = payload
        }
    },
    actions: {
        async get_popular () {
            const response = await fetch('http://localhost:5000/api/populars/get-all')
            const payload = await response.json();

            this.commit('set_popular', payload);
        }

    }
})

export default store;