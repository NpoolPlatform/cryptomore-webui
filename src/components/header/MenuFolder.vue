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
      TODO: mobile menu
    </q-menu>
  </q-btn>
</template>

<script setup lang='ts'>
import { ref } from 'vue'

const collapsed = ref(true)
const onMenuFoldClick = () => {
  collapsed.value = !collapsed.value
}

</script>
