<template>
  <ul class="types">
    <li
      :class="type === '-' && 'selected'"
      @click="selectType('-')"
    >
      支出
    </li>
    <li
      :class="type === '+' && 'selected'"
      @click="selectType('+')"
    >
      收入
    </li>
  </ul>
</template>

<script lang="ts">
  import {Component, Emit, Prop, Vue} from "vue-property-decorator"

  @Component
  export default class Tab extends Vue {
    @Prop(String) readonly type!: string

    //   告诉Vue运行时是个number     告诉Vue编译时是number或undefined

    @Emit("update:type")
    selectType(type: string): string {
      if (type !== "-" && type !== "+") {
        throw new Error("type is unknown")
      }
      return type
    }
  }
</script>

<style lang="scss" scoped>
  .types {
    background: #c4c4c4;
    display: flex;
    text-align: center;
    font-size: 24px;

    > li {
      width: 50%;
      height: 64px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      &.selected::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        height: 4px;
        width: 100%;
        background: #333;
      }
    }
  }
</style>