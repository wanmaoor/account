<template>
  <Layout>
    <ol class="tagList">
      <li><span>衣</span>
        <Icon name="right"/>
      </li>
      <li><span>食</span>
        <Icon name="right"/>
      </li>
      <li><span>住</span>
        <Icon name="right"/>
      </li>
      <li><span>行</span>
        <Icon name="right"/>
      </li>
      <div>
        <button>新建标签</button>
      </div>
    </ol>
  </Layout>
</template>

<script lang="ts">
  import {Vue} from "vue-property-decorator"

  export default class Labels extends Vue {

  }
</script>

<style lang="scss" scoped>
  .tagList {
    background: white;

    > li {

    }
  }
</style>