import { RouteRecordRaw } from 'vue-router'
import { RouteMetaImpl } from '../utils'

declare module 'vue-router' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface RouteMeta extends RouteMetaImpl {
  }
}

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Index.vue'),
        meta: {
          ShowBannerAnnouncement: true,
          ShowSignHelper: true,
          NeedLogined: false
        }
      },
      {
        path: 'signup',
        component: () => import('pages/Signup.vue'),
        meta: {
          ShowBannerAnnouncement: true,
          ShowSignHelper: true,
          NeedLogined: false
        }
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
