let id: number = parseInt(window.localStorage.getItem("_lastId") || "0") || 0

function IDGenerator() {
  id++
  return id
}

export default IDGenerator