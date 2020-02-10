<template>
  <button @click="$emit('click', $event)" class="button">
    <slot/>
  </button>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator"

  @Component
  export default class Button extends Vue {

  }
</script>

<style lang="scss" scoped>
  .button {
    background: cornflowerblue;
    color: cornsilk;
    border-radius: 4px;
    border: none;
    height: 40px;
    padding: 0 16px;

    &-Wrapper {

    }
  }
</style>