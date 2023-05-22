<template>
  <div class='row content-width horizontal-center'>
    <div
      class='card cursor-pointer'
    >
      HHHHHHHHHHHHH
    </div>
    <q-space />
    <div
      class='card cursor-pointer'
    >
      HHHHHHHHHHHHH
    </div>
    <q-space />
    <div
      class='card cursor-pointer'
    >
      HHHHHHHHHHHHH
    </div>
  </div>
</template>

<script setup lang='ts'>
</script>

<style lang='sass' scoped>
.card
  border: 1px solid #EAEAEA
  background: #FAFAFA
  border-radius: 16px
  padding: 28px
  width: 400px
  height: 612px
  margin-bottom: 16px

@keyframes hoverscale
  0%
    height: 612px
  25%
    height: 620px
    margin-top: -4px
    margin-bottom: 12px
  50%
    height: 628px
    margin-top: -8px
    margin-bottom: 8px
  75%
    height: 636px
    margin-top: -12px
    margin-bottom: 4px
  100%
    height: 644px
    top: -16px
    margin-bottom: 0

.card:hover
  background: linear-gradient(180deg, rgba(86, 240, 159, 0.6) 0%, rgba(250, 250, 250, 0) 100%)
  height: 644px
  animation-name: hoverscale
  animation-duration: 1000ms
  margin-top: -16px
</style>
