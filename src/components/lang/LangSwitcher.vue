<template>
  <q-btn-dropdown
    flat
    class='btn btn-small'
    icon='language'
    dropdown-icon='expand_more'
    :label='curLang'
    :menu-offset='[0, 22]'
  >
    <q-list class='menu'>
      <q-item
        dense
        clickable
        v-close-popup
        v-for='_lang in langs'
        :class='[ curLang === _lang.Short ? "highlight-transparent-10" : "" ]'
        :key='_lang.ID'
        @click='onLangClick(_lang)'
      >
        <div class='row item'>
          <q-img class='logo' :src='_lang.Logo' />
          <q-item-label>{{ _lang.Name }}</q-item-label>
        </div>
        <q-separator class='highlight-transparent-10' />
      </q-item>
    </q-list>
  </q-btn-dropdown>
</template>

<script setup lang='ts'>
import { applang, _locale, user, g11nbase } from 'src/npoolstore'
import { computed } from 'vue'

const lang = applang.useAppLangStore()
const langs = computed(() => lang.langs(undefined))

const locale = _locale.useLocaleStore()
const curLang = computed(() => locale.AppLang?.Short)

const logined = user.useLocalUserStore()
const _user = user.useUserStore()

const onLangClick = (language: g11nbase.AppLang) => {
  if (language.LangID === locale.langID()) {
    return
  }
  locale.setLang(language)
  if (logined.logined) {
    _user.updateUser({
      SelectedLangID: language.LangID,
      Message: {}
    }, () => {
      // TODO
    })
  }
}

</script>

<style lang='sass' scoped>
.menu
  min-width: 160px

.menu .logo
  width: 32px
  height: 16px
  margin-right: 6px

.menu .item
  height: 32px
  padding: 8px 0
</style>
