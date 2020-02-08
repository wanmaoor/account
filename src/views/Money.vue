<template>
  <Layout content-class="xxx">
    <Panel
      @update:value="onUpdateAmount"
    />
    <Tab
      :prop-a="123"
      @update:value="onUpdateType"
    />
    <Note
      @update:value="onUpdateNotes"
    />
    <Tag
      :labels.sync="labels"
      @update:value="onUpdateTags"
    />
  </Layout>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator"
  import Tag from "@/components/Money/Tag.vue"
  import Note from "@/components/Money/Note.vue"
  import Tab from "@/components/Money/Tab.vue"
  import Panel from "@/components/Money/Panel.vue"

  @Component({
    components: {Tag, Note, Tab, Panel}
  })
  export default class Money extends Vue {
    labels = ["衣", "食", "住", "行"]

    onUpdateTags(value: string[]) {
      console.log(value)
    }

    onUpdateNotes(value: string | number) {
      console.log(value)
    }

    onUpdateType(value: string) {
      console.log(value)
    }

    onUpdateAmount(value: string) {
      console.log(value)
    }
  }
</script>

<style>
  .xxx {
    display: flex;
    flex-direction: column-reverse;
  }
</style>