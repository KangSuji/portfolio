import { createWebHistory, createRouter } from "vue-router";
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ProjectView from '../views/ProjectView.vue';
import ContactView from '../views/ContactView.vue';

const routes = [
  {
    path:'/',
    component: HomeView,
    props: true
  },
  {
    path: "/home",
    name: 'HomeView',
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
   
  },
  {
    path: "/contact",
    name: "ContactView",
    component: ContactView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;