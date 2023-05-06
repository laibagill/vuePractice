import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/components/HomePage.vue";
import LoginPage from "@/components/LoginPage.vue";
import SignUp from "@/components/SignUp.vue";
import NotFound from "@/components/NotFound.vue";


const routes = [
     {
        path: "/home",
        name: "HomePage",
        component: HomePage,
      },
      {
        path: "/login",
        name: "LoginPage",
        component: LoginPage,
      },
      {
        path: "/signup",
        name: "SignUp",
        component: SignUp,
      },
      {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound,
      },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
export default router;
