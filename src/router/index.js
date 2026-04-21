import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import FAQ from "../views/FAQ.vue";
import Resources from "../views/Resources.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/contact", name: "Contact", component: Contact },
  { path: "/faq", name: "FAQ", component: FAQ },
  { path: "/resources", name: "Resources", component: Resources },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
