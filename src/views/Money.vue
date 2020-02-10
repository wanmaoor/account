<template>
  <Layout content-class="xxx">
    <Panel
      :expression.sync="record.amount"
      @submit="handleSubmit"
    />
    <Tab
      :type.sync="record.type"
    />
    <InputItem
      :notes.sync="record.notes"
      title="备注"
      placeholder="请输入备注"
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
  import InputItem from "@/components/Money/InputItem.vue"
  import Tab from "@/components/Money/Tab.vue"
  import Panel from "@/components/Money/Panel.vue"
  import recordList from "@/models/recordList"
  import tagList from "@/models/tagList"


  @Component({
    "components": {Tag, InputItem, Tab, Panel}
  })
  export default class Money extends Vue {
    labels = tagList.fetchData()
    recordList = recordList.fetchData()
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
      recordList.saveData(this.recordList)
    }
  }
</script>

<style>
  .xxx {
    display: flex;
    flex-direction: column-reverse;
  }
</style>