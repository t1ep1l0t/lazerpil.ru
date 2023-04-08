import VueRouter from 'vue-router';
import Vue from "vue";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ServicesView from "@/views/ServicesView.vue";
import ReviewsView from "@/views/ReviewsView.vue";
import ContactsView from "@/views/ContactsView.vue";
import GalleryView from "@/views/GalleryView.vue";
import LocationGallery from "@/views/LocationGallery.vue";

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
    {
        path: '/gallery',
        name: 'gallery',
        component: GalleryView
    },
    {
        path: '/gallery/:id',
        name: 'gallery_location',
        component: LocationGallery,
        props: true
    },
];

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;