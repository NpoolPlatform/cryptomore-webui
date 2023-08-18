import { boot } from 'quasar/wrappers'
import { Notify } from 'quasar'

export default boot((/* { app, router, ... } */) => {
  Notify.setDefaults({
    progress: true,
    color: 'white',
    timeout: 3000,
    position: 'top-right'
  })
})
