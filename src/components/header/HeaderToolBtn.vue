<template>
  <q-btn
    flat
    dense
    round
    :icon='icon'
    @click='onClick'
  />
</template>

<script setup lang='ts'>
import { defineProps, withDefaults, computed, defineEmits } from 'vue'

interface Props {
  icon: string
}

const props = withDefaults(defineProps<Props>(), {
  icon: 'icons/github.png'
})

const icon = computed(() => 'img:' + props.icon)

const emit = defineEmits<{(e: 'click'): void }>()
const onClick = () => {
  emit('click')
}

</script>

<style lang='sass' scoped>
.btn-icon
  background-color: red
</style>
