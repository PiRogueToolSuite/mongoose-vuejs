<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "GeoIPFlag",
  props: [
    "geoip"
  ]
})
</script>

<template>
<span :class="`fi fi-${geoip.country.toLowerCase()}`"></span>
</template>

<style scoped>
</style>