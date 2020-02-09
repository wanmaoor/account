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
  import {Component, Vue, Watch} from "vue-property-decorator"
  import Tag from "@/components/Money/Tag.vue"
  import Note from "@/components/Money/Note.vue"
  import Tab from "@/components/Money/Tab.vue"
  import Panel from "@/components/Money/Panel.vue"
  import model from "@/model"


  @Component({
    "components": {Tag, Note, Tab, Panel}
  })
  export default class Money extends Vue {
    labels = ["衣", "食", "住", "行"]
    recordList = model.fetchData()
    record: RecordItem = {
      tags: [],
      notes: "",
      type: "-",
      amount: 0
    }

    handleSubmit() {
      const copy: RecordItem = JSON.parse(JSON.stringify(this.record))
      copy.createdAt = new Date()
      this.recordList.push(copy)
    }

    @Watch("recordList")
    onRecordListChanged() {
      model.saveData(this.recordList)
    }
  }
</script>

<style>
  .xxx {
    display: flex;
    flex-direction: column-reverse;
  }
</style>