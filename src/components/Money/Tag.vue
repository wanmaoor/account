<template>
  <div class="tags">
    <div class="new">
      <button>新增标签</button>
    </div>
    <ul class="current">
      <li
        :class="{selected: selectedTags.indexOf(label)>=0}"
        :key="index"
        @click="switchTag(label)"
        v-for="(label, index) in labels"
      >
        {{label}}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator"

  @Component
  export default class Tag extends Vue {
    @Prop(Array) labels: Array<string> | undefined
    selectedTags: Array<string> = []

    switchTag(label: string) {
      const index = this.selectedTags.indexOf(label)
      if (index >= 0) {
        this.selectedTags.splice(index, 1)
      } else {
        this.selectedTags.push(label)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tags {
    font-size: 14px;
    padding: 16px;
    flex-grow: 1;
    display: flex;
    flex-direction: column-reverse;

    > .current {
      display: flex;
      flex-wrap: wrap;

      > li {
        $bg: #d9d9d9;
        $h: 24px;
        background: $bg;
        height: $h;
        line-height: $h;
        border-radius: $h/2;
        padding: 0 16px;
        margin-right: 12px;
        margin-top: 4px;

        &.selected {
          background: darken($bg, 50%);
          color: #eeeeee;
        }
      }
    }

    > .new {
      padding-top: 16px;

      button {
        background: transparent;
        border: none;
        color: #999;
        border-bottom: 1px solid;
        padding: 0 4px;
      }
    }
  }
</style>