import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/SPHomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/SPAboutView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/SPLoginView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/SPRegisterView.vue"),
    },
  ],
});

export default router;
