import Vue from "vue"
import Vuex from "vuex"
import IDGenerator from "@/lib/IDGenerator"
import router from "@/router"
import clone from "@/lib/clone"

Vue.use(Vuex)


const record = {
  state: {
    recordList: JSON.parse(localStorage.getItem("recordList") || "[]")
  } as IRecordList,
  mutations: {
    addRecord(state: IRecordList, payload: RecordItem) {
      const copy: RecordItem = clone(payload)
      copy.createdAt = new Date().toISOString()
      state.recordList.push(copy)
      localStorage.setItem("recordList", JSON.stringify(state.recordList))
      window.alert("保存成功")
    }
  }
}

const tags = {
  state: {
    tagList: JSON.parse(localStorage.getItem("tagList") || "[]")
  },
  mutations: {
    createTag(state: ITagList, payload: string) {
      const names: string[] = state.tagList.map(item => item.name)
      if (names.indexOf(payload) >= 0) {
        window.alert("标签名重复")
      } else {
        state.tagList.push({id: IDGenerator().toString(), name: payload})
        localStorage.setItem("tagList", JSON.stringify(state.tagList))
      }
    },
    updateTag(state: ITagList, payload: IData) {
      const idList: string[] = state.tagList.map(item => item.id)
      if (idList.indexOf(payload.id) >= 0) {
        const names: string[] = state.tagList.map(item => item.name)
        if (names.indexOf(payload.name) >= 0) {
          window.alert("标签名重复")
        } else {
          const tag = state.tagList.filter(item => item.id === payload.id)[0]
          tag.name = payload.name
          localStorage.setItem("tagList", JSON.stringify(state.tagList))
        }
      }
    },
    removeTag(state: ITagList, payload: string) {
      let index = -1
      for (let i = 0; i < state.tagList.length; i++) {
        if (state.tagList[i].id === payload) {
          index = i
          break
        }
      }
      if (index >= 0) {
        state.tagList.splice(index, 1)
        localStorage.setItem("tagList", JSON.stringify(state.tagList))
        router.back()
      }
    }
  }
}

export default new Vuex.Store({
  modules: {record, tags}
})
