<template>
  <Layout>
    <div class="navBar">
      <Icon @click.native="back" class="leftIcon" name="left"/>
      <span class="title">编辑标签</span>
    </div>
    <div class="inputItem">
      <InputItem
        :notes="tag.name"
        @update:notes="update"
        placeholder="请输入标签名"
        title="标签名"
      />
    </div>
    <div class="wrapper">
      <Button type="danger" round @click="remove">删除标签</Button>
      <Button type="primary" round @click="submit" :disabled="disable">确认修改</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator"
  import InputItem from "@/components/Money/InputItem.vue"
  import {Button, Message} from "@wanmaoor/giaoui"

  Vue.use(Message)
  @Component({
    components: {Button, InputItem}
  })
  export default class EditLabel extends Vue {
    tag?: IData = undefined
    payload?: IData = undefined
    disable = true

    created() {
      const id = this.$route.params.id
      const tags: IData[] = this.$store.state.tags.tagList
      this.tag = tags.filter(item => item.id === id)[0]
      if (this.tag) {
        // console.log(this.tag)
      } else {
        this.$router.replace("/404")
      }
    }

    update(name: string) {
      this.disable = this.tag!.name === name
      if (this.tag && name) {
        this.payload = {id: this.tag.id, name}
      } else {
        this.$message({
          type: "warning",
          text: "标签名不能为空哦"
        })
      }
    }

    remove() {
      if (this.tag) {
        this.$store.commit("removeTag", this.tag.id)
      }
    }

    submit() {
      this.$store.commit("updateTag", this.payload)
      this.$router.back()
    }

    back() {
      this.$router.back()
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
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    padding: 16px;
    margin-top: 28px;
  }
</style>
