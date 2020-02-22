<template>
  <Layout class="xxx">
    <Panel
      :expression.sync="record.amount"
      @submit="handleSubmit"
    />
    <Tab
      :value.sync="record.type"
      :active="record.type"
      onlyHeader
      class="x"
    >
      <TabPanel value="-" label="支出"/>
      <TabPanel value="+" label="收入"/>
    </Tab>
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
  import Panel from "@/components/Money/Panel.vue"
  import {Tab, TabPanel} from "@wanmaoor/giaoui"

  @Component({
    "components": {Tag, InputItem, Tab, Panel, TabPanel}
  })
  export default class Money extends Vue {
    labels = this.$store.state.tags.tagList
    record: RecordItem = {
      tags: [],
      notes: "",
      type: "-",
      amount: 0
    }

    mounted() {
      if (this.labels.length == []) {

        this.$store.commit("createTag", "衣")
        this.$store.commit("createTag", "食")
        this.$store.commit("createTag", "住")
        this.$store.commit("createTag", "行")
      }
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

<style scoped lang="scss">
  .xxx ::v-deep .view{
    display: flex;
    flex-direction: column-reverse;
  }

  .notes {
    padding: 12px 0;
  }

  .x ::v-deep .tab-header{
    font-size: 1.5rem;
  }
</style>
