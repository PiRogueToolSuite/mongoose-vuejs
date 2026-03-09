<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "GeoIPDetails",
  props: [
    "geoip"
  ]
})
</script>

<template>
  <table class="table table-sm table-borderless mb-0">
    <tbody>
    <tr>
      <td class="text-left">Country</td>
      <td class="text-end">{{ geoip.country }}</td>
    </tr>
    <tr>
      <td class="text-left">Organisation</td>
      <td class="text-end fst-italic text-primary">{{ geoip.organization }}</td>
    </tr>
    <tr>
      <td class="text-left">ASN</td>
      <td class="text-end font-monospace small">{{ geoip.asn }}</td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped>
</style>