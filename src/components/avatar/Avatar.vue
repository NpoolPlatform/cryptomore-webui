<template>
  <q-btn
    flat
    dense
    class='btn btn-small text-primary'
    icon='account_circle'
    size='16px'
  >
    <q-menu :offset='[200, 22]'>
      <q-list class='text-primary' :style='{minWidth: "240px"}'>
        <q-item>
          <q-space />
          <q-icon name='account_circle' size='60px' />
          <q-space />
        </q-item>
        <q-item v-if='_user.User?.EmailAddress?.length && !_viewerAddress?.length'>
          <q-space />
          <span :style='{color: "#3DBB77"}'>{{ _user.User?.EmailAddress }}</span>
          <q-space />
        </q-item>
        <q-item v-if='_viewerAddress?.length'>
          <q-space />
          <span
            :style='{whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", color: "#3DBB77"}'
          >
            {{ _viewerAddress }}
          </span>
          <q-space />
        </q-item>
        <q-separator />
        <q-item>
          <q-icon name='email' size='28px' />
          <div :style='{fontSize: "14px", lineHeight: "28px"}'>
            {{ _user.User?.EmailAddress?.length ? _user.User?.EmailAddress : ' - ' }}
          </div>
          <q-space />
          <div class='row cursor-pointer' @click='onBindEmailAddressClick'>
            <div :style='{fontSize: "14px", lineHeight: "28px", color: "#3DBB77"}'>
              {{ $t('MSG_BIND_EMAIL_ADDRESS') }}
            </div>
            <q-icon name='chevron_right' :style='{color: "#3DBB77", marginTop: "4px"}' size='20px' />
          </div>
        </q-item>
        <q-separator />
        <q-item>
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
