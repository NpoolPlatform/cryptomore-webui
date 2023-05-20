<template>
  <q-btn
    class='btn btn-small'
    color='primary'
    flat
    dense
    round
    :icon='"img:" + icon'
    @click='onClick'
  />
</template>

<script setup lang='ts'>
import { defineProps, withDefaults, defineEmits, toRef } from 'vue'

interface Props {
  icon: string
}

const props = withDefaults(defineProps<Props>(), {
  icon: 'icons/github.png'
})

const icon = toRef(props, 'icon')

const emit = defineEmits<{(e: 'click'): void }>()
const onClick = () => {
  emit('click')
}

</script>
