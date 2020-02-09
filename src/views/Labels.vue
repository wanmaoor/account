<template>
  <Layout>
    <ol class="tagList">
      <li>
        <span>衣</span>
        <Icon name="right"/>
      </li>
      <li>
        <span>食</span>
        <Icon name="right"/>
      </li>
      <li>
        <span>住</span>
        <Icon name="right"/>
      </li>
      <li>
        <span>行</span>
        <Icon name="right"/>
      </li>
    </ol>
    <div class="createTag-Wrapper">
      <button class="createTag">新建标签</button>
    </div>
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
    font-size: 16px;
    padding-left: 16px;

    > li {
      min-height: 64px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #e6e5e8;

      svg {
        margin-right: 16px;
        width: 18px;
        height: 18px;
        color: #333333;
      }
    }
  }

  .createTag {
    background: cornflowerblue;
    color: cornsilk;
    border-radius: 4px;
    border: none;
    height: 40px;
    padding: 0 16px;

    &-Wrapper {
      text-align: center;
      padding: 16px;
      margin-top: 28px;
    }
  }
</style>