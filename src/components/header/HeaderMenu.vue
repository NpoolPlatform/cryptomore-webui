<template>
  <q-tabs
    v-model='tab'
    class='color-main menu'
    indicator-color='primary'
  >
    <q-tab :name='menu.Menu.MenuProducts'>
      <div class='inline cursor-pointer'>
        <div class='fit flex flex-center text-center non-selectable'>
          {{ $t('MSG_PRODUCTS') }}
          <q-icon name='expand_more' class='text-primary icon' size='24px' />
        </div>
        <q-menu flat :offset='[0, 28]' width='100%'>
          <ProductsMenu />
        </q-menu>
      </div>
    </q-tab>
    <q-tab :name='menu.Menu.MenuPricing' :label='$t("MSG_PRICING")' />
    <q-tab :name='menu.Menu.MenuPartners' :label='$t("MSG_PARTNERS")' />
    <q-tab :name='menu.Menu.MenuDocs' :label='$t("MSG_DOCS")' />
  </q-tabs>
</template>

<script setup lang='ts'>
import { ref, defineAsyncComponent } from 'vue'
import { menu } from 'src/menu'

const ProductsMenu = defineAsyncComponent(() => import('src/components/header/ProductsMenu.vue'))

const tab = ref(menu.Menu.MenuProducts)

</script>

<style lang='sass' scoped>
.menu .q-tab-1
  padding: 0

::v-deep .q-tab__indicator
  height: 3px

.menu .icon
  margin-left: 12px
</style>
