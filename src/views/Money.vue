<template>
  <Layout content-class="xxx">
    <Panel/>
    <Tab :prop-a="123"/>
    <Note/>
    <Tag
      :labels.sync="labels"
    />
  </Layout>
</template>

<script>
	import Panel from "@/components/Money/Panel.vue"
	import Tab from "@/components/Money/Tab.vue"
	import Note from "@/components/Money/Note.vue"
	import Tag from "@/components/Money/Tag.vue"

	export default {
		name: "Money",
		components: {Tag, Note, Tab, Panel},
		data() {
			return {
				labels: ["衣", "食", "住", "行"]
			}
		}
	}
</script>

<style>
  .xxx {
    display: flex;
    flex-direction: column-reverse;
  }
</style>