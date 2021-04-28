import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import SingleAd from '../views/SingleAd.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/oglasi/:id',
    name: 'SingleAd',
    component: SingleAd,
  },
  {
    path: '/oglasi',
    name: 'AllAds',
    component: () => import(/* webpackChunkName: "about" */ '../views/AllAds.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    window.scrollTo(0, 0);
  },
});

export default router;
