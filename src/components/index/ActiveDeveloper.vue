<template>
  <div class='active-developer full-width'>
    <div class='content-width horizontal-center'>
      <div class='title text-center horizontal-center' v-html='$t("MSG_ACTIVE_DEVELOPER_TITLE")' />
      <div class='subtitle text-center horizontal-center color-main-transparent-60' v-html='$t("MSG_ACTIVE_DEVELOPER_SUBTITLE")' />
      <div class='projects row'>
        <div class='left'>
          <div class='row mobile-hide'>
            <div class='fil-peggy'>
              <q-img width='207px' height='173px' :src='filPeggyHackFEVM' />
              <q-img width='136px' height='136px' :src='peggyLogo' />
            </div>
            <div class='web3eye'>
              <q-img width='189px' height='108px' :src='web3eyeLogo' />
            </div>
          </div>
          <div class='fil-peggy-caption'>
            <div class='peggy-title' v-html='$t("MSG_FIL_PEGGY")' />
            <div class='peggy-subtitle color-main-transparent-80' v-html='$t("MSG_FIL_PEGGY_SUBTITLE")' />
          </div>
        </div>
        <div class='right'>
          <div class='web3eye-title' v-html='$t("MSG_WEB3_0_EYE")' />
          <div class='web3eye-subtitle' v-html='$t("MSG_WEB3EYE_SUBTITLE")' />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import filPeggyHackFEVM from 'src/assets/FILPeggyHackFEVM.svg'
import peggyLogo from 'src/assets/PeggyLogo.png'
import web3eyeLogo from 'src/assets/Web3EyeLogo.png'
</script>

<style lang='sass' scoped>
.active-developer
  background: #FFF9DE
  padding-top: 120px
  padding-bottom: 120px

.active-developer .title
  font-size: 54px
  color: $primary
  max-width: 923px
  line-height: 60px
  font-weight: 600

.active-developer .subtitle
  font-size: 20px
  font-weight: 500
  line-height: 30px
  max-width: 890px
  margin-top: 36px

.active-developer .projects
  margin-top: 130px

.active-developer .projects .right
  background: $primary
  border-radius: 24px
  padding: 36px
  width: 516px
  margin-left: 12px
  @media (max-width: 1160px)
    width: 100%
    margin-left: 0

.active-developer .projects .right .web3eye-title
  font-size: 36px
  font-weight: 600
  line-height: 40px
  color: #FEFBED

.active-developer .projects .right .web3eye-subtitle
  font-size: 16px
  font-weight: 400
  line-height: 26px
  color: rgba(254, 251, 237, 0.8)
  margin-top: 24px

.active-developer .projects .fil-peggy
  background: white
  border-radius: 24px
  width: 380px
  height: 210px
  padding: 18px 0 18px 26px

.active-developer .projects .web3eye
  background: #D4FFE8
  border-radius: 24px
  width: 360px
  height: 210px
  margin-left: 12px
  text-align: center
  line-height: 210px

.active-developer .projects .fil-peggy-caption
  width: 752px
  padding: 36px
  background: #FAF2D5
  border-radius: 24px
  margin-top: 12px
  @media (max-width: 1160px)
    width: 100%
    margin-bottom: 16px

.active-developer .projects .fil-peggy-caption .peggy-title
  font-size: 36px
  font-weight: 600
  line-height: 40px
  color: $primary

.active-developer .projects .fil-peggy-caption .peggy-subtitle
  font-size: 16
  font-weight: 400
  line-height: 24px
  margin-top: 24px
</style>
