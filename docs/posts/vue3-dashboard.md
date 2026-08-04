# Vue3 + Element Plus 实现数据分析仪表盘

本文介绍如何用 Vue3 和 Element Plus 快速搭建一个数据可视化仪表盘。

## 安装依赖

```bash
npm install element-plus echarts vue-echarts
```

## KPI 卡片组件

```vue
<template>
  <div class="kpi-card">
    <div class="label">{{ label }}</div>
    <div class="value">{{ value }}</div>
    <div class="change" :class="change > 0 ? 'up' : 'down'">
      {{ change > 0 ? '↑' : '↓' }} {{ Math.abs(change) }}%
    </div>
  </div>
</template>
<script setup>
defineProps(['label', 'value', 'change'])
</script>
```

## ECharts 折线图

```vue
<template>
  <v-chart :option="option" style="height: 300px" />
</template>
<script setup>
import { computed } from 'vue'
const props = defineProps(['dates', 'values'])
const option = computed(() => ({
  xAxis: { type: 'category', data: props.dates },
  yAxis: { type: 'value' },
  series: [{ type: 'line', data: props.values, smooth: true }]
}))
</script>
```
