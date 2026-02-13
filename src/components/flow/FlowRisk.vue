<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "FlowRisk",
  props: [
    "risk"
  ]
})
</script>

<template>
<span v-if="risk===1">
  <img class="risk-pill" src="@/assets/risk-1.svg" alt="Risk level">
  <img class="risk-pill" src="@/assets/risk-1.svg" alt="Risk level">
  <img class="risk-pill" src="@/assets/risk-blank.svg" alt="Risk level">
</span>
<span v-else-if="risk===2">
  <img class="risk-pill" src="@/assets/risk-2.svg" alt="Risk level">
  <img class="risk-pill" src="@/assets/risk-2.svg" alt="Risk level">
  <img class="risk-pill" src="@/assets/risk-2.svg" alt="Risk level">
</span>
<span v-else>
  <img class="risk-pill" src="@/assets/risk-0.svg" alt="Risk level">
  <img class="risk-pill" src="@/assets/risk-blank.svg" alt="Risk level">
  <img class="risk-pill" src="@/assets/risk-blank.svg" alt="Risk level">
</span>
</template>

<style scoped>
.risk-pill{
  margin-right: 2px;
  width: 8px;
  height: 8px;
}
</style>