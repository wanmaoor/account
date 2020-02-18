<template>
  <Layout content-class="xxx">
    <Panel
      :expression.sync="record.amount"
      @submit="handleSubmit"
    />
    <Tab
      :type.sync="record.type"
    />
    <div class="notes">
      <InputItem
        :notes.sync="record.notes"
        placeholder="请输入备注"
        title="备注"
      />
    </div>
    <Tag
      :labels.sync="labels"
      :selectedTags.sync="record.tags"
    />
  </Layout>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator"
  import Tag from "@/components/Money/Tag.vue"
  import InputItem from "@/components/Money/InputItem.vue"
  import Tab from "@/components/Money/Tab.vue"
  import Panel from "@/components/Money/Panel.vue"


  @Component({
    "components": {Tag, InputItem, Tab, Panel}
  })
  export default class Money extends Vue {
    labels = window.labelList
    record: RecordItem = {
      tags: [],
      notes: "",
      type: "-",
      amount: 0
    }

    handleSubmit() {
      if (this.record.amount === 0) {
        window.alert("你还没输入金额哦")
        return
      } else {
        this.$store.commit("addRecord", this.record)
        this.record.tags = []
        this.record.notes = ""
      }
    }
  }
</script>

<style>
  .xxx {
    display: flex;
    flex-direction: column-reverse;
  }

  .notes {
    padding: 12px 0;
  }
</style>
