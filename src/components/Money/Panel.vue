<template>
  <div class="numberPad">
    <div class="output">{{output}}</div>
    <div class="buttons">
      <button @click="typeNumber">1</button>
      <button @click="typeNumber">2</button>
      <button @click="typeNumber">3</button>
      <button @click="deleteNumber">删除</button>
      <button @click="typeNumber">4</button>
      <button @click="typeNumber">5</button>
      <button @click="typeNumber">6</button>
      <button @click="clearNumber">清空</button>
      <button @click="typeNumber">7</button>
      <button @click="typeNumber">8</button>
      <button @click="typeNumber">9</button>
      <button @click="calculateNumber" class="ok">OK</button>
      <button @click="typeNumber" class="zero">0</button>
      <button @click="typeNumber">.</button>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator"

  @Component
  export default class Panel extends Vue {
    @Prop() expression!: number
    output: string = this.expression.toString()

    typeNumber(e: MouseEvent) {
      const button = (e.target as HTMLButtonElement)
      const input = button.textContent as string
      if (this.output.length === 16) {
        return
      }
      if (this.output === "0") {
        if ("0123456789".indexOf(input) >= 0) {
          this.output = input
        } else {
          this.output += input
        }
        return
      }
      if (this.output.indexOf(".") >= 0 && input === ".") {
        return
      }
      this.output += input
    }

    deleteNumber() {
      const length = this.output.length
      this.output = this.output.substr(0, length - 1)
      if (length === 1) {
        this.output = "0"
      }
    }

    clearNumber() {
      this.output = "0"
    }

    calculateNumber() {
      const res = parseFloat(this.output)
      this.$emit("update:expression", res)
      this.$emit("submit")
      this.output = "0"
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/global.scss";

  .numberPad {
    .output {
      font-size: 36px;
      font-family: Consolas, monospace;
      padding: 9px 16px;
      text-align: right;
      height: 72px;
      @extend %innerShadow
    }

    .buttons {
      @extend %clearFix;

      > button {
        $bg: #f2f2f2;
        width: 25%;
        height: 64px;
        float: left;
        background: transparent;
        border: none;

        &.ok {
          height: 64*2px;
          float: right;
        }

        &.zero {
          width: 50%;
        }

        &:nth-child(1) {
          background: $bg;
        }

        &:nth-child(2), &:nth-child(5) {
          background: darken($bg, 4%);
        }

        &:nth-child(3), &:nth-child(6), &:nth-child(9) {
          background: darken($bg, 8%);
        }

        &:nth-child(4), &:nth-child(7), &:nth-child(10) {
          background: darken($bg, 12%);
        }

        &:nth-child(8), &:nth-child(11), &:nth-child(13) {
          background: darken($bg, 16%);
        }

        &:nth-child(14) {
          background: darken($bg, 20%);
        }

        &:nth-child(12) {
          background: darken($bg, 24%);
        }
      }
    }
  }

</style>