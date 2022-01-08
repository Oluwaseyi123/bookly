import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About Page",
    component: () =>
      import("../views/About.vue"),
  },
  {
    path: "/books",
    name: "Books",
    component: () =>
      import("../views/BooksApp.vue"),
  },
  {
    path: "/books/:id",
    props: true,
    name: "About Book",

    component: () =>
      import("../views/BookInfo.vue"),
  },
  {
    path: "/add-book",
    props: true,
    name: "New Book",
    component: () =>
      import("../views/NewBook.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
