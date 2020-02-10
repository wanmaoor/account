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
    this.data.push({id: name, name})
    this.saveData()
    return "success"
  }
}

export default tagList