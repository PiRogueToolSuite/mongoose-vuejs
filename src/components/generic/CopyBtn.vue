<script setup>
import {Button} from 'primevue';
</script>

<script>
export default {
  props: ['content', 'text', 'json'],
  data() {
    return {
      inlineContent: "",
      initialIcon: "pi pi-copy",
      icon: "pi pi-copy",
      initialTitle: "Copy to clipboard",
      title: "Copy to clipboard",
      errorOccured: false,
    };
  },
  mounted() {
    this.inlineContent = this.$refs.inner.textContent;
  },
  updated() {
    this.inlineContent = this.$refs.inner.textContent;
  },
  methods: {
    restoreState() {
      this.icon = this.initialIcon;
      this.title = this.initialTitle;
    },
    sendToClipboard(evt) {
      this.$copyToClipboard(this.data).then(() => {
        this.icon = 'pi pi-check';
        setTimeout(this.restoreState.bind(this), 2000);
      }).catch((err) => {
        this.icon = 'pi pi-ban';
        this.errorOccured = true;
        this.title = `Can't copy to clipboard:\n${err}`;
      });
    },
  },
  computed: {
    data() {
      if (this.content !== "") {
        return this.content;
      } else if (this.inlineContent !== "") {
        return this.inlineContent;
      } else if (this.json && this.content !== undefined) {
        return JSON.stringify(this.content, null, 2);
      } else {
        return this.content;
      }
    },
  }
}
</script>

<template>
  <span ref="inner"><slot/></span>
  <Button v-if="inlineContent"
          size="small" :class="{'p-0': true, 'text-danger': errorOccured}"
          :icon variant="link"
          aria-label="Copy to clipboard" :title
          @click="sendToClipboard($event)" :label="text"/>
  <Button v-else
          size="small"
          :icon
          aria-label="Copy to clipboard" :title
          @click="sendToClipboard($event)" :label="text"/>
</template>
