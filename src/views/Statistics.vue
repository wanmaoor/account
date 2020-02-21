<template>
  <Layout>
      <Tab
        active="-"
        onlyHeader
        noBar
        class="tab1"
      >
        <TabPanel value="-" label="支出"/>
        <TabPanel value="+" label="收入"/>
      </Tab>
      <Tab
        active="day"
        class="tab2"
      >
        <TabPanel value="day" label="按天">
          <ol>
            <li v-for="item in result" :key="item.id">{{item}}</li>
          </ol>
        </TabPanel>
        <TabPanel value="week" label="按周">week week week</TabPanel>
        <TabPanel value="month" label="按月">month month month</TabPanel>
      </Tab>
  </Layout>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator"
  import {Tab, TabPanel} from "@wanmaoor/giaoui"

  @Component({
    components: {Tab, TabPanel}
  })
  export default class Statistics extends Vue {
    get recordList() {
      return this.$store.state.record.recordList
    }

    get result() {
      return this.recordList
    }

  }
</script>

<style lang="scss" scoped>
  .tab1 ::v-deep .tab-header{
     font-size: 1.5rem;
   }
  .tab2 ::v-deep .tab-header{
    font-size: 1rem;
  }
</style>
