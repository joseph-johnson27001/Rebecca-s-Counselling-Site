import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import FAQ from "../views/FAQ.vue";
import Resources from "../views/Resources.vue";
import ClinicalSupervision from "../views/ClinicalSupervision.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/faq", name: "FAQ", component: FAQ },
  { path: "/resources", name: "Resources", component: Resources },
  { path: "/clinical-supervision", name: "Clinical Supervision", component: ClinicalSupervision },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
