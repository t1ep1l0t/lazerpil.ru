import VueRouter from 'vue-router';
import Vue from "vue";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ServicesView from "@/views/ServicesView.vue";
import ReviewsView from "@/views/ReviewsView.vue";
import ContactsView from "@/views/ContactsView.vue";
import GalleryView from "@/views/GalleryView.vue";
import LocationGallery from "@/views/LocationGallery.vue";
import AdminView from "@/views/AdminView.vue";

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
    {
        path: '/admin',
        name: 'admin',
        component: AdminView
    }
];

const router = new VueRouter({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0, behavior: 'smooth' }
        }
    },
    routes
})

export default router;