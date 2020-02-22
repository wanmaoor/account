import Vue from "vue"
import Vuex from "vuex"
import IDGenerator from "@/lib/IDGenerator"
import router from "@/router"
import clone from "@/lib/clone"
import {Message} from "@wanmaoor/giaoui"

Vue.use(Vuex)
Vue.use(Message)

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
    }
  }
}

const tags = {
  state: {
    tagList: JSON.parse(localStorage.getItem("tagList") || "[]")
  },
  mutations: {
    initialTag(state: ITagList) {
      const tags = ["衣", "食", "住", "行"]
      tags.forEach(tag => {
        state.tagList.push({id: IDGenerator().toString(), name: tag})
      })
      localStorage.setItem("tagList", JSON.stringify(state.tagList))
    },
    createTag(state: ITagList, payload: string) {
      const names: string[] = state.tagList.map(item => item.name)
      if (names.indexOf(payload) >= 0) {
        Vue.prototype.$message({
          type: "danger",
          text: "标签名重复"
        })
      } else {
        state.tagList.push({id: IDGenerator().toString(), name: payload})
        localStorage.setItem("tagList", JSON.stringify(state.tagList))
        Vue.prototype.$message({
          type: "success",
          text: "添加成功"
        })
      }
    },
    updateTag(state: ITagList, payload: IData) {
      const idList: string[] = state.tagList.map(item => item.id)
      if (idList.indexOf(payload.id) >= 0) {
        const names: string[] = state.tagList.map(item => item.name)
        if (names.indexOf(payload.name) >= 0) {
          Vue.prototype.$message({
            type: "danger",
            text: "标签名重复"
          })
        } else {
          const tag = state.tagList.filter(item => item.id === payload.id)[0]
          tag.name = payload.name
          localStorage.setItem("tagList", JSON.stringify(state.tagList))
          Vue.prototype.$message({
            type: "success",
            text: "修改标签名成功"
          })
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
        const label = state.tagList.splice(index, 1)[0]
        localStorage.setItem("tagList", JSON.stringify(state.tagList))
        router.back()
        Vue.prototype.$message({
          type: "danger",
          text: `删除 ${label.name} 标签成功`
        })
      }
    }
  }
}

export default new Vuex.Store({
  modules: {record, tags}
})
