<template>
  <nav id="nav">
    <router-link class="item" to="/">
      <Icon name="edit"/>
      记账
    </router-link>
    <router-link class="item" to="/labels">
      <Icon name="list"/>
      标签
    </router-link>
    <router-link class="item" to="/statistics">
      <Icon name="calculator"/>
      统计
    </router-link>
  </nav>
</template>

<script lang="ts">
  import Icon from "@/components/Icon.vue"

  export default {
    name: "Nav",
    components: {Icon}
  }
</script>

<style lang="scss" scoped>
  nav {
    display: flex;
    box-shadow: 0 0 3px rgba(0, 0, 0, .5);

    > .item {
      width: 33.33333%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 2px 0;

      .icon {
        width: 32px;
        height: 32px;
      }
    }
  }

</style>