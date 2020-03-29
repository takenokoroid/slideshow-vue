import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  },
  {
    path: "/start/:pageName",
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
