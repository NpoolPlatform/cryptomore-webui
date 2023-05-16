<template>
  <q-tabs
    v-model='tab'
    inline-label
    class='color-main menu'
    indicator-color='main'
    :narrow-indicator='false'
  >
    <q-tab dense :name='menu.Menu.MenuProducts'>
      <q-btn
        stretch
        flat
        :label='$t("MSG_PRODUCTS")'
        size='16px'
        icon-right='expand_more'
      >
        <q-menu>
          HHHHHHHHHHHHHHHHHHHHHHHHHHH
        </q-menu>
      </q-btn>
    </q-tab>
    <q-tab :name='menu.Menu.MenuPricing'>
      <q-btn
        stretch
        flat
        :label='$t("MSG_PRICING")'
        size='16px'
        icon-right='expand_more'
      >
        <q-menu>
          HHHHHHHHHHHHHHHHHHHHHHHHHHH
        </q-menu>
      </q-btn>
    </q-tab>
  </q-tabs>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { menu } from 'src/menu'

const tab = ref(menu.Menu.MenuProducts)

</script>

<style lang='sass' scoped>
.menu .q-tab
  padding: 0
</style>
