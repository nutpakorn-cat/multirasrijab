import { createRouter, createWebHistory } from 'vue-router';

import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import AboutUsScreen from './screens/AboutUsScreen';
import AnimationScreen from './screens/AnimationScreen';

const routes = [
    {
        path: '/',
        component: WelcomeScreen
    },
    {
        path: '/home',
        component: HomeScreen
    },
    {
        path: '/about-us',
        component: AboutUsScreen
    },
    {
        path: '/animation',
        component: AnimationScreen
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;