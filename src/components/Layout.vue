<template>
  <div class="container">
    <div class="view">
      <slot/>
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
  export default {
    name: "BottomLayout",
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