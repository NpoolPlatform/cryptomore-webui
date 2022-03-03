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
          EN
        </div>
      </template>
      <q-list>
        <q-item v-for='lang in langs' :key='lang.ID' clickable @click='onLangItemClick(lang)'>
          <q-item-section avatar>
            <q-avatar icon='internet' />
          </q-item-section>
          <q-item-label>{{ lang.Name }}</q-item-label>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { Language } from 'src/store/langs/types'

const downArrow = ref('img: icons/DownArrow.svg')
const internet = ref('img: icons/Internet.svg')

const langs = [
  {
    ID: '123123123',
    Name: 'EN'
  }
] as Array<Language>

const onLangItemClick = (lang: Language) => {
  console.log(lang)
}

</script>

<style lang='sass' scoped>
.label
  font-size: 20px
  margin-left: 6px
</style>
