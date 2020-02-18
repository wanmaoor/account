import Vue from "vue"
import Vuex from "vuex"
import IDGenerator from "@/lib/IDGenerator"

Vue.use(Vuex)


const record = {
  state: {
    recordList: JSON.parse(localStorage.getItem("recordList") || "[]")
  },
  mutations: {
    addRecord(state, payload) {
      const copy: RecordItem = JSON.parse(JSON.stringify(payload))
      copy.createdAt = new Date()
      state.recordList.push(copy)
      localStorage.setItem("recordList", JSON.stringify(state.recordList))
    }
  }
}

const tags = {
  state: {
    tagList: JSON.parse(localStorage.getItem("tagList") || "[]")
  },
  mutations: {
    createTag(state, payload) {
      const names = state.tagList.map(item => item.name)
      if (names.indexOf(payload) >= 0) {
        window.alert("标签名重复")
      } else {
        state.tagList.push({id: IDGenerator().toString(), name: payload})
        localStorage.setItem("tagList", JSON.stringify(state.tagList))
        window.alert("添加成功")
      }
    },
    updateTag(state, payload) {
      const idList = state.tagList.map(item => item.id)
      if (idList.indexOf(payload.id) >= 0) {
        const names = state.tagList.map(item => item.name)
        if (names.indexOf(payload.name) >= 0) {
          return
        } else {
          const tag = state.tagList.filter(item => item.id === payload.id)[0]
          tag.name = payload.name
          localStorage.setItem("tagList", JSON.stringify(state.tagList))
        }
      } else {
        return "not found"
      }
    },
    removeTag(state, payload) {
      let index = -1
      for (let i = 0; i < state.tagList.length; i++) {
        if (state.tagList[i].id === payload) {
          index = i
          break
        }
      }
      state.tagList.splice(index, 1)
      localStorage.setItem("tagList", JSON.stringify(state.tagList))
      
    }
  }
}

export default new Vuex.Store({
  modules: {record, tags}
})
