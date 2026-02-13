<script setup>

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Drawer from 'primevue/drawer';
import Button from 'primevue/button';
import Panel from 'primevue/panel';
import FlowRisk from "@/components/flow/FlowRisk.vue";
import FlowSize from "@/components/flow/FlowSize.vue";
import AlertDetails from "@/components/alert/AlertDetails.vue";
import GeoIPFlag from "@/components/geoip/GeoIPFlag.vue";
import GeoIPDetails from "@/components/geoip/GeoIPDetails.vue";
import SourceHostIcon from "@/components/flow/SourceHostIcon.vue";
import SourceHostDetails from "@/components/flow/SourceHostDetails.vue";
import DestinationHostDetails from "@/components/flow/DestinationHostDetails.vue";
import DestinationHostIcon from "@/components/flow/DestinationHostIcon.vue";
import FlowDetails from "@/components/flow/FlowDetails.vue";
</script>

<script>
const loadDataSource = async (url) => {
  const response = await fetch(url);
  const json = await response.json();
  return json.log.flows;
};

export default {
  props: ['dataSrc', 'flows', 'alerts'],
  expose: ['setEntries'],
  data() {
    return {
      selectedFlow: null,
      drawerVisible: false,
      loading: true,
      // flows: [],
    }
  },
  mounted() {
    if (this.dataSrc) {
      const url = this.dataSrc;
      loadDataSource(url).then(this.setEntries);
    }
    this.loading = false;
  },
  methods: {
    onFlowSelect(event) {
      this.selectedFlow = event.data;
      this.drawerVisible = true;
    },
    onFlowUnselect(event) {
      this.selectedFlow = null;
      this.drawerVisible = false;
    },
    setEntries(flowsArray) {
      this.selectedEntry = null;
      this.flows.splice(0, this.flows.length, ...flowsArray);
    },
    getAlerts(flow) {
      return this.alerts.filter(
        a => a.community_id === flow.community_id
      ) || [];
    },
  },
  computed: {}
}
</script>

<template>
  <div class="network-events-analyzer p-2 items-center justify-center h-100">
    <Drawer v-model:visible="drawerVisible" position="right" class="flow-details-drawer">
      <template #header>
        <div class="flex items-center gap-2">
          <div class="fw-bold text-primary">
            <i class="pi pi-calendar"></i>
            {{ $formatDate(selectedFlow.time) }}
          </div>
          <div class="small mt-1">
            <FlowRisk :risk="selectedFlow.risk"></FlowRisk>
            <span class="font-monospace ms-1">{{ selectedFlow.src_ip }}</span>
            <i class="pi pi-angle-right mx-2 " style="font-size: 0.75rem"></i>
            <span class="font-monospace">{{ selectedFlow.dst_ip }}</span>
          </div>
        </div>
      </template>
      <div>
        <Panel class="mt-2">
          <template #header>
            <span class="fw-bold text-primary"><i class="pi pi-info-circle"></i> Info</span>
          </template>
          <template #icons>
            <FlowSize :flow="selectedFlow"/>
          </template>
          <FlowDetails :flow="selectedFlow"></FlowDetails>
        </Panel>

        <Panel v-if="selectedFlow.enrichment?.geoip" class="mt-2">
          <template #header>
            <span class="fw-bold text-primary"><i class="pi pi-globe"></i> GeoIP</span>
          </template>
          <template #icons>
            <GeoIPFlag :geoip="selectedFlow.enrichment.geoip"></GeoIPFlag>
          </template>
          <GeoIPDetails :geoip="selectedFlow.enrichment.geoip"></GeoIPDetails>
        </Panel>

        <Panel class="mt-2">
          <template #header>
            <span class="fw-bold text-primary"><i class="pi pi-caret-up"></i> Source</span>
          </template>
          <template #icons>
            <SourceHostIcon :flow="selectedFlow"></SourceHostIcon>
          </template>
          <SourceHostDetails :flow="selectedFlow"></SourceHostDetails>
        </Panel>

        <Panel class="mt-2">
          <template #header>
            <span class="fw-bold text-primary"><i class="pi pi-caret-down"></i> Destination</span>
          </template>
          <template #icons>
            <DestinationHostIcon :flow="selectedFlow"></DestinationHostIcon>
          </template>
          <DestinationHostDetails :flow="selectedFlow"></DestinationHostDetails>
        </Panel>

        {{ (flowAlerts = getAlerts(selectedFlow), null) }}
        <Panel v-if="flowAlerts.length > 0" class="mt-2">
          <template #header>
            <span class="fw-bold text-primary"><i class="pi pi-bell"></i> Alerts</span>
          </template>
          <template #icons>
            <div class="badge text-bg-primary">{{ flowAlerts.length }}</div>
          </template>
          <div v-for="alert in flowAlerts">
            <AlertDetails :alert="alert"></AlertDetails>
          </div>
        </Panel>
      </div>
    </Drawer>

    <DataTable
      :value="flows"
      :loading="loading"
      size="small"
      sortMode="multiple"
      @rowSelect="onFlowSelect" @rowUnselect="onFlowUnselect"
      selectionMode="single"
      paginator
      :rows="20"
      scrollable
      :rowsPerPageOptions="[20, 30, 40, 50]"
      resizableColumns
      columnResizeMode="expand"
      tableStyle="min-width: 50rem"
      scrollHeight="900px">
      <Column field="time" sortable header="Time" class="">
        <template #body="{ data }">
          <span class="text-primary">{{ $formatDate(data.time) }}</span>
        </template>
      </Column>

      <Column field="application_category_name" sortable header="Category"></Column>
      <Column field="application_name" sortable header="Application"></Column>
      <Column field="protocol" sortable header="Protocol"></Column>

      <Column field="risk" sortable header="Risk">
        <template #body="{data}">
          <FlowRisk :risk="data.risk"/>
        </template>
      </Column>

      <Column header="">
        <template #body="{data}">
          <GeoIPFlag v-if="data.enrichment?.geoip" :geoip="data.enrichment.geoip"/>
        </template>
      </Column>

      <Column field="src_ip" sortable header="Source">
        <template #body="{ data }">
          <span v-if="data.enrichment.src_hostname" class="font-monospace text-primary">
            {{ data.enrichment.src_hostname }}
          </span>
          <span v-else class="font-monospace text-primary">{{ data.src_ip }}</span>
        </template>
      </Column>

      <Column field="dst_ip" sortable header="Destination">
        <template #body="{ data }">
          <span v-if="data.enrichment.dst_hostname" class="font-monospace text-primary">
            {{ data.enrichment.dst_hostname }}
          </span>
          <span v-else class="font-monospace text-primary">{{ data.dst_ip }}</span>
        </template>
      </Column>

      <Column field="bidirectional_bytes" sortable header="Size">
        <template #body="{ data }">
          <FlowSize :flow="data"></FlowSize>
        </template>
      </Column>
    </DataTable>
  </div>
</template>
<style>
.flow-details-drawer {
  width: 40rem !important;
  background: rgb(233, 233, 233) !important;
}

.table tr td {
  color: #50565e;
}
</style>