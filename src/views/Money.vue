<template>
  <Layout class="xxx">
    <Panel
      :expression.sync="record.amount"
      @submit="handleSubmit"
    />
    <Tab
      :active="record.type"
      :value.sync="record.type"
      class="x"
      onlyHeader
    >
      <TabPanel label="支出" value="-"/>
      <TabPanel label="收入" value="+"/>
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
  import {Message, Tab, TabPanel} from "@wanmaoor/giaoui"

  Vue.use(Message)
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
        this.$store.commit("initialTag")
      }
    }

    handleSubmit() {
      if (this.record.amount === 0) {
        this.$message({
          type: "warning",
          text: "你还没输入金额哦"
        })
        return
      } else {
        this.$store.commit("addRecord", this.record)
        this.$message({
          type: "success",
          text: "保存成功"
        })
        this.record.tags = []
        this.record.notes = ""
      }
    }
  }
</script>

<style lang="scss" scoped>
  .xxx ::v-deep .view {
    display: flex;
    flex-direction: column-reverse;
  }

  .notes {
    padding: 12px 0;
  }

  .x ::v-deep .tab-header {
    font-size: 1.5rem;
  }
</style>
