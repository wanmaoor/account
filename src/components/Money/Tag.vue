<template>
  <div class="tags">
    <ul class="current">
      <li
        :class="{selected: selectedTags.indexOf(label.name)>=0}"
        :key="label.id"
        @click="switchTag(label.name)"
        v-for="label in labels"
      >
        {{label.name}}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import {Component, Emit, Prop, Vue} from "vue-property-decorator"

  @Component
  export default class Tag extends Vue {
    @Prop(Array) readonly labels!: IData[]
    @Prop() readonly selectedTags!: Array<string>


    @Emit("update:selectedTags")
    switchTag(label: string) {
      const index = this.selectedTags.indexOf(label)
      if (index >= 0) {
        this.selectedTags.splice(index, 1)
      } else {
        this.selectedTags.push(label)
      }
      return this.selectedTags
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
    background: white;

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