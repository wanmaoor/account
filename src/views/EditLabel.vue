<template>
  <Layout>
    <Icon name="left"/>
    <span>编辑标签</span>
    <Note placeholder="请输入标签名" title="标签名"/>
  </Layout>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator"
  import tagList from "@/models/tagList"
  import Note from "@/components/Money/Note.vue"

  @Component({
    components: {Note}
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

</style>