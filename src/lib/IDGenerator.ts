let id: number = parseInt(window.localStorage.getItem("_lastId") || "0") || 0

function IDGenerator() {
  id++
  window.localStorage.setItem("_lastId", id.toString())
  return id
}

export default IDGenerator
