import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import localCache from '@/utils/cache'
import { firstMenu } from '@/utils/map-menus'

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/main' },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/main.vue')
    //children->根据userMenus决定
  },
  {
    path: '/:pathMatch(.*)',
    name: 'NotFound',
    component: () => import('@/views/not-found/not-found.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

//导航守卫
router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = localCache.getCache('token')
    if (!token) {
      return '/login'
    }
  }

  if (to.path === '/main') {
    //如果url是main,再次重定向
    return firstMenu.url
  }
})

export default router
