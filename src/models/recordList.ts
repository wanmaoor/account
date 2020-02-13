const recordList = {
  data: [] as RecordItem[],
  fetchData() {
    this.data = JSON.parse(window.localStorage.getItem("recordList") || "[]") as RecordItem[]
    return this.data
  },
  saveData() {
    window.localStorage.setItem("recordList", JSON.stringify(this.data))
  },
  updateData(data: RecordItem) {
    const copy: RecordItem = JSON.parse(JSON.stringify(data))
    copy.createdAt = new Date()
    this.data.push(copy)
    this.saveData()
  }
}

export default recordList

