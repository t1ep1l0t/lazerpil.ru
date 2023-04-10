import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        menu: false,
        service: false,
        location_modal: false,
        certificate: false,
        user: true,
        auth_message: undefined,

        populars: [],
        complex: [],
        faqs: [],
        locations: [],
        reviews: []
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
        set_certificate(state) {
            state.certificate = !state.certificate
        },


        set_popular (state, payload) {
            state.populars = payload
        },
        set_complex (state, payload) {
            state.complex = payload
        },
        set_faqs (state, payload) {
            state.faqs = payload.reverse()
        },
        set_locations(state, payload) {
            state.locations = payload;
        },
        set_reviews(state, payload) {
            state.reviews = payload.reverse();
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
        async get_complex () {
            const response = await fetch('/api/complex/get');
            const payload = await response.json();
            this.commit('set_complex', payload);
        },
        async get_faqs () {
            const response = await fetch('/api/faqs/get');
            const payload = await response.json();
            this.commit('set_faqs', payload);
        },
        async get_locations () {
            const response = await fetch('http://localhost:5000/api/locations/get');
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