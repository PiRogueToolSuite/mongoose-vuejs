<script lang="ts">
import {defineComponent} from 'vue'
import CopyBtn from "@/components/generic/CopyBtn.vue";

export default defineComponent({
  name: "DestinationHostDetails",
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
      <td class="text-left"><CopyBtn :content="flow.enrichment.dst_hostname">Hostname</CopyBtn></td>
      <td class="text-end text-wrap text-break font-monospace small">{{ flow.enrichment.dst_hostname }}</td>
    </tr>
    <tr>
      <td class="text-left"><CopyBtn :content="flow.dst_ip">IP address </CopyBtn></td>
      <td class="text-end text-wrap text-break font-monospace small text-primary">{{ flow.dst_ip }}</td>
    </tr>
    <tr>
      <td class="text-left">Port</td>
      <td class="text-end text-wrap text-break font-monospace small">{{ flow.dst_port }}</td>
    </tr>
    <tr>
      <td class="text-left">MAC address</td>
      <td class="text-end text-wrap text-break font-monospace small">{{ flow.dst_mac }}</td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped>
</style>