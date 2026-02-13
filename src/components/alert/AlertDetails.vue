<script lang="ts">
import {defineComponent} from 'vue'
import AlertSeverity from "@/components/alert/AlertSeverity.vue";

export default defineComponent({
  name: "AlertDetails",
  components: {AlertSeverity},
  props: [
    "alert"
  ]
})
</script>

<template>

  <div class="">
    <div class="">
      <AlertSeverity :severity="alert.severity"/>
      {{ alert.signature }}
    </div>
    <div class="">{{ alert.category }}</div>
  </div>
  <table class="table table-sm table-borderless mb-0 mt-2">
    <tbody>
    <tr>
      <td class="text-left">Severity</td>
      <td class="text-end font-monospace fw-bold  ">{{ alert.severity }}</td>
    </tr>
    <tr>
      <td class="text-left">Time</td>
      <td class="text-end">
        {{ $formatDate(alert.time) }}
      </td>
    </tr>
    <tr>
      <td class="text-left">Source</td>
      <td class="text-end font-monospace small text-primary">{{ alert.src_ip }}</td>
    </tr>
    <tr>
      <td class="text-left">Destination</td>
      <td class="text-end font-monospace small text-primary">{{ alert.dst_ip }}</td>
    </tr>
    <tr>
      <td class="text-left">Community ID</td>
      <td class="text-end font-monospace small">{{ alert.community_id }}</td>
    </tr>
    </tbody>
  </table>
  <div>
    <div class="font-monospace small text-wrap text-break ms-2 my-4">
      {{ alert.rule }}
    </div>
  </div>
</template>

<style scoped>
</style>