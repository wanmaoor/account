interface RecordItem {
  tags: Array<string>
  notes: string | number
  type: string
  amount: number
  createdAt?: string
}

interface IData {
  id: string,
  name: string
}

interface IRecordList {
  recordList: RecordItem[]
}

interface ITagList {
  tagList: IData[]
}

