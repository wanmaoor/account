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

<script>
	export default {
		name: "Tab",
		data() {
			return {
				type: "-"
			}
		},
		methods: {
			selectType(type) {
				if (type !== "-" && type !== "+") {
					throw new Error("type is unknown")
				}
				this.type = type
			}
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