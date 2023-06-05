<template>
  <v-chart :option='option' :style='{height: "240px"}' />
</template>

<script setup lang='ts'>
import { computed, defineProps, toRef } from 'vue'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'

import {
  PieChart,
  BarChart,
  GaugeChart,
  RadarChart,
  FunnelChart,
  LineChart
} from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
} from 'echarts/components'
import VChart from 'vue-echarts'

use([
  CanvasRenderer,
  BarChart,
  PieChart,
  GaugeChart,
  RadarChart,
  FunnelChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  LineChart,
  GridComponent
])

interface Props {
  title: string
  xdatas: Array<number>
  ydatas: Array<number>
}

const props = defineProps<Props>()
const title = toRef(props, 'title')
const xdatas = toRef(props, 'xdatas')
const ydatas = toRef(props, 'ydatas')

const ymin = computed(() => Math.min(...ydatas.value) * 0.95)

const option = computed(() => {
  return {
    title: {
      text: title.value
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      textStyle: {
        color: 'white'
      },
      data: ['Price']
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: xdatas.value,
      min: Math.max(xdatas.value.length - 6000, 0)
    },
    yAxis: {
      type: 'value',
      min: ymin.value
    },
    series: [
      {
        name: 'Price',
        type: 'line',
        smooth: true,
        data: ydatas.value
      }
    ],
    visualMap: [
      {
        show: false,
        type: 'continuous',
        seriesIndex: 0
      },
      {
        show: false,
        type: 'continuous',
        seriesIndex: 1,
        dimension: 0
      }
    ]
  }
})
</script>
