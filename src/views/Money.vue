<template>
  <Layout content-class="xxx">
    <Panel
      :expression.sync="record.amount"
      @submit="handleSubmit"
    />
    <Tab
      :type.sync="record.type"
    />
    <Note
      :notes.sync="record.notes"
    />
    <Tag
      :labels.sync="labels"
      :selectedTags.sync="record.tags"
    />
  </Layout>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator"
  import Tag from "@/components/Money/Tag.vue"
  import Note from "@/components/Money/Note.vue"
  import Tab from "@/components/Money/Tab.vue"
  import Panel from "@/components/Money/Panel.vue"

  interface Record {
    tags: Array<string>
    notes: string | number
    type: string
    amount: number
  }

  @Component({
    "components": {Tag, Note, Tab, Panel}
  })
  export default class Money extends Vue {
    labels = ["衣", "食", "住", "行"]
    recordList: Record[] = []
    record: Record = {
      tags: [],
      notes: "",
      type: "-",
      amount: 0
    }

    handleSubmit(res: string) {
      this.recordList.push(JSON.parse(JSON.stringify(res)))
      window.localStorage.setItem("recordList", JSON.stringify(this.recordList))
    }
  }
</script>

<style>
  .xxx {
    display: flex;
    flex-direction: column-reverse;
  }
</style>