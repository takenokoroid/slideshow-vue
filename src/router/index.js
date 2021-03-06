import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Start",
    component: () => import("../views/Index.vue")
  },
  {
    path: "/main/:pagename",
    name: "main",
    component: () => import("../views/StandardSlide.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
