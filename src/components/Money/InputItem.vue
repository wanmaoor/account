<template>
  <div>
    <label class="inputItem">
      <span class="name">{{title}}</span>
      <input
        :placeholder="placeholder"
        :value="notes"
        @input="handleChange($event.target.value)"
        type="text"
      >
    </label>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator"

  @Component
  export default class InputItem extends Vue {
    @Prop() readonly notes!: string
    @Prop({required: true}) title!: string
    @Prop() placeholder?: string

    handleChange(val: string) {
      this.$emit("update:notes", val)
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
