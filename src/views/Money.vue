<template>
  <Layout content-class="xxx">
    <Panel/>
    <Tab/>
    <Note/>
    <Tag/>
  </Layout>
</template>

<script lang="ts">
  import Panel from "@/components/Money/Panel.vue"
  import Tab from "@/components/Money/Tab.vue"
  import Note from "@/components/Money/Note.vue"
  import Tag from "@/components/Money/Tag.vue"

  export default {
    name: "Money",
    components: {Tag, Note, Tab, Panel},
  }
</script>

<style>
  .xxx {
    display: flex;
    flex-direction: column-reverse;
  }
</style>