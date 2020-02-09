const recordList = {
  fetchData() {
    return JSON.parse(window.localStorage.getItem("recordList") || "[]") as RecordItem[]
  },
  saveData(data: RecordItem[]) {
    window.localStorage.setItem("recordList", JSON.stringify(data))
  }
}

export default recordList

