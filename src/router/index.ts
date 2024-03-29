import { route } from 'quasar/wrappers'
import {
  createRouter,
  createWebHistory
} from 'vue-router'
import routes from './routes'
import { loginInterceptor } from 'src/npoolstore/utils/intercepter'

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

// TODO here can invoke global store
export default route(function (/* { store, ssrContext } */) {
  const createHistory = createWebHistory

  const router = createRouter({
    scrollBehavior: (to, from, savedPosition) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          if (savedPosition) {
            resolve({ top: savedPosition.top })
          } else {
            resolve({ top: 0 })
          }
        }, 50)
      })
    },
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(
      process.env.MODE === 'ssr' ? void 0 : process.env.VUE_ROUTER_BASE
    )
  })

  router.beforeEach((to, _, next) => {
    loginInterceptor('/signin', to, next)
  })

  return router
})
