interface RecordItem {
  tags: Array<string>
  notes: string | number
  type: string
  amount: number
  createdAt?: Date
}

interface IData {
  id: string,
  name: string
}

interface ITagList {
  data: IData[]
  fetchData: () => IData[]
  saveData: () => void
  create: (name: string) => "success" | "duplicated"
  update: (obj: IData) => "success" | "not found" | "duplicated"
  remove: (id: string) => void
}