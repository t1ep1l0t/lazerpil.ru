import VueRouter from 'vue-router';
import Vue from "vue";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ServicesView from "@/views/ServicesView.vue";
import ReviewsView from "@/views/ReviewsView.vue";
import ContactsView from "@/views/ContactsView.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about-us',
        name: 'about',
        component: AboutView
    },
    {
        path: '/services',
        name: 'services',
        component: ServicesView
    },
    {
        path: '/reviews',
        name: 'reviews',
        component: ReviewsView
    },
    {
        path: '/contact-us',
        name: 'contact',
        component: ContactsView
    },
];

const router = new VueRouter({
    routes
})

export default router;