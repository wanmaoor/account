<template>
  <div>
    <label class="inputItem">
      <span class="name">{{title}}</span>
      <input
        :value="notes"
        @change="handleChange"
        :placeholder="placeholder"
        type="text"
      >
    </label>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator"

  @Component
  export default class InputItem extends Vue {
    @Prop() notes!: string
    @Prop({required: true}) title!: string
    @Prop() placeholder?: string

    handleChange(e: InputEvent) {
      this.$emit("update:notes", (e.target as HTMLInputElement).value)
    }
  }
</script>

<style lang="scss" scoped>
  .inputItem {
    font-size: 14px;
    padding-left: 16px;
    display: flex;
    align-items: center;

    .name {
      padding-right: 16px;
    }

    input {
      height: 40px;
      background: transparent;
      border: none;
      flex-grow: 1;
      padding-right: 16px;
    }
  }
</style>