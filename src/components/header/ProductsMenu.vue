<template>
  <div class='popup-menu-padding'>
    <q-list dense>
      <q-item
        dense
        clickable
        :class='["cursor-pointer menu-item", firstLevelMenu === menu.Menu.MenuCryptoPlusService ? "highlight-transparent-10" : ""]'
        @click='onFirstLevelMenuClick(menu.Menu.MenuCryptoPlusService)'
      >
        <div class='row'>
          <q-img :src='cryptoPlusServiceIcon' width='28px' height='28px' />
          <div class='row'>
            <div class='level-1'>
              <div class='title text-primary'>
                {{ $t('MSG_CRYPTO_PLUS_SERVICE') }}
              </div>
              <div class='subtitle color-main-transparent-60'>
                {{ $t('MSG_READY_TO_USE_CRYPTO_PLUS_SERVICE') }}
              </div>
            </div>
            <q-img :src='rightArrow' width='18px' height='18px' />
          </div>
        </div>
        <q-menu class='submenu' anchor='top end' self='top start' :offset='[18, 0]'>
          <div class='popup-menu-padding'>
            <q-list>
              <q-item
                dense
                clickable
                :class='["cursor-pointer menu-item", secondLevelMenu === menu.Menu.MenuFilPeggy ? "highlight-transparent-10" : ""]'
                @click='onSecondLevelMenuClick(menu.Menu.MenuFilPeggy)'
              >
                <div class='row'>
                  <q-img :src='filPeggyIcon' width='28px' height='28px' />
                  <div class='row'>
                    <div class='level-2'>
                      <div class='title text-primary'>
                        {{ $t('MSG_FIL_PEGGY') }}
                      </div>
                      <div class='subtitle color-main-transparent-60'>
                        {{ $t('MSG_FIL_PEGGY_ONE_WORD') }}
                      </div>
                    </div>
                  </div>
                </div>
              </q-item>
              <q-item
                dense
                clickable
                :class='["cursor-pointer menu-item not-first", secondLevelMenu === menu.Menu.MenuWeb3Eye ? "highlight-transparent-10" : ""]'
                @click='onSecondLevelMenuClick(menu.Menu.MenuWeb3Eye)'
              >
                <div class='row'>
                  <q-img :src='web3eyeIcon' width='28px' height='28px' />
                  <div class='row'>
                    <div class='level-2'>
                      <div class='title text-primary'>
                        {{ $t('MSG_WEB3EYE') }}
                      </div>
                      <div class='subtitle color-main-transparent-60'>
                        {{ $t('MSG_WEB3EYE_ONE_WORD') }}
                      </div>
                    </div>
                  </div>
                </div>
              </q-item>
              <q-item
                dense
                clickable
                :class='["cursor-pointer menu-item not-first", secondLevelMenu === menu.Menu.MenuProcyon ? "highlight-transparent-10" : ""]'
                @click='onSecondLevelMenuClick(menu.Menu.MenuProcyon)'
              >
                <div class='row'>
                  <q-img :src='procyonIcon' width='28px' height='28px' />
                  <div class='row'>
                    <div class='level-2'>
                      <div class='title text-primary'>
                        {{ $t('MSG_PROCYON') }}
                      </div>
                      <div class='subtitle color-main-transparent-60'>
                        {{ $t('MSG_PROCYON_ONE_WORD') }}
                      </div>
                    </div>
                  </div>
                </div>
              </q-item>
              <q-item
                dense
                clickable
                :class='["cursor-pointer menu-item not-first", secondLevelMenu === menu.Menu.MenuLPSecretBase ? "highlight-transparent-10" : ""]'
                @click='onSecondLevelMenuClick(menu.Menu.MenuLPSecretBase)'
              >
                <div class='row'>
                  <q-img :src='lbSecretBaseIcon' width='28px' height='28px' />
                  <div class='row'>
                    <div class='level-2'>
                      <div class='title text-primary'>
                        {{ $t('MSG_LP_SECRET_BASE') }}
                      </div>
                      <div class='subtitle color-main-transparent-60'>
                        {{ $t('MSG_LP_SECRET_BASE_ONE_WORD') }}
                      </div>
                    </div>
                  </div>
                </div>
              </q-item>
              <q-item
                dense
                clickable
                :class='["cursor-pointer menu-item not-first", secondLevelMenu === menu.Menu.MenuHashage ? "highlight-transparent-10" : ""]'
                @click='onSecondLevelMenuClick(menu.Menu.MenuHashage)'
              >
                <div class='row'>
                  <q-img :src='hashageIcon' width='28px' height='28px' />
                  <div class='row'>
                    <div class='level-2'>
                      <div class='title text-primary'>
                        {{ $t('MSG_HASHAGE') }}
                      </div>
                      <div class='subtitle color-main-transparent-60'>
                        {{ $t('MSG_HASHAGE_ONE_WORD') }}
                      </div>
                    </div>
                  </div>
                </div>
              </q-item>
            </q-list>
          </div>
        </q-menu>
      </q-item>
      <q-item
        dense
        clickable
        :class='["cursor-pointer menu-item not-first", firstLevelMenu === menu.Menu.MenuCryptoEnterprise ? "highlight-transparent-10" : ""]'
        @click='onFirstLevelMenuClick(menu.Menu.MenuCryptoEnterprise)'
      >
        <div class='row'>
          <q-img :src='cryptoEnterproseIcon' width='28px' height='28px' />
          <div class='row'>
            <div class='level-1'>
              <div class='title text-primary'>
                {{ $t('MSG_CRYPTO_ENTERPRISE') }}
              </div>
              <div class='subtitle color-main-transparent-60'>
                {{ $t('MSG_DEDICATED_ENTERPRISE_SOLUTION') }}
              </div>
            </div>
          </div>
        </div>
      </q-item>
      <q-item
        dense
        clickable
        :class='["cursor-pointer menu-item not-first", firstLevelMenu === menu.Menu.MenuMiningStaking ? "highlight-transparent-10" : ""]'
        @click='onFirstLevelMenuClick(menu.Menu.MenuMiningStaking)'
      >
        <div class='row'>
          <q-img :src='miningStakingIcon' width='28px' height='28px' />
          <div class='row'>
            <div class='level-1'>
              <div class='title text-primary'>
                {{ $t('MSG_MINING_STAKING') }}
              </div>
              <div class='subtitle color-main-transparent-60'>
                {{ $t('MSG_ONE_STOP_MINING_STAKING') }}
              </div>
            </div>
          </div>
        </div>
      </q-item>
    </q-list>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { menu } from '../../menu'

