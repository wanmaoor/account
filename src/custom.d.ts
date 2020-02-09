interface RecordItem {
  tags: Array<string>
  notes: string | number
  type: string
  amount: number
  createdAt?: Date
}