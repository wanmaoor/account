<template>
  <Layout>
    <div class="tagList">
      <router-link
        :key="label.id"
        class="tag"
        :to="`/labels/edit/${label.id}`"
        v-for="label in labels"
      >
        <span>{{label.name}}</span>
        <Icon name="right"/>
      </router-link>

    </div>
    <div class="createTag-Wrapper">
      <button @click="createTag" class="createTag">新建标签</button>
    </div>
  </Layout>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator"
  import tagList from "@/models/tagList"

  tagList.fetchData()

  @Component
  export default class Labels extends Vue {
    labels = tagList.data

    createTag() {
      const labelName = window.prompt("请输入标签名")
      if (labelName) {
        const status = tagList.create(labelName)
        if (status === "duplicated") {
          window.alert("标签名重复")
        }
        if (status === "success") {
          window.alert("添加成功")
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tagList {
    background: white;
    font-size: 16px;
    padding-left: 16px;

    > .tag {
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