<template>
  <div class="container">
    <div class="view" :class="contentClass">
      <slot/>
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
  export default {
    name: "Layout",
    props: ["contentClass"]
  }
</script>

<style scoped>
  .container {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .view {
    flex-grow: 1;
    overflow: auto;
  }
</style>