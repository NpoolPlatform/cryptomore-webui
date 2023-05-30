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
      },
      {
        path: 'signin',
        component: () => import('pages/Signin.vue'),
        meta: {
          ShowBannerAnnouncement: true,
          ShowSignHelper: true,
          NeedLogined: false
        }
      },
      {
        path: 'terms',
        component: () => import('pages/Terms.vue'),
        meta: {
          ShowBannerAnnouncement: true,
          ShowSignHelper: true,
          NeedLogined: false
        }
      },
      {
        path: 'policy',
        component: () => import('pages/Policy.vue'),
        meta: {
          ShowBannerAnnouncement: true,
          ShowSignHelper: true,
          NeedLogined: false
        }
      },
      {
        path: 'career',
        component: () => import('pages/Career.vue'),
        meta: {
          ShowBannerAnnouncement: true,
          ShowSignHelper: true,
          NeedLogined: false
        }
      },
      {
        path: 'aboutus',
        component: () => import('pages/AboutUs.vue'),
        meta: {
          ShowBannerAnnouncement: true,
          ShowSignHelper: true,
          NeedLogined: false
        }
      },
      {
        path: 'pricing',
        component: () => import('pages/Pricing.vue'),
        meta: {
          ShowBannerAnnouncement: true,
          ShowSignHelper: true,
          NeedLogined: false
        }
      },
      {
        path: 'filecoin',
        component: () => import('pages/Filecoin.vue'),
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
