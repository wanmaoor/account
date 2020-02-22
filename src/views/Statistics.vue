<template>
  <Layout>
    <Tab
      :value.sync="type"
      active="-"
      class="tab1"
      noBar
      onlyHeader
    >
      <TabPanel label="支出" value="-"/>
      <TabPanel label="收入" value="+"/>
    </Tab>
    <Tab
      :value.sync="interval"
      active="day"
      class="tab2"
    >
      <TabPanel label="按天" value="day">
        <ol>
          <li :key="index" v-for="(group, index) in result">
            <h2 class="title">{{group.title}}</h2>
            <ol>
              <li :key="item.id" class="record" v-for="item in group.items">
                <span>{{tagString(item.tags)}}</span>
                <span class="notes">{{item.notes}}</span>
                <span>¥ {{item.amount}}</span>
              </li>
            </ol>
          </li>
        </ol>
      </TabPanel>
      <TabPanel label="按周" value="week">week week week</TabPanel>
      <TabPanel label="按月" value="month">month month month</TabPanel>
    </Tab>

  </Layout>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator"
  import {Tab, TabPanel} from "@wanmaoor/giaoui"

  interface IHashTable {
    [key: string]: {
      title: string,
      items: RecordItem []
    }
  }

  @Component({
    components: {Tab, TabPanel}
  })
  export default class Statistics extends Vue {
    type = "-"
    interval = "day"

    get recordList() {
      return this.$store.state.record.recordList
    }

    get result() {
      const {recordList} = this
      const hashTable: IHashTable = {}
      for (const recordListElement of recordList) {
        const [date] = recordListElement.createdAt.split("T")
        hashTable[date] = hashTable[date] || {title: date, items: []}
        hashTable[date].items.push(recordListElement)
      }

      return hashTable
    }

    tagString(tags: IData[]) {
      return tags.length === 0 ? "未添加标签" : tags.join(",")
    }
  }
</script>

<style lang="scss" scoped>
  .tab1 ::v-deep .tab-header {
    font-size: 1.5rem;
  }

  .tab2 ::v-deep .tab-header {
    font-size: 1rem;
  }

  %item {
    padding: 0 16px;
    min-height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .title {
    @extend %item;
  }

  .record {
    background: white;
    @extend %item;
  }

  .notes {
    margin-right: auto;
    margin-left: 16px;
    color: #999999;
  }
</style>
