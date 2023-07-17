<template>
  <div class='row' :style='{height: "76px"}'>
    <div class='content-width horizontal-center row' :style='{lineHeight: "40px", marginTop: "18px"}'>
      <q-img width='40px' height='40px' src='~assets/HashageLogo.svg' :style='{marginRight: "8px"}' />
      <div v-html='$t("MSG_HASHAGE_STYLE_1")' :style='{marginRight: "8px"}' />
      <div :style='{marginRight: "8px", fontWeight: 400, fontSize: "16px", color: "rgba(49, 55, 61, 0.6)"}'>
        |
      </div>
      <div :style='{fontWeight: 400, fontSize: "16px", color: "rgba(49, 55, 61, 0.6)"}'>
        {{ $t('MSG_RELIABLE_INNOVATIVE') }}
      </div>
    </div>
  </div>
  <div class='banner'>
    <div class='content-width horizontal-center'>
      <div class='row'>
        <div>
          <div :style='{fontWeight: 500, fontSize: "20px", lineHeight: "24px", color: "#3187FF"}'>
            {{ $t('MSG_HASHAGE_WAITLIST_BANNER_TITLE') }}
          </div>
          <div v-html='$t("MSG_HASHAGE_WAITLIST_BANNER_SLOGAN")' :style='{marginTop: "24px"}' />
        </div>
        <q-space />
        <div class='waitlist-input'>
          <div class='text-center' :style='{fontWeight: 600, fontSize: "20px", lineHeight: "24px", color: "#31373D"}'>
            {{ $t('MSG_GET_EARLY_ACCESS') }}
          </div>
          <q-input
            outlined
            v-model='emailAddress'
            label='Email address'
            color='blue-12'
            :style='{marginTop: "36px"}'
          >
            <template #prepend>
              <q-icon name='mail' />
            </template>
          </q-input>
          <div :style='{fontWeight: 400, fontSize: "14px", lineHeight: "20px", color: "rgba(49, 55, 61, 0.8)", marginTop: "12px"}'>
            {{ $t('MSG_WAITLIST_SUBSCRIBE_CAPTION') }}
          </div>
          <q-btn
            :style='{marginTop: "36px", width: "100%", height: "48px", background: "#1D1E20", borderRadius: "8px"}'
            color='#EDEEF0'
            :label='$t("MSG_JOIN_THE_WAITLIST")'
            @click='onJoinTheWaitlistClick'
            :disable='!validateEmail(emailAddress)'
          />
        </div>
      </div>
      <div
        class='text-center'
        :style='{paddingTop: "40px", paddingBottom: "64px"}'
      >
        <q-img class='indicator' width='100px' height='100px' src='~assets/HashageIndicator.png' />
      </div>
    </div>
  </div>
  <div :style='{background: "#232529"}'>
    <div class='row content-width horizontal-center' :style='{paddingTop: "64px", paddingBottom: "64px"}'>
      <div class='row infos-label'>
        <div :style='{width: "16px", height: "16px", borderRadius: "8px", background: "#EDEEF0"}' />
        <div :style='{marginLeft: "12px", fontWeight: 800, fontSize: "16px",lineHeight: "20px", color: "#EDEEF0"}'>
          INFOS
        </div>
      </div>
      <div class='infos-content' v-html='$t("MSG_HASHAGE_WAITLIST_SUBTITLE")' />
    </div>
  </div>
  <div class='content-width horizontal-center' :style='{marginTop: "120px", marginBottom: "100px"}'>
    <div class='row'>
      <div :style='{width: "16px", height: "16px", borderRadius: "8px", background: "#31373D"}' />
      <div :style='{marginLeft: "12px", fontWeight: 800, fontSize: "16px",lineHeight: "20px", color: "#31373D"}'>
        EARLY BIRD EXCLUSIVE
      </div>
    </div>
    <div class='row' :style='{marginTop: "64px"}'>
      <div class='card'>
        <div class='coming-soon horizontal-center text-center'>
          {{ $t('MSG_COMING_SOON') }}
        </div>
        <div class='text-center' :style='{marginTop: "16px"}'>
          <q-img width='64px' height='64px' src='~assets/Bitcoin.svg' />
        </div>
        <div
          :style='{marginTop: "16px", color: "#31373D", fontWeight: 700, fontSize: "20px", lineHeight: "24px"}'
          class='text-center'
        >
          BTC
        </div>
        <div
          :style='{marginTop: "16px", color: "rgba(49, 55, 61, 0.8)", fontWeight: 400, fontSize: "14px", lineHeight: "20px"}'
        >
          Bitcoin Spot Hashpower
        </div>
        <div
          :style='{marginTop: "12px", color: "rgba(49, 55, 61, 0.8)", fontWeight: 400, fontSize: "14px", lineHeight: "20px"}'
        >
          Only users on the waitlist are eligible to participate after registration.
        </div>
        <div
          :style='{marginTop: "12px", color: "#3187FF", fontWeight: 400, fontSize: "14px", lineHeight: "20px"}'
        >
          2023 Q4
        </div>
      </div>
      <q-space />
      <div class='card'>
        <div class='coming-soon horizontal-center text-center'>
          {{ $t('MSG_COMING_SOON') }}
        </div>
        <div class='text-center' :style='{marginTop: "16px"}'>
          <q-img width='64px' height='64px' src='~assets/Filecoin.svg' />
        </div>
        <div
          :style='{marginTop: "16px", color: "#31373D", fontWeight: 700, fontSize: "20px", lineHeight: "24px"}'
          class='text-center'
        >
          Filecoin
        </div>
        <div
          :style='{marginTop: "16px", color: "rgba(49, 55, 61, 0.8)", fontWeight: 400, fontSize: "14px", lineHeight: "20px"}'
        >
          Filecoin Sealing Completion Spot Storage Power
        </div>
        <div
          :style='{marginTop: "12px", color: "rgba(49, 55, 61, 0.8)", fontWeight: 400, fontSize: "14px", lineHeight: "20px"}'
        >
          Only users on the waitlist are eligible to participate after registration.
        </div>
        <div
          :style='{marginTop: "12px", color: "#3187FF", fontWeight: 400, fontSize: "14px", lineHeight: "20px"}'
        >
          2023 Q4
        </div>
      </div>
      <q-space />
      <div class='card'>
        <div class='coming-soon horizontal-center text-center'>
          {{ $t('MSG_COMING_SOON') }}
        </div>
        <div class='text-center' :style='{marginTop: "16px"}'>
          <q-img width='64px' height='64px' src='~assets/Filecoin.svg' />
        </div>
        <div
          :style='{marginTop: "16px", color: "#31373D", fontWeight: 700, fontSize: "20px", lineHeight: "24px"}'
          class='text-center'
        >
          Filecoin
        </div>
        <div
          :style='{marginTop: "16px", color: "rgba(49, 55, 61, 0.8)", fontWeight: 400, fontSize: "14px", lineHeight: "20px"}'
        >
          Filecoin FEVM Custody Storage Provider Staking
        </div>
        <div
          :style='{marginTop: "12px", color: "rgba(49, 55, 61, 0.8)", fontWeight: 400, fontSize: "14px", lineHeight: "20px"}'
        >
          Only users on the waitlist are eligible to participate after registration.
        </div>
        <div
          :style='{marginTop: "12px", color: "#3187FF", fontWeight: 400, fontSize: "14px", lineHeight: "20px"}'
        >
          2023 Q4
        </div>
      </div>
      <q-space />
      <div class='card'>
        <div class='coming-soon horizontal-center text-center'>
          {{ $t('MSG_COMING_SOON') }}
        </div>
        <div class='text-center' :style='{marginTop: "16px"}'>
          <q-img width='64px' height='64px' src='~assets/Aptos.svg' />
        </div>
        <div
          :style='{marginTop: "16px", color: "#31373D", fontWeight: 700, fontSize: "20px", lineHeight: "24px"}'
          class='text-center'
        >
          Aptos
        </div>
        <div
          :style='{marginTop: "16px", color: "rgba(49, 55, 61, 0.8)", fontWeight: 400, fontSize: "14px", lineHeight: "20px"}'
        >
          Aptos Validator Staking
        </div>
        <div
          :style='{marginTop: "12px", color: "rgba(49, 55, 61, 0.8)", fontWeight: 400, fontSize: "14px", lineHeight: "20px"}'
        >
          Only users on the waitlist are eligible to participate after registration.
        </div>
        <div
          :style='{marginTop: "12px", color: "#3187FF", fontWeight: 400, fontSize: "14px", lineHeight: "20px"}'
        >
          2023 Q4
        </div>
      </div>
    </div>
  </div>
  <div :style='{background: "#FAFAFA"}'>
    <div class='row content-width horizontal-center' :style='{paddingTop: "64px", paddingBottom: "64px"}'>
      <div class='row infos-label'>
        <div :style='{width: "16px", height: "16px", borderRadius: "8px", background: "#31373D"}' />
        <div :style='{marginLeft: "12px", fontWeight: 800, fontSize: "16px",lineHeight: "20px", color: "#31373D"}'>
          FAQ
        </div>
      </div>
      <div class='infos-content faqs'>
        <div class='row'>
          <q-icon :name='faqTitle === "Who is HashAge ?" ? "expand_more" : "chevron_right"' size='32px' :style='{color: "#31373D !important"}' />
          <div class='faq-text'>
            <div class='faq-title text-primary cursor-pointer' @click='faqTitle = "Who is HashAge ?"' :style='{color: "#31373D !important"}'>
              Who is HashAge ?
            </div>
            <q-slide-transition>
              <div class='faq-subtitle color-main-transparent-80' v-show='faqTitle === "Who is HashAge ?"' :style='{color: "rgba(49, 55, 61, 0.6) !important"}'>
                HashAge is a creative crypto platform that is backed by Hpool, the world leading PoC mining pool. HashAge will be online at 2023 Q4. HashAge's founder team members contain Crypto Scientists, Crypto Miners, Software Engineers, Storage Experts, and IDC Holders. HashAge aims to be one of the leading crypto platforms of the world with its commitment to the reliability and security of its service.
              </div>
            </q-slide-transition>
          </div>
        </div>
        <div class='row'>
          <q-icon :name='faqTitle === "What is the relationship between HashAge and Crypto More ?" ? "expand_more" : "chevron_right"' size='32px' :style='{color: "#31373D !important"}' />
          <div class='faq-text'>
            <div class='faq-title text-primary cursor-pointer' @click='faqTitle = "What is the relationship between HashAge and Crypto More ?"' :style='{color: "#31373D !important"}'>
              What is the relationship between HashAge and Crypto More ?
            </div>
            <q-slide-transition>
              <div class='faq-subtitle color-main-transparent-80' v-show='faqTitle === "What is the relationship between HashAge and Crypto More ?"' :style='{color: "rgba(49, 55, 61, 0.6) !important"}'>
                Crypto More is the leading crypto platform and solution vendor of the world. HashAge application is built with infrastructure of Crypto More's Crypto Enterprise service.
              </div>
            </q-slide-transition>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class='row content-width horizontal-center' :style='{paddingTop: "64px", paddingBottom: "64px"}'>
    <div class='row infos-label'>
      <div :style='{width: "16px", height: "16px", borderRadius: "8px", background: "#31373D"}' />
      <div :style='{marginLeft: "12px", fontWeight: 800, fontSize: "16px",lineHeight: "20px", color: "#31373D"}'>
        DISCLAIMER
      </div>
    </div>
    <div class='infos-content'>
      <div class='faq-subtitle color-main-transparent-80' :style='{color: "rgba(49, 55, 61, 0.6) !important", fontSize: "16px"}'>
        Although HashAge is a close partner of Crypto More, all products provided by HashAge are not relevant to Crypto More and the deal between HashAge and the user is out of Crypto More's control, even if the user subscribed HashAge through this link.
      </div>
    </div>
  </div>
  <div :style='{background: "#1D1E20", height: "68px"}'>
    <div class='row content-width horizontal-center' :style='{color: "rgba(237, 238, 240, 0.6)", lineHeight: "68px"}'>
      ©️ 2023 HashAge LTD. All rights reserved
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { subscriber, notification, user } from 'src/mystore'
import { useI18n } from 'vue-i18n'
import { HashAgeAppID } from 'src/const/const'
import { validateEmail } from 'src/utils/validator'

