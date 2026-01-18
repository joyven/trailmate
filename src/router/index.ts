import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory("/trailmate/"),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/spots",
      name: "spots",
      component: () => import("../views/SpotsView.vue"),
    },
    {
      path: "/gourmet",
      name: "gourmet",
      component: () => import("../views/GourmetView.vue"),
    },
    {
      path: "/experience",
      name: "experience",
      component: () => import("../views/ExperienceView.vue"),
    },
    {
      path: "/special",
      name: "special",
      component: () => import("../views/SpecialView.vue"),
    },
    {
      path: "/courses",
      name: "courses",
      component: () => import("../views/CoursesView.vue"),
    },
    {
      path: "/access",
      name: "access",
      component: () => import("../views/AccessView.vue"),
    },
  ],
});

export default router;