import cryptoPlusServiceIcon from 'src/assets/CryptoPlusServiceIcon.svg'
import cryptoEnterproseIcon from 'src/assets/CryptoEnterprise.svg'
import miningStakingIcon from 'src/assets/MiningStaking.svg'
import filPeggyIcon from 'src/assets/FilPeggyIcon.svg'
import web3eyeIcon from 'src/assets/Web3EyeIcon.svg'
import procyonIcon from 'src/assets/ProcyonIcon.svg'
import hashageIcon from 'src/assets/HashAgeIcon.svg'
import rightArrow from 'src/assets/RightArrow.svg'

const lbSecretBaseIcon = ref(procyonIcon)

const firstLevelMenu = ref(menu.Menu.MenuCryptoPlusService)
const onFirstLevelMenuClick = (menu: menu.Menu) => {
  firstLevelMenu.value = menu
}

const secondLevelMenu = ref(menu.Menu.MenuFilPeggy)
const onSecondLevelMenuClick = (menu: menu.Menu) => {
  secondLevelMenu.value = menu
}

</script>

<style lang='sass' scoped>
.not-first
  margin-top: 16px

.menu-item
  border-radius: 4px
  padding: 12px
  .title
    font-size: 18px
    line-height: 24px
    font-weight: 500
  .subtitle
    font-size: 14px
    line-height: 18px
    font-weight: 400
    margin-top: 6px
  .level-1
    max-width: 230px
    margin-left: 16px
    margin-right: 16px
  .level-2
    max-width: 324px
    margin-left: 16px
    margin-right: 16px
</style>
