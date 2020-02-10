<template>
  <Layout>
    <div class="navBar">
      <Icon class="leftIcon" name="left"/>
      <span class="title">编辑标签</span>
    </div>
    <div class="inputItem">
      <InputItem placeholder="请输入标签名" title="标签名"/>
    </div>
    <div class="wrapper">
      <Button>删除标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator"
  import tagList from "@/models/tagList"
  import InputItem from "@/components/Money/InputItem.vue"
  import Button from "@/components/Button.vue"

  @Component({
    components: {Button, InputItem}
  })
  export default class EditLabel extends Vue {
    created() {
      const id = this.$route.params.id
      tagList.fetchData()
      const tags = tagList.data
      const tag = tags.filter(item => item.id === id)[0]
      if (tag) {
        console.log(tag)
      } else {
        this.$router.replace("/404")
      }
    }
  }
</script>

<style lang="scss" scoped>
  .navBar {
    text-align: center;
    font-size: 16px;
    background: white;
    position: relative;

    > .title {
      line-height: 48px;
    }

    > .leftIcon {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 16px;
      width: 20px;
      height: 20px;
    }
  }

  .inputItem {
    background: white;
    margin-top: 8px;
  }

  .wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 28px;
  }
</style>