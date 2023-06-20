import { BsSend } from "react-icons/bs"

import { FormEvent, useState } from "react"
import { IChat } from "../Chats"
import { socket } from "../../socket"
import { decryptString } from "../../utils/crypto"
import PersonIco from "../../assets/person-ico.png"
import { formatChatIdToPhoneNumber } from "../../utils/chatId"

interface Props {
  chat: IChat[]
  chatId: string
}

export const Chat = ({ chat, chatId }: Props) => {
  const [message, setMessage] = useState<string>("")

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    socket.emit("send", { chatId, message })
    setMessage("")
  }

  return (
    <div className="w-full h-full flex flex-col justify-center bg-secondary">
      <div className="h-[9vh] bg-grey flex items-center px-8 gap-4">
        <img
          className="w-10 h-10 rounded-full"
          src={chat[0]?.profilePicture ?? PersonIco}
          alt=""
        />
        <h4>{formatChatIdToPhoneNumber(chatId)}</h4>
      </div>
      <div className="h-[82vh] p-8 bg-secondary overflow-y-auto flex flex-col gap-4">
        {chat?.map((c, idx) => {
          const date = new Date(c.timestamp * 1000)
          const hours = String(date.getHours())
          const minutes = String(date.getMinutes())
          const time = `${hours.length <= 1 ? "0" : ""}${hours}:${
            minutes.length <= 1 ? "0" : ""
          }${minutes}`

          return (
            <div
              className={`flex gap-2 items-center ${
                c.fromMe ? "bg-primary self-end" : "bg-grey self-start"
              } py-2 px-3 rounded-xl`}
              key={idx}
            >
              <span>{decryptString(c.body)}</span>
              <span className="text-xs self-end text-gray-400">{time}</span>
            </div>
          )
        })}
      </div>
      <form
        onSubmit={(e) => onSubmit(e)}
        className="flex items-center py-3 px-8 h-[9vh] bg-grey justify-between"
      >
        <textarea
          className="bg-light-grey h-full rounded-md px-4 py-[1%] border-none outline-none overflow-hidden resize-none w-[92%]"
          placeholder="Type a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              onSubmit(e)
            }
          }}
        />
        <button
          type="submit"
          className="h-full w-[6%] text-2xl grid place-items-center"
        >
          <BsSend />
        </button>
      </form>
    </div>
  )
}
