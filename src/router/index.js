import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/todo",
      name: "todo",
      component: () => import("../layout/TodoLayout.vue"),
      children: [
        {path: 'all-tasks', component: () =>import("../views/AllTasks.vue")},
        {path: 'today', component: () => import("../views/Today.vue")}
      ]
    },
    


  ],
});

export default router;
