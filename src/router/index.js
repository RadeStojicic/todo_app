import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/All.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/done",
      name: "done",
      component: () => import("../views/Done.vue"),
    },
    {
      path: "/undone",
      name: "undone",
      component: () => import("../views/Undone.vue"),
    },
  ],
});

export default router;
