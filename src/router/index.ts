import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import type { RouterScrollBehavior } from "vue-router";

import Main from "@/views/Main.vue";
import OpenFreeCase from "@/views/OpenFreeCase.vue";
import OpenCase from "@/views/OpenCase.vue";
import Bonuses from "@/views/Bonuses.vue";
import Raffle from "@/views/Raffle.vue";
import Calendar from "@/views/Calendar.vue";
import Payment from "@/views/Payment.vue";
import Contacts from "@/views/Contacts.vue";
import FAQ from "@/views/FAQ.vue";
import Contracts from "@/views/Contracts.vue";

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
    },
    {
        path: "/calendar",
        name: "calendar",
        component: Calendar,
        props: true,
    },
    {
        path: "/payment",
        name: "payment",
        component: Payment,
        props: true,
    },
    {
        path: "/contacts",
        name: "contacts",
        component: Contacts,
        props: true,
    },
    {
        path: "/faq",
        name: "faq",
        component: FAQ,
        props: true,
    },
    {
        path: "/contracts",
        name: "contracts",
        component: Contracts,
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
