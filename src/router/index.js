import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/SPHomeView.vue";
import LandingView from "../views/SPLandingView.vue";
import DetailView from "../views/SPDetailView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landing",
      component: LandingView,
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
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
    {
      path: "/detail",
      name: "detail",
      component: DetailView,
    },
  ],
});

export default router;
