<template>
  <Layout>
    <div class="tagList">
      <router-link
        :key="label.id"
        :to="`/labels/edit/${label.id}`"
        class="tag"
        v-for="label in labels"
      >
        <span>{{label.name}}</span>
        <Icon name="right"/>
      </router-link>

    </div>
    <div class="createTag">
      <Button type="primary" @click="createTag">新建标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator"
  import {Button} from "@wanmaoor/giaoui"

  @Component({
    components: {Button}
  })
  export default class Labels extends Vue {
    labels = this.$store.state.tags.tagList

    createTag() {
      const labelName = window.prompt("请输入标签名")
      if (labelName) {
        this.$store.commit("createTag", labelName)
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
    text-align: center;
    padding: 16px;
    margin-top: 28px;
  }

</style>
