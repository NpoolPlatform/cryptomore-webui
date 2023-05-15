import { boot } from 'quasar/wrappers'
import { VueReCaptcha } from 'vue-recaptcha-v3'
import { constants } from 'src/const'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(({ app }) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  app.use(VueReCaptcha, { siteKey: constants.GoogleRecaptchaKey })
})
