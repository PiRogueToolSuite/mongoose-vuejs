<script lang="ts">
import {defineComponent} from 'vue'
import FlowRisk from "@/components/flow/FlowRisk.vue";
import CopyBtn from "@/components/generic/CopyBtn.vue";

export default defineComponent({
  name: "FlowDetails",
  components: {CopyBtn, FlowRisk},
  props: [
    "flow"
  ]
})
</script>

<template>
  <table class="table table-sm table-borderless mb-0">
    <tbody>
    <tr>
      <td class="text-left">Risk</td>
      <td class="text-end">
        <FlowRisk :risk="flow.risk"></FlowRisk>
      </td>
    </tr>
    <tr>
      <td class="text-left">Time</td>
      <td class="text-end">{{ $formatDate(flow.time) }}</td>
    </tr>
    <tr>
      <td class="text-left">Duration</td>
      <td class="text-end">{{ flow.bidirectional_duration_ms/1000. }}s</td>
    </tr>
    <tr>
      <td class="text-left">Application</td>
      <td class="text-end">{{ flow.application_name }}</td>
    </tr>
    <tr>
      <td class="text-left">Category</td>
      <td class="text-end">{{ flow.application_category_name }}</td>
    </tr>
    <tr>
      <td class="text-left">Direction</td>
      <td class="text-end">{{ flow.enrichment.direction }}</td>
    </tr>
    <tr>
      <td class="text-left"><CopyBtn :content="flow.requested_server_name">Request</CopyBtn></td>
      <td class="text-end font-monospace small text-wrap text-break">{{ flow.requested_server_name }}</td>
    </tr>
    <tr>
      <td class="text-left"><CopyBtn :content="flow.community_id">Community ID</CopyBtn></td>
      <td class="text-end font-monospace small">{{ flow.community_id }}</td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped>
</style>