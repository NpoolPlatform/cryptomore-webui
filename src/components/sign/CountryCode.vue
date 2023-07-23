<template>
  <q-select
    dense
    filled
    v-model='_country'
    :options='countries'
    dropdown-icon='expand_more'
    :label='$t("MSG_COUNTRY_CODE")'
    map-options
    @update:model-value='(val) => onValueUpdated(val)'
  >
    <template #prepend>
      <q-img width='32px' height='24px' :src='country?.Flag' />
    </template>
    <template #selected>
      {{ _country?.Country }} ({{ _country?.Code }})
    </template>
    <template #option='scope'>
      <q-item v-bind='scope.itemProps'>
        <q-item-section>
          <div class='row'>
            <q-img width='32px' height='24px' :src='scope.opt.Flag' />
            <span :style='{marginLeft: "12px"}'>
              {{ scope.opt.Country }} ({{ scope.opt.Code }})
            </span>
          </div>
        </q-item-section>
      </q-item>
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
