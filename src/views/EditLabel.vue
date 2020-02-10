<template>
  <Layout>编辑标签</Layout>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator"
  import tagList from "@/models/tagList"

  @Component
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