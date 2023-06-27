<template>
  <q-btn
    flat
    dense
    class='btn btn-small text-primary'
    icon='account_circle'
    size='16px'
  >
    <q-menu :offset='[120, 22]'>
      <q-list class='text-primary'>
        <q-item>
          <q-space />
          <q-icon name='account_circle' size='80px' />
          <q-space />
        </q-item>
        <q-item v-if='_user.User?.EmailAddress?.length'>
          <span>{{ _user.User?.EmailAddress }}</span>
        </q-item>
        <q-item v-if='_viewerAddress?.length'>
          <span
            :style='{whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}'
          >
            {{ _viewerAddress }}
          </span>
        </q-item>
        <q-item v-if='!_user.User?.EmailAddress?.length && _viewerAddress?.length'>
          <div class='row' :style='{width: "100%"}'>
            <q-space />
            <q-btn flat class='btn btn-small btn-main' @click='onBindEmailAddressClick'>
              {{ $t('MSG_BIND_EMAIL_ADDRESS') }}
            </q-btn>
            <q-space />
          </div>
        </q-item>
        <q-item>
          <q-space />
          <q-icon name='logout' size='24px' :style='{marginRight: "10px"}' />
          <span>{{ $t('MSG_LOGOUT') }}</span>
          <q-space />
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>

<script setup lang='ts'>
import { Cookies } from 'quasar'
import { user } from 'src/mystore'
import { computed } from 'vue'

const _user = user.useLocalUserStore()

const viewerAddress = computed(() => Cookies.get('viewer_address'))
const _viewerAddress = computed(() => {
  if (!viewerAddress.value) {
    return undefined
  }
  if (viewerAddress.value.length <= 14) {
    return viewerAddress.value
  }
  return viewerAddress.value?.substring(0, 8) + '...' + viewerAddress.value?.substring(viewerAddress.value.length - 6)
})

const onBindEmailAddressClick = () => {
  // TODO
}

</script>
