import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
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
  },
  actions: {},
  modules: {}
})
