import Vue from "vue";
import VueRouter from "vue-router";
import Groups from "@/views/Groups.vue";
import Users from "@/views/Users";
import Files from "@/views/Files";

Vue.use(VueRouter);

const routes = [
  {
    path: "/users",
    name: "users",
    component: Users
  },
  {
    path: "/groups",
    name: "groups",
    component: Groups
  },
  {
    path: "/files",
    name: "files",
    component: Files
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
