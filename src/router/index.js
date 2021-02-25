import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import("../views/layouts/DashboardLayout.vue"),
    redirect: "/",
    children: [
      {
        path: '/',
        name: "home",
        component: () => import("../views/Home.vue")
      },
      {
        path: '/add',
        name: "add",
        component: () => import("../views/FormNoteAdd.vue")
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
