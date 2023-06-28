import { boot } from 'quasar/wrappers'
import { createChatWoot } from '@productdevbook/chatwoot/vue'

export default boot(({ app }) => {
  const chatwoot = createChatWoot({
    init: {
      websiteToken: 'ueDKCUywH6FSNS6dDBMfrjxS'
    },
    settings: {
      locale: 'en',
      position: 'right',
      launcherTitle: 'Hi, there!',
      darkMode: 'auto',
      showPopoutButton: true
    },
    partytown: false
  })

  // Set i18n instance on app
  app.use(chatwoot)
})
