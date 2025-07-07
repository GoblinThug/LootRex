import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import type { RouterScrollBehavior } from "vue-router";

import Main from "@/views/Main.vue";
import OpenFreeCase from "@/views/OpenFreeCase.vue";
import OpenCase from "@/views/OpenCase.vue";
import Bonuses from "@/views/Bonuses.vue";
import Raffle from "@/views/Raffle.vue";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "main",
        component: Main,
        props: true,
    },
    {
        path: "/open-free-case",
        name: "open-free-case",
        component: OpenFreeCase,
        props: true,
    },
    {
        path: "/open-case",
        name: "open-case",
        component: OpenCase,
        props: true,
    },
    {
        path: "/bonuses",
        name: "bonuses",
        component: Bonuses,
        props: true,
    },
    {
        path: "/raffle",
        name: "raffle",
        component: Raffle,
        props: true,
    }
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
