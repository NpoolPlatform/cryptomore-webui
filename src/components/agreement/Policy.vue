<template>
  <HeadBackground />
  <Title class='horizontal-center' :title='$t("MSG_PRIVACY_NOTICE")' :subtitle='$t("MSG_LAST_UPDATED", { DATE: new Date("2023-07-08").toDateString() })' />
  <div class='content-width row horizontal-center'>
    <div class='left' :style='{marginTop: tableOfContentMarginTop}'>
      <TableOfContent v-model:selected='selected' :entries='entries' />
    </div>
    <div class='right text-primary'>
      <q-scroll-observer @scroll='onScroll' />
      <p id='Privacy'>
        We collect information that you provide to us, the information we obtain automatically when you use our Services, and the information from other sources such as third-party services and organizations, as described below. You confirm and agree that we have the right to collect your information by:
      </p>
      <ul>
        <li>
          <span class='text-primary' :style='{fontWeight:600}'>Create an account.</span> We may collect personal information that you provide to us, including your e-mail address and cell phone number.
        </li>
        <li>
          <span class='text-primary' :style='{fontWeight:600}'>Purchases.</span> We may collect personal information and details associated with your purchases, including payment information. Any payments made via our Services are processed by third-party payment processors. We do not directly collect or store any payment information entered through our service, but we may receive information related to your payment.
        </li>
        <li>
          <span class='text-primary' :style='{fontWeight:600}'>Feedback and correspondence.</span> You may provide your information in your responses to surveys when you report a problem with Service, receive customer support, or otherwise correspond with us.
        </li>
      </ul>
      <p>Information Automatically Collected. We may automatically record certain information about how you use Crypto More (we refer to this information as "Log Data"). Log Data may include information such as a user's Internet Protocol (IP) address, device and browser type, operating system, the pages or features of Crypto More to which a user browsed and the time spent on those pages or features, the frequency with which the Sites are used by a user, search terms, the links on Crypto More that a user clicked on or used, and other statistics. We use this information to administer the Service and we analyze (and may engage third parties to analyze) this information to improve and enhance the Service by expanding its features and functionality and tailoring it to our users' needs and preferences.</p>
      <p>We may use cookies, local storage, or similar technologies to analyze trends, administer the Sites, track users' movements around the Sites, and gather demographic information about our user base as a whole. Users can control the use of cookies and local storage at the individual browser level. For more information, please see our Cookies Policy.</p>
      <p>We also may use Google Analytics to help us offer you an optimized user experience. You can find more information about Google Analytics' use of your personal data here: https://www.google.com/analytics/terms/us.html. Please note that Metamask does not use Google Analytics in its wallet.</p>
      <p>Third-Party Services and Sources. We may obtain personal information about you from other sources, including through third-party services and organizations. For example, if you access our Services through a third-party application, such as an app store, a third-party login service, or a social networking site, we may collect personal information about you from that third-party application that you have made available via your privacy settings.</p>
      <p>You are aware that after deleting or canceling your information, we have the right to the relevant laws and regulations and network security considerations, continue to save but do not use your user information and other data.</p>
      <p>We would never collect information. We will never ask you to share your private key or wallet seed. Never Trust anyone or any website that asks you to enter your private key or wallet seed.</p>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { defineAsyncComponent, ref, watch, computed } from 'vue'
import { scroll } from 'quasar'
const { getScrollTarget, setVerticalScrollPosition } = scroll

const HeadBackground = defineAsyncComponent(() => import('src/components/common/HeadBackground.vue'))
const Title = defineAsyncComponent(() => import('src/components/common/Title1.vue'))
const TableOfContent = defineAsyncComponent(() => import('src/components/agreement/TableOfContent.vue'))

const selected = ref('Privacy')
const entries = ref([
  'Privacy'
])

watch(selected, () => {
  const el = document.getElementById(selected.value)
  if (!el) {
    return
  }
  const target = getScrollTarget(el)
  const offset = el.offsetTop - el.scrollHeight
  const duration = 1000
  setVerticalScrollPosition(target, offset, duration)
})

const scrollDistance = ref(0)
const tableOfContentMarginTop = computed(() => {
  const fixedVal = 400
  if (scrollDistance.value <= fixedVal) {
    return
  }
  return (scrollDistance.value - fixedVal).toFixed(0) + 'px'
})

const onScroll = (ev: unknown) => {
  const _ev = ev as Record<string, unknown>
  if (!_ev.position) {
    return
  }
  const pos = _ev.position as Record<string, number>
  scrollDistance.value = Number(pos.top)
}

</script>

<style lang='sass' scoped>
.left
  width: 278px
  @media (max-width: 1280px)
    display: none

.right
  font-size: 16px
  font-weight: 500
  line-height: 26px
  max-width: 950px
  margin-left: 40px
  color: rgba(0, 71, 55, 0.6) !important
  padding-bottom: 120px
  @media (max-width: 1280px)
    margin-left: 6px
    margin-right: 6px
    max-width: 100%
  .title
    font-weight: 700
    line-height: 32px
  .title-1
    font-size: 24px
  .title-2
    font-size: 16px
  th, td
    border-bottom: 1px solid $grey
</style>
