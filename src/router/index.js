import Vue from "vue";
import VueRouter from "vue-router";
import ViewHello from "../views/Hello.view.vue";
import ViewHome from "../views/Home.view.vue";
// import ViewActivity from "../views/Activity.view.vue";
// import store from "@/forms/module.199e4bb2-04d1-4a95-9965-d74c259e17fc.json";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Hello",
    component: ViewHello
  },
  {
    path: "/home",
    name: "Home",
    component: ViewHome
  },
  {
    path: "/modules",
    name: "Modules",
    component: () =>
      import(/* webpackChunkName: "modules" */ "../views/Modules.view.vue"),
  },
  {
    path: "/modules/:moduleId",
    name: "Module",
    props: true,
    component: () =>
      import(/* webpackChunkName: "module" */ "../views/Module.view.vue"),
    children: [

      {
        name: "PostActivity",
        path: "post-activity",
        props: true,
        component: () =>
          import(/* webpackChunkName: "module/post-activity" */ "../views/PostActivity.view.vue")
      },
    ]
  },
  {
    name: "PreActivity",
    path: "/modules/:moduleId/pre-activity",
    props: true,
    component: () =>
      import(/* webpackChunkName: "module/pre-activity" */ "../views/PreActivity.view.vue")
  },
  {
    name: "Activities",
    path: "/modules/:moduleId/activities",
    props: (route) => {
      const activityNum = Number.parseInt(route.params.activityNum, 10)
      if (Number.isNaN(activityNum)) {
        // return 0
      }
      return {
        moduleId: route.params.moduleId,
        activityNum: 0
      };
    },
    component: () =>
      import(/* webpackChunkName: "module/activities" */ "../views/Activities.view.vue")
  },
  {
    name: "Activity",
    path: "/modules/:moduleId/activities/:activityNum",
    props: (route) => {
      let activityNum = Number.parseInt(route.params.activityNum, 10)
      // if (Number.isNaN(activityNum)) {
      //   activityNum = 0;
      // }
      return {
        moduleId: route.params.moduleId,
        activityNum
      };
    },
    component: () =>
      import(/* webpackChunkName: "module/activity" */ "../views/Activity.view.vue")
  },
  // {
  //   path: "/pre-test",
  //   component: () =>
  //     import(/* webpackChunkName: "pre-test" */ "../views/PreTest.view.vue")
  // },
  // {
  //   path: "/post-test",
  //   component: () =>
  //     import(/* webpackChunkName: "post-test" */ "../views/PostTest.view.vue")
  // },
  // {
  //   path: "/user/:userId",
  //   props: true,
  //   component: () =>
  //     import(/* webpackChunkName: "user" */ "../views/User.view.vue")
  // },
  // {
  //   path: "/teacher/:teacherId",
  //   props: true,
  //   component: () =>
  //     import(/* webpackChunkName: "teacher" */ "../views/Teacher.view.vue")
  // },
  // {
  //   path: "/login",
  //   props: true,
  //   component: () =>
  //     import(/* webpackChunkName: "login" */ "../views/Login.view.vue")
  // }, 
  // {
  //   path: "/register",
  //   props: true,
  //   component: () =>
  //     import(/* webpackChunkName: "register" */ "../views/Register.view.vue")
  // }, 
  // {
  //   path: "/about",
  //   props: true,
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.view.vue")
  // },
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
