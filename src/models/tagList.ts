import IDGenerator from "@/lib/IDGenerator"

const keyName = "tagList"
const tagList: ITagList = {
  data: [],
  fetchData() {
    this.data = JSON.parse(window.localStorage.getItem(keyName) || "[]")
    return this.data
  },
  saveData() {
    window.localStorage.setItem(keyName, JSON.stringify(this.data))
  },
  create(name) {
    const names = this.data.map(item => item.name)
    if (names.indexOf(name) >= 0) {
      return "duplicated"
    }
    this.data.push({id: IDGenerator().toString(), name})
    this.saveData()
    return "success"
  },
  update({id, name}) {
    const idList = this.data.map(item => item.id)
    if (idList.indexOf(id) >= 0) {
      const names = this.data.map(item => item.name)
      if (names.indexOf(name) >= 0) {
        return "duplicated"
      } else {
        const tag = this.data.filter(item => item.id === id)[0]
        tag.name = name
        this.saveData()
        return "success"
      }
    } else {
      return "not found"
    }
  },
  remove(id) {
    let index = -1
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].id === id) {
        index = i
        break
      }
    }
    this.data.splice(index, 1)
    this.saveData()
    return true
  }
}

export default tagList