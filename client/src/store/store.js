import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        menu: false,
        service: false,
        populars: undefined,
        faqs: undefined,
        locations: undefined
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
        set_faqs (state, payload) {
            state.faqs = payload
        },
        set_locations(state, payload) {
            state.locations = payload;
        }
    },
    actions: {
        async get_popular () {
            const response = await fetch('http://localhost:5000/api/populars/get-all');
            const payload = await response.json();
            this.commit('set_popular', payload);
        },
        async get_faqs () {
            const response = await fetch('http://localhost:5000/api/faqs/get');
            const payload = await response.json();
            this.commit('set_faqs', payload);
        },
        async get_locations () {
            const response = await fetch('http://localhost:5000/api/locations/get');
            const payload = await response.json();
            this.commit('set_locations', payload);
        },
    }
})

export default store;