import { IChats } from "../components/Contacts"

const msg: IChats = {
  hasMedia: false,
  body: "Customer",
  type: "chat",
  timestamp: 1683605561,
  from: "6287760481183@c.us",
  to: "6282271343920@c.us",
  author: undefined,
  deviceType: "android",
  isForwarded: false,
  forwardingScore: 0,
  isStatus: undefined,
  isStarred: false,
  broadcast: false,
  fromMe: false,
  hasQuotedMsg: false,
  isGif: false,
  links: [],
}

export const mock_messages: { [key: string]: IChats[] } = {
  "6287760481183": [msg],
  "6287760481181": [msg],
  "6287760481182": [msg],
  "6287760481184": [msg],
  "6287760481185": [msg],
  "6287760481186": [msg],
  "6287760481187": [msg],
  "6287760481188": [msg],
  "6287760481189": [msg],
  "6287760481113": [msg],
}
