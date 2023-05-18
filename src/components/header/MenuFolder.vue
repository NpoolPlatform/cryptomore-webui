<template>
  <q-btn
    class='btn btn-small'
    color='primary'
    flat
    dense
    :icon='collapsed ? "format_indent_decrease" : "format_indent_increase"'
    @click='onMenuFoldClick'
    size='16px'
  >
    <q-menu>
      <ProductsMenu />
    </q-menu>
  </q-btn>
</template>

<script setup lang='ts'>
import { ref, defineAsyncComponent } from 'vue'

const ProductsMenu = defineAsyncComponent(() => import('src/components/header/ProductsMenu.vue'))

const collapsed = ref(true)
const onMenuFoldClick = () => {
  collapsed.value = !collapsed.value
}

</script>
