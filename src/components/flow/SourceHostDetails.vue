<script lang="ts">
import {defineComponent} from 'vue'
import CopyBtn from "@/components/generic/CopyBtn.vue";

export default defineComponent({
  name: "SourceHostDetails",
  components: {CopyBtn},
  props: [
    "flow"
  ]
})
</script>

<template>
  <table class="table table-sm table-borderless mb-0">
    <tbody>
    <tr>
      <td class="text-left"><CopyBtn :content="flow.enrichment.src_hostname">Hostname</CopyBtn></td>
      <td class="text-end text-wrap text-break font-monospace small">{{ flow.enrichment.src_hostname }}</td>
    </tr>
    <tr>
      <td class="text-left"><CopyBtn :content="flow.src_ip">IP address </CopyBtn></td>
      <td class="text-end text-wrap text-break font-monospace small text-primary">{{ flow.src_ip }}</td>
    </tr>
    <tr>
      <td class="text-left">Port</td>
      <td class="text-end text-wrap text-break font-monospace small">{{ flow.src_port }}</td>
    </tr>
    <tr>
      <td class="text-left">MAC address</td>
      <td class="text-end text-wrap text-break font-monospace small">{{ flow.src_mac }}</td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped>
</style>