<template>
  <NetworkEventsAnalyzer :flows="flows" :alerts="alerts"></NetworkEventsAnalyzer>
</template>

<script setup>
import NetworkEventsAnalyzer from "@/components/NetworkEventsAnalyzer.vue";
</script>

<script>
import dpi from "./assets/mongoose-enriched-network-dpi.json" with {type: "json"};
import alerts from "./assets/mongoose-enriched-network-alert.json" with {type: "json"};
export default {
  data() {
    return {flows: dpi, alerts: alerts}
  },
  methods: {

  },
  mounted() {
    console.log(this.flows)
  }
}
</script>