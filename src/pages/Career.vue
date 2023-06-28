<template>
  <HeadBackground />
  <Title class='horizontal-center' :title='$t("MSG_OPEN_POSITIONS")' :subtitle='$t("MSG_OPEN_POSITIONS_SUBTITLE")' />
  <div class='positions horizontal-center'>
    <div
      v-for='position in positions'
      :key='position.title'
      class='position horizontal-center cursor-pointer'
      @click='onPositionClick(position)'
    >
      <div class='row'>
        <div class='text-primary title'>
          {{ position.title }}
        </div>
        <q-space />
        <div class='info cursor-not-allowed text-grey'>
          {{ $t('MSG_APPLY') }}
        </div>
      </div>
      <div class='info area'>
        {{ position.areas.join(',') }}
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { defineAsyncComponent, computed } from 'vue'
import { useI18n } from 'vue-i18n'

// eslint-disable-next-line @typescript-eslint/unbound-method
const { t } = useI18n({ useScope: 'global' })

const HeadBackground = defineAsyncComponent(() => import('src/components/common/HeadBackground.vue'))
const Title = defineAsyncComponent(() => import('src/components/common/Title1.vue'))

interface Position {
  title: string
  areas: Array<string>
  applyLink: string
}

const positions = computed(() => [
  {
    title: t('MSG_SOFTWARE_ENGINEER'),
    areas: [t('MSG_ASIA')],
    applyLink: '#'
  },
  {
    title: t('MSG_ALGORITHM_ENGINEER'),
    areas: [t('MSG_ASIA')],
    applyLink: '#'
  },
  {
    title: t('MSG_PRODUCT_MANAGER'),
    areas: [t('MSG_ASIA')],
    applyLink: '#'
  },
  {
    title: t('MSG_TEST_ENGINEER'),
    areas: [t('MSG_ASIA')],
    applyLink: '#'
  }
] as Array<Position>)

const onPositionClick = (position: Position) => {
  console.log(position)
}

</script>

<style lang='sass' scoped>
.positions
  margin-bottom: 142px
  .position
    width: 840px
    min-height: 114px
    border-bottom: 1px solid #EAEAEA
    padding: 24px
    .title
      font-size: 24px
      font-weight: 600
      line-height: 32px
    .info
      font-size: 16px
      font-weight: 600
      line-height: 26px
      color: #0070F3
    .area
      margin-top: 8px
  .position:hover
    box-shadow: 0px 4px 20px rgba(10, 11, 26, 0.1)
    border-radius: 16px
</style>
