import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import FAQ from "../views/FAQ.vue";
import Resources from "../views/Resources.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/contact", name: "Contact", component: Contact },
  { path: "/faq", name: "FAQ", component: FAQ },
  { path: "/resources", name: "Resources", component: Resources },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
