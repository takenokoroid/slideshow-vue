import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Start",
    component: () => import("../views/Start.vue")
  },
  {
    path: "/main",
    name: "main",
    component: () => import("../views/Next.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
