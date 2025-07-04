import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import type { RouterScrollBehavior } from "vue-router";

import Main from "@/views/Main.vue";
import OpenCase from "@/views/OpenCase.vue";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "main",
        component: Main,
        props: true,
    },
    {
        path: "/open-case",
        name: "open-case",
        component: OpenCase,
        props: true,
    },
];

const scrollBehavior: RouterScrollBehavior = (to, from, savedPosition) => {
    if (to.hash) return { el: to.hash };
    return { top: 0 };
};

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior,
});

export default router;
