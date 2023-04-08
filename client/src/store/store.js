import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        menu: false,
        service: false,
        location_modal: false,
        user: false,
        auth_message: undefined,

        populars: [],
        faqs: undefined,
        locations: undefined,
        reviews: undefined
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
        set_location_modal(state) {
            state.location_modal = !state.location_modal;
        },

        set_popular (state, payload) {
            state.populars = payload
        },
        set_faqs (state, payload) {
            state.faqs = payload
        },
        set_locations(state, payload) {
            state.locations = payload;
        },
        set_reviews(state, payload) {
            state.reviews = payload;
        },
        set_user(state, payload) {
            state.user = payload.bool;
            state.auth_message = payload.message;
        }
    },
    actions: {
        async get_popular () {
            const response = await fetch('/api/populars/get-all');
            const payload = await response.json();
            this.commit('set_popular', payload);
        },
        async get_faqs () {
            const response = await fetch('/api/faqs/get');
            const payload = await response.json();
            this.commit('set_faqs', payload);
        },
        async get_locations () {
            const response = await fetch('/api/locations/get');
            const payload = await response.json();
            this.commit('set_locations', payload);
        },
        async get_reviews () {
            const response = await fetch('/api/reviews/get');
            const payload = await response.json();
            this.commit('set_reviews', payload);
        },
    }
})

export default store;