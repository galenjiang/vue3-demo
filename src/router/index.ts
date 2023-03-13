import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/HomeView.vue";
import Figure from "../views/FigureView.vue";
import List from "../views/ListView.vue";
import Item from "../views/ItemView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/figure",
    name: "figure",
    component: Figure,
  },
  {
    path: "/list",
    name: "list",
    component: List,
  },

  {
    path: "/item/:id",
    name: "item",
    component: Item,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
