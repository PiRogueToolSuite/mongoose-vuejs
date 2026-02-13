<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "FlowSize",
  props: [
    "flow"
  ]
})
</script>

<template>
<span class="me-3">
  <i class="pi pi-angle-double-up me-1" style="font-size: 0.75rem"></i>
  <span class="">{{ $humanFileSize(flow.src2dst_bytes) }}</span>
</span>
<span class="">
  <i class="pi pi-angle-double-down me-1" style="font-size: 0.75rem"></i>
  <span class="">{{ $humanFileSize(flow.dst2src_bytes) }}</span>
</span>
</template>

<style scoped>
</style>