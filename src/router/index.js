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
    path: "/activity",
    name: "Activity",
    component: () =>
      import(/* webpackChunkName: "activity" */ "../views/Activity.vue")
  },
  {
    path: "/post-activity",
    name: "PostActivity",
    component: () =>
      import(/* webpackChunkName: "postActivity" */ "../views/PostActivity.vue")
  },
  {
    path: "/pre-activity",
    name: "PreActivity",
    component: () =>
      import(/* webpackChunkName: "preActivity" */ "../views/PreActivity.vue")
  },
  {
    path: "/table-of-contents",
    name: "TableOfContents",
    component: () =>
      import(
        /*webpackChunkName: "table-of-contents" */ "../views/TableOfContents.vue"
      )
  }
  // TODO: Form component and route
];

const router = new VueRouter({
  routes
});

export default router;
