<template>
  <svg class="icon">
    <use :xlink:href="`#${name}`"></use>
  </svg>
</template>

<script lang="ts">
  export default {
    name: "Icon",
    props: ["name"]
  }
</script>

<style scoped>
  .icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>