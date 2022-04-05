<template>
  <div class='row'>
    <q-btn-dropdown
      dense
      flat
      :icon='internet'
      :dropdown-icon='downArrow'
      text-color='white'
      size='12px'
    >
      <template #label>
        <div class='label'>
          {{ langLabel }}
        </div>
      </template>
      <q-list>
        <q-item
          dense
          v-close-popup
          v-for='myLang in langs'
          :key='myLang.ID'
          clickable
          @click='onLangItemClick(myLang)'
        >
          <q-item-section>
            <q-item-label dense>
              {{ myLang.Name }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
</template>

<script setup lang='ts'>
import { ref, computed } from 'vue'
import { Language, useLangStore } from 'npool-cli-v2'
import { useI18n } from 'vue-i18n'

const downArrow = ref('img: icons/DownArrow.svg')
const internet = ref('img: icons/Internet.svg')

const lang = useLangStore()
const langs = computed(() => lang.Languages)
const langLabel = computed(() => lang.CurLang?.Short !== '' ? lang.CurLang?.Short : lang.CurLang.Lang)

const i18n = useI18n()

const onLangItemClick = (myLang: Language) => {
  lang.CurLang = myLang
  i18n.locale.value = lang.CurLang.Lang
}

</script>

<style lang='sass' scoped>
.label
  font-size: 18px
  margin-left: 6px
</style>
