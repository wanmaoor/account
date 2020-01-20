<template>
  <div id="nav">
    <router-link to="/">
      <Icon name="edit"/>
      记账
    </router-link>
    <router-link to="/labels">
      <Icon name="list"/>
      标签
    </router-link>
    <router-link to="/statistics">
      <Icon name="calculator"/>
      统计
    </router-link>
  </div>
</template>

<script lang="ts">
  import Icon from "@/components/Icon.vue"


  export default {
    name: "Nav",
    components: {Icon}
  }
</script>

<style scoped>

</style>