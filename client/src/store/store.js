import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        menu: false
    },
    mutations: {
        set_menu (state) {
            state.menu = !state.menu
        }
    }
})

export default store;