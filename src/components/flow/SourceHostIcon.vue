<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "SourceHostIcon",
  props: [
    "flow"
  ]
})
</script>

<template>
<i v-if="flow.enrichment.direction==='outbound'" class="pi pi-desktop"></i>
<i v-else-if="flow.enrichment.direction==='inbound'" class="pi pi-server"></i>
</template>

<style scoped>
</style>