import { RouteRecordRaw } from 'vue-router'
import { RouteMetaImpl } from 'src/npoolstore/utils/intercepter'

declare module 'vue-router' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface RouteMeta extends RouteMetaImpl {
    ShowHeaderAnnouncement?: boolean
    ShowTopTip?: boolean
    ShowMainHeader?: boolean
    ShowBigLogo?: boolean
    ShowFooterTop?: boolean
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
          NeedLogined: false,
          ShowHeader: true,
          ShowFooter: true
        }
      },
      {
        path: 'signup',
        component: () => import('pages/Signup.vue'),
        meta: {
          ShowBannerAnnouncement: true,
          ShowSignHelper: true,
          NeedLogined: false,
          ShowHeader: true,
          ShowFooter: true
        }
      },
      {
        path: 'resetuser',
        component: () => import('pages/ResetUser.vue'),
        meta: {
          ShowBannerAnnouncement: true,
          ShowSignHelper: true,
          NeedLogined: false,
          ShowHeader: true,
          ShowFooter: true
        }
      },
      {
        path: 'signin',
        component: () => import('pages/Signin.vue'),
        meta: {
          ShowBannerAnnouncement: true,
          ShowSignHelper: true,
          NeedLogined: false,
          ShowHeader: true,
          ShowFooter: true
        }
      },
      {
        path: 'oauth/callback',
        component: () => import('pages/OAuthCallback.vue'),
        meta: {
          ShowBannerAnnouncement: true,
          ShowSignHelper: true,
          NeedLogined: false,
          ShowHeader: true,
          ShowFooter: true
        }
      },
      {
        path: 'bindaccount',
        component: () => import('pages/BindAccount.vue'),
        meta: {
          ShowBannerAnnouncement: true,
          ShowSignHelper: true,
          NeedLogined: false,
          ShowHeader: true,
          ShowFooter: true
        }
      },
      {
        path: 'terms',
        component: () => import('pages/Terms.vue'),
        meta: {
          ShowBannerAnnouncement: true,
          ShowSignHelper: true,
          NeedLogined: false,
          ShowHeader: true,
          ShowFooter: true
        }
      },
      {
        path: 'policy',
        component: () => import('pages/Policy.vue'),
        meta: {
          ShowBannerAnnouncement: true,
          ShowSignHelper: true,
          NeedLogined: false,
          ShowHeader: true,
          ShowFooter: true
        }
      },
      {
        path: 'career',
        component: () => import('pages/Career.vue'),
        meta: {
          ShowBannerAnnouncement: true,
          ShowSignHelper: true,
          NeedLogined: false,
          ShowHeader: true,
          ShowFooter: true
        }
      },
      {
        path: 'aboutus',
        component: () => import('pages/AboutUs.vue'),
        meta: {
          ShowBannerAnnouncement: true,
          ShowSignHelper: true,
          NeedLogined: false,
          ShowHeader: true,
          ShowFooter: true
        }
      },
      {
        path: 'pricing',
        component: () => import('pages/Pricing.vue'),
        meta: {
          ShowBannerAnnouncement: true,
          ShowSignHelper: true,
          NeedLogined: false,
          ShowHeader: true,
          ShowFooter: true
        }
      },
      {
        path: 'filecoin',
        component: () => import('pages/Filecoin.vue'),
        meta: {
          ShowBannerAnnouncement: true,
          ShowSignHelper: true,
          NeedLogined: false,
          ShowHeader: true,
          ShowFooter: true
        }
      },
      {
        path: 'bitcoin',
        component: () => import('pages/Bitcoin.vue'),
        meta: {
          ShowBannerAnnouncement: true,
          ShowSignHelper: true,
          NeedLogined: false,
          ShowHeader: true,
          ShowFooter: true
        }
      },
      {
        path: 'ethereum',
        component: () => import('pages/Ethereum.vue'),
        meta: {
          ShowBannerAnnouncement: true,
          ShowSignHelper: true,
          NeedLogined: false,
          ShowHeader: true,
          ShowFooter: true
        }
      },
      {
        path: 'solana',
        component: () => import('pages/Solana.vue'),
        meta: {
          ShowBannerAnnouncement: true,
          ShowSignHelper: true,
          NeedLogined: false,
          ShowHeader: true,
          ShowFooter: true
        }
      },
      {
        path: 'aleo',
        component: () => import('pages/Aleo.vue'),
        meta: {
          ShowBannerAnnouncement: true,
          ShowSignHelper: true,
          NeedLogined: false,
          ShowHeader: true,
          ShowFooter: true
        }
      },
      {
        path: 'ironfish',
        component: () => import('pages/Ironfish.vue'),
        meta: {
          ShowBannerAnnouncement: true,
          ShowSignHelper: true,
          NeedLogined: false,
          ShowHeader: true,
          ShowFooter: true
        }
      },
      {
        path: 'aptos',
        component: () => import('pages/Aptos.vue'),
        meta: {
          ShowBannerAnnouncement: true,
          ShowSignHelper: true,
          NeedLogined: false,
          ShowHeader: true,
          ShowFooter: true
        }
      },
      {
        path: 'sui',
        component: () => import('pages/Sui.vue'),
        meta: {
          ShowBannerAnnouncement: true,
          ShowSignHelper: true,
          NeedLogined: false,
          ShowHeader: true,
          ShowFooter: true
        }
      },
      {
        path: 'linera',
        component: () => import('pages/Linera.vue'),
        meta: {
          ShowBannerAnnouncement: true,
          ShowSignHelper: true,
          NeedLogined: false,
          ShowHeader: true,
          ShowFooter: true
        }
      },
      {
        path: 'hashage',
        component: () => import('pages/Hashage.vue'),
        meta: {
          ShowBannerAnnouncement: true,
          ShowSignHelper: true,
          NeedLogined: false,
          ShowHeader: false,
          ShowFooter: false
        }
      },
      {
        path: 'nodes',
        component: () => import('pages/Nodes.vue'),
        meta: {
          ShowBannerAnnouncement: true,
          ShowSignHelper: true,
          NeedLogined: false,
          ShowHeader: true,
          ShowFooter: true
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
