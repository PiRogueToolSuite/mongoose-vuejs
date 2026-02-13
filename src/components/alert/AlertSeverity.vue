<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "AlertSeverity",
  props: [
    "severity"
  ]
})
</script>

<template>
<span v-if="severity===1">
  <img class="severity-pill" src="../../assets/risk-2.svg" alt="Risk level">
  <img class="severity-pill" src="../../assets/risk-2.svg" alt="Risk level">
  <img class="severity-pill" src="../../assets/risk-2.svg" alt="Risk level">
</span>
<span v-else>
  <img class="severity-pill" src="../../assets/risk-1.svg" alt="Risk level">
  <img class="severity-pill" src="../../assets/risk-1.svg" alt="Risk level">
  <img class="severity-pill" src="../../assets/risk-blank.svg" alt="Risk level">
</span>
</template>

<style scoped>
.severity-pill{
  margin-right: 2px;
  width: 8px;
  height: 8px;
}
</style>