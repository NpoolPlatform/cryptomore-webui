<template>
  <q-select
    dense
    filled
    v-model='_country'
    :options='countries'
    :option-label='val => val.Code'
    dropdown-icon='expand_more'
    @update:model-value='(val) => onValueUpdated(val)'
  >
    <template #prepend>
      <q-avatar>
        <img :src='country?.Flag'>
      </q-avatar>
    </template>
  </q-select>
</template>

<script setup lang='ts'>
import { withDefaults, defineEmits, onMounted, computed, toRef, defineProps, ref } from 'vue'
import { g11n, notification } from 'src/mystore'
import { useI18n } from 'vue-i18n'

// eslint-disable-next-line @typescript-eslint/unbound-method
const { t } = useI18n({ useScope: 'global' })

interface Props {
  country: g11n.AppCountry.AppCountry
}
const props = withDefaults(defineProps<Props>(), {
  country: () => undefined as unknown as g11n.AppCountry.AppCountry
})
const country = toRef(props, 'country')
const _country = ref(country)

const emit = defineEmits<{(e: 'update:country', country: g11n.AppCountry.AppCountry): void}>()
const onValueUpdated = (country: g11n.AppCountry.AppCountry) => {
  emit('update:country', country)
}

const appCountry = g11n.AppCountry.useAppCountryStore()
const countries = computed(() => appCountry.Countries)

const getAppCountries = (offset: number, limit: number) => {
  appCountry.getAppCountries({
    Offset: offset,
    Limit: limit,
    Message: {
      Error: {
        Title: t('MSG_GET_COUNTRIES_FAIL'),
        Popup: true,
        Type: notification.NotifyType.Error
      }
    }
  }, (error: boolean, rows: Array<g11n.AppCountry.AppCountry>) => {
    if (error) {
      return
    }
    if (rows.length === 0) {
      return
    }
    if (!country.value) {
      emit('update:country', rows[0])
    }
    getAppCountries(offset + limit, limit)
  })
}

onMounted(() => {
  appCountry.$reset()
  getAppCountries(0, 100)
})

</script>

<style lang='sass' scoped>
</style>
