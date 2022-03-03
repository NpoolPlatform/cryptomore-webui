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
import { Language } from 'src/store/langs/types'
import { useLangStore } from 'src/store/langs'

const downArrow = ref('img: icons/DownArrow.svg')
const internet = ref('img: icons/Internet.svg')

const lang = useLangStore()
const langs = computed(() => lang.Languages)
const langLabel = computed(() => lang.CurLang?.Short !== '' ? lang.CurLang?.Short : lang.CurLang.Lang)

const onLangItemClick = (myLang: Language) => {
  lang.CurLang = myLang
}

</script>

<style lang='sass' scoped>
.label
  font-size: 18px
  margin-left: 6px
</style>
