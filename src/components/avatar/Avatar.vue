<template>
  <q-btn
    flat
    dense
    class='btn btn-small text-primary'
    icon='account_circle'
    size='16px'
  >
    <q-menu :offset='[320, 22]'>
      <q-list :style='{width: "360px"}' class='text-primary'>
        <q-item dense :style='{paddingLeft: "0px"}'>
          <q-item-section>
            <q-avatar dense icon='account_circle' size='180px' />
          </q-item-section>
          <q-separator vertical :style='{marginTop: "16px", marginBottom: "16px"}' />
          <q-item-section>
            <span :style='{marginLeft: "16px"}'>{{ _user.User?.EmailAddress }}</span>
          </q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>

<script setup lang='ts'>
import { user } from 'src/mystore'
const _user = user.useLocalUserStore()
</script>
