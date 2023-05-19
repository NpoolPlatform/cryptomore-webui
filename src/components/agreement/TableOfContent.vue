<template>
  <div>
    <div
      v-for='entry in entries'
      :key='entry'
      class='row cursor-pointer entry'
      @click='onEntryClick(entry)'
    >
      <div :class='["indicator", selected === entry ? "indicator-selected" : ""]' />
      <div :class='["title", selected === entry ? "text-primary selected" : "color-main-transparent-60"]'>
        {{ entry }}
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { withDefaults, defineProps, toRef, defineEmits } from 'vue'

interface Props {
  selected: string
  entries: Array<string>
}
const props = withDefaults(defineProps<Props>(), {
  selected: '',
  entries: () => [] as Array<string>
})
const selected = toRef(props, 'selected')
const entries = toRef(props, 'entries')

const emit = defineEmits<{(e: 'update:selected', entry: string): void}>()
const onEntryClick = (entry: string) => {
  emit('update:selected', entry)
}

</script>

<style lang='sass' scoped>
.entry
  line-height: 24px
  .indicator
    width: 12px
    height: 12px
    border-radius: 6px
    margin: 6px

  .indicator-selected
    background: $secondary

  .title
    font-size: 14px
    font-weight: 500
    line-height: 24px
    margin-bottom: 12px
    margin-left: 6px
    width: calc(100% - 30px)

  .selected
    font-weight: 600
</style>