// eslint-disable-next-line @typescript-eslint/unbound-method
const { t } = useI18n({ useScope: 'global' })

const logined = user.useLocalUserStore()
const emailAddress = ref(logined.User?.EmailAddress)
const _subscriber = subscriber.useSubscriberStore()
const faqTitle = ref('Who is HashAge ?')

const onJoinTheWaitlistClick = () => {
  _subscriber.createSubscriber({
    EmailAddress: emailAddress.value,
    SubscribeAppID: HashAgeAppID,
    Message: {
      Error: {
        Title: t('MSG_SUBSCRIBE'),
        Message: t('MSG_SUBSCRIBE_FAIL'),
        Popup: true,
        Type: notification.NotifyType.Error
      },
      Info: {
        Title: t('MSG_SUBSCRIBE'),
        Message: t('MSG_SUBSCRIBE_SUCCESS'),
        Popup: true,
        Type: notification.NotifyType.Success
      }
    }
  }, () => {
    // TODO
  })
}

</script>

<style lang='sass' scoped>
.banner
  background: url('src/assets/HashageWaitListBg.png')
  background-size: cover
  padding-top: 120px

::v-deep .hashage-1
  background: linear-gradient(92.1deg, #3187FF 4.09%, #713AEF 52.6%, #F5841F 100%)
  -webkit-background-clip: text
  -webkit-text-fill-color: transparent

.waitlist-input
  width: 510px
  height: 368px
  background: rgba(255, 255, 255, 0.8)
  border: 1px solid #EAEAEA
  backdrop-filter: blur(10px)
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 16px
  margin-left: 82px
  padding: 40px

.infos-label
  width: 400px

.infos-content
  color: rgba(237, 238, 240, 0.8)
  font-weight: 500
  font-size: 18px
  line-height: 28px
  width: calc(100% - 400px)

::v-deep a:link
  color: white
  background-color: transparent
  text-decoration: none

::v-deep a:visited
  color: white
  background-color: transparent
  text-decoration: none

::v-deep a:hover
  color: white
  background-color: transparent
  text-decoration: underline

::v-deep a:active
  color: white
  background-color: transparent
  text-decoration: underline

.coming-soon
  background: #FAFAFA
  border: 1px solid #EAEAEA
  border-radius: 14px
  font-weight: 600
  font-size: 14px
  line-height: 20px
  color: #3187FF
  width: 122px
  margin-top: -30px

.card
  background: #FAFAFA
  border: 1px solid #EAEAEA
  border-radius: 20px
  padding: 16px
  width: 248px

.faqs
  .faq-text
    width: calc(100% - 48px)
  .faq-title
    font-weight: 600
    font-size: 24px
    line-height: 32px
    margin-left: 16px
    margin-bottom: 24px
  .faq-subtitle
    font-weight: 400
    font-size: 16px
    line-height: 26px
    margin-left: 16px
    margin-bottom: 24px

.indicator
  animation: indicator 20s linear 1s infinite
  -webkit-animation: indicator 20s linear 1s infinite

@-wenkit-keyframes indicator
  from
    -webkit-transform: rotate(0deg)
  to
    -webkit-transform: rotate(360deg)

@keyframes indicator
  from
    -webkit-transform: rotate(0deg)
  to
    -webkit-transform: rotate(360deg)
</style>
