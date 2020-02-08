<template>
  <div>
    <label class="notes">
      <span class="name">备注</span>
      <input
        :value="notes"
        @change="handleChange"
        placeholder="请输入备注"
        type="text"
      >
    </label>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator"

  @Component
  export default class Note extends Vue {
    @Prop() notes!: string | number

    handleChange(e: InputEvent) {
      this.$emit("update:notes", (e.target as HTMLInputElement).value)
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