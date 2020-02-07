<template>
  <div>
    <label class="notes">
      {{note}}
      <span class="name">备注</span>
      <input id="" name="" placeholder="请输入备注" type="text" :value="note" @input="handleChange">
    </label>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator"

  @Component
  export default class Note extends Vue {
    note = ""

    handleChange(e: KeyboardEvent) {
      this.note = (e.target as HTMLInputElement).value
    }
  }
</script>

<style lang="scss" scoped>
  .notes {
    background: #f5f5f5;
    font-size: 14px;
    padding-left: 16px;
    display: flex;
    align-items: center;

    .name {
      padding-right: 16px;
    }

    input {
      height: 64px;
      background: transparent;
      border: none;
      flex-grow: 1;
      padding-right: 16px;
    }
  }
</style>