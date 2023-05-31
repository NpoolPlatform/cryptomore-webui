<template>
  <div class='row content-width horizontal-center actbar'>
    <div class='parent'>
      {{ parent }}
    </div>
    <q-icon name='chevron_right' class='parent indicator' />
    <div class='current'>
      {{ current }}
    </div>
    <q-space />
    <div class='row cursor-pointer' @click='void router.back()'>
      <q-icon name='chevron_left' class='indicator' />
      <div class='current'>
        Back
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { defineProps, toRef } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

interface Props {
  parent: string
  current: string
}
const props = defineProps<Props>()
const parent = toRef(props, 'parent')
const current = toRef(props, 'current')
</script>

<style lang='sass' scoped>
.actbar
  padding: 36px 0
  font-weight: 600
  font-size: 18px
  line-height: 28px
  .parent
    color: rgba(10, 11, 26, 0.4)
  .indicator
    margin: auto 8px
  .current
    color: rgba(10, 11, 26, 0.8)
</style>
