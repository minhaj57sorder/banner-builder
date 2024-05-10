
const routes = [
  {
    path: '/login',
    component: () => import('pages/authView.vue'),
  },
  {
    path: '/register',
    component: () => import('pages/authView.vue'),
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/projectList.vue') },
    ]
  },
  {
    path: '/',
    component: () => import('layouts/EditLayout.vue'),
    children: [
      { path: '/edit/:id', component: () => import('pages/bannerEditPage.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
