import { createWebHistory, createRouter } from "vue-router";
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ProjectView from '../views/ProjectView.vue'

const routes = [
  {
    path:'/',
    component: HomeView,
    props: true
  },
  {
    path: "/home",
    component: HomeView,

  },
  {
    path: "/about",
    name: "AboutView",
    component: AboutView,
  },
  {
    path: "/project",
    name: "project",
    component: ProjectView,
    props: true
   
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;