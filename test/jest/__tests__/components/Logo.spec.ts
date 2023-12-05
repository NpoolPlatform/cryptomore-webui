import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import Logo from '../../../../src/components/logo/Logo.vue'
import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-jest'

// Specify here Quasar config you'll need to test your component
installQuasarPlugin()

test('Logo Test', () => {
  // CAN NOT THIS IMPORT
  const wrapper = mount(Logo, {
    global: {
      plugins: [createTestingPinia()]
    }
  })
  console.log('html: ', wrapper.html())
  expect(wrapper.html()).toContain('')
})
