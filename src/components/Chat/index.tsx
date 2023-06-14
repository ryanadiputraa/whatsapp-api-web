import { IChat } from "../Chats"

interface Props {
  chat: IChat[]
}

export const Chat = ({ chat }: Props) => {
  return (
    <div className="w-full h-full flex flex-col justify-center bg-secondary">
      <div className="h-[9vh] bg-grey"></div>
      <div className="h-[82vh] p-8 bg-secondary overflow-y-auto flex flex-col gap-4">
        {chat.map((c, idx) => {
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
              <span>{c.body}</span>
              <span className="text-xs self-end text-gray-400">{time}</span>
            </div>
          )
        })}
      </div>
      <div className="h-[9vh] bg-grey"></div>
    </div>
  )
}
