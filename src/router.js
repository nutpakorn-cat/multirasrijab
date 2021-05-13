import { createRouter, createWebHistory } from 'vue-router';

import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import AboutUsScreen from './screens/AboutUsScreen';
import TopicScreen from './screens/TopicScreen';
import WorkScreen from './screens/WorkScreen';

const routes = [
    {
        path: '/',
        component: WelcomeScreen,
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
        path: '/topic/:type',
        component: TopicScreen,
    },
    {
        path: '/work/:type/:id',
        component: WorkScreen,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;