import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/Login.vue";
import SignUp from "../components/SignUp.vue";
import Calculator from "../components/Calculator.vue";
import Records from "../components/Records.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: "/",
    //   name: "home",
    //   component: HomeView,
    // },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUp,
    },
    {
      path: "/calculator",
      name: "calculator",
      component: Calculator,
    },
    {
      path: "/records",
      name: "records",
      component: Records,
    },
  ],
});

export default router;
