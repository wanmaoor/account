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
    border: 1px solid red;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .view {
    flex-grow: 1;
    border: 1px solid #000;
    overflow: auto;
  }
</style>