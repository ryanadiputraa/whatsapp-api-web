import { IChats } from "../Contacts"

interface Props {
  chats: IChats[]
}

export const Chats = ({ chats }: Props) => {
  return (
    <div className="w-full h-full flex flex-col justify-center bg-secondary">
      <div className="h-[9vh] bg-grey"></div>
      <div className="h-[82vh] py-2 px-8 bg-secondary overflow-y-auto">
        {chats.map((chat, idx) => (
          <div>{chat.body}</div>
        ))}
      </div>
      <div className="h-[9vh] bg-grey"></div>
    </div>
  )
}
