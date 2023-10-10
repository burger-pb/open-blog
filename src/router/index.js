import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: "/",
    redirect: "/file-upload-demo"
  },
  {
    path: '/file-upload-demo',
    name: 'FileUploadDemo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/FileUploadDemo.vue')
  },
  {
    path: '/api-demo',
    name: 'ApiDemo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/ApiDemo.vue')
  },
  {
    path: '/markdown-view',
    name: 'MarkdownView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/MarkdownView.vue')
  },
  {
    path: '/markdown-edit',
    name: 'MarkdownEdit',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/MarkdownEdit.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
