const keyName = "tagList"

interface ITagList {
  data: string[]
  fetchData: () => string[]
  saveData: () => void
  create: (name: string) => boolean
}

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
    if (this.data.indexOf(name) >= 0) {
      throw new Error("duplicated")
    }
    this.data.push(name)
    this.saveData()
    return true
  }
}

export default tagList

