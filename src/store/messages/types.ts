interface Message {
  Title: string
  Content: string
  CreateAt: string
  Url: string
}

interface MessageState {
  Messages: Array<Message>
}

export {
  Message,
  MessageState
}
