<template>
  <Layout>
    <Tab
      :height="3"
      :value.sync="type"
      active="-"
      class="tab1"
    >
      <TabPanel label="支出" value="-">
        <ol v-if="result.length>0">
          <li :key="index" v-for="(group, index) in result">
            <h2 class="title">{{handleTime(group.title)}} <span>总计: ¥ {{group.total}}</span></h2>
            <ol>
              <li :key="item.id" class="record" v-for="item in group.items">
                <span>{{tagString(item.tags)}}</span>
                <span class="notes">{{item.notes}}</span>
                <span>¥ {{item.amount}}</span>
              </li>
            </ol>
          </li>
        </ol>
        <div class="fallback" v-else>
          你还没有任何支出记录哟~ 快去记账页面开始吧
          <span style="display: block"><Icon name="null"/></span>
        </div>
      </TabPanel>
      <TabPanel label="收入" value="+">
        <ol v-if="result.length>0">
          <li :key="index" v-for="(group, index) in result">
            <h2 class="title">{{handleTime(group.title)}} <span>总计: ¥ {{group.total}}</span></h2>
            <ol>
              <li :key="item.id" class="record" v-for="item in group.items">
                <span>{{tagString(item.tags)}}</span>
                <span class="notes">{{item.notes}}</span>
                <span>¥ {{item.amount}}</span>
              </li>
            </ol>
          </li>
        </ol>
        <div class="fallback" v-else>
          你还没有任何收入记录哟~ 快去记账页面开始吧
          <span style="display: block"><Icon name="null"/></span>
        </div>
      </TabPanel>
    </Tab>
  </Layout>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator"
  import {Tab, TabPanel} from "@wanmaoor/giaoui"
  import dayjs from "dayjs"
  import clone from "@/lib/clone"

  @Component({
    components: {Tab, TabPanel}
  })
  export default class Statistics extends Vue {
    type = "-"

    get recordList() {
      return this.$store.state.record.recordList
    }

    get result() {
      const recordList: RecordItem[] = this.recordList
      const time = (obj: RecordItem) => dayjs(obj.createdAt).valueOf()
      const sortedRecordList = clone(recordList).filter(r => r.type === this.type).sort((a, b) => time(b) - time(a))
      if (sortedRecordList.length === 0) return []
      const hashTable: Array<{ title: string, items: RecordItem[], total?: number }> = [{
        title: dayjs(sortedRecordList[0].createdAt).format("YYYY-MM-DD"),
        items: [sortedRecordList[0]]
      }]
      for (let i = 1; i < sortedRecordList.length; i++) {
        const current = sortedRecordList[i]
        const last = hashTable[hashTable.length - 1]
        if (dayjs(last.title).isSame(dayjs(current.createdAt), "day")) {
          last.items.push(current)
        } else {
          hashTable.push({
            title: dayjs(current.createdAt).format("YYYY-MM-DD"),
            items: [current]
          })
        }
      }
      hashTable.map(group => {
        group.total = group.items.reduce((sum, item) => sum + item.amount, 0)
      })
      return hashTable
    }

    tagString(tags: IData[]) {
      return tags.length === 0 ? "未添加标签" : tags.join(", ")
    }

    handleTime(ISOString: string) {
      const api = dayjs(ISOString)
      if (api.isSame(dayjs(), "day")) {
        return "今天"
      } else if (api.isSame(dayjs().subtract(1, "day"), "day")) {
        return "昨天"
      } else if (api.isSame(dayjs().subtract(2, "day"), "day")) {
        return "前天"
      } else if (api.isSame(dayjs(), "year")) {
        return api.format("M月D日")
      } else {
        return api.format("YYYY年M月D日")
      }
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

  .fallback {
    padding: 16px;
    text-align: center;

    .icon {
      width: 128px;
      height: 128px;
    }
  }


</style>
