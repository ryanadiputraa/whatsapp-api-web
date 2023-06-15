import { Dispatch, SetStateAction } from "react"
import PersonIco from "../../assets/person-ico.png"

export interface IClientInfo {
  name: string
  number: string
}
export interface IChats {
  [key: string]: IChat[]
}

export interface IChat {
  ack: number
  hasMedia: boolean
  body: string
  type: string
  timestamp: number
  from: string
  to: string
  author?: string
  deviceType: string
  isForwarded: boolean
  forwardingScore: 0
  isStatus: boolean
  isStarred: boolean
  broadcast: boolean
  fromMe: boolean
  hasQuotedMsg: boolean
  hasReaction: boolean
  duration?: number
  location?: string
  vCards: []
  inviteV4?: string
  mentionedIds: []
  orderId?: string
  token?: string
  isGif: boolean
  isEphemeral?: boolean
  links: []
}

interface Props {
  client: IClientInfo
  chats: IChats
  selectedChats: string
  setSelectedChats: Dispatch<SetStateAction<string>>
}

export const Chats = ({
  client,
  chats,
  selectedChats,
  setSelectedChats,
}: Props) => {
  return (
    <nav className="sm:w-96 w-0 h-[100vh] bg-secondary border-solid border-light-grey border-r-2">
      <div className="h-[9vh] bg-grey flex flex-col justify-center pl-8">
        <h2 className="font-bold text-lg">{client.name}</h2>
        <span className="text-sm">{client.number}</span>
      </div>
      <div className="overflow-y-auto h-[91vh]">
        {Object.keys(chats).map((number, idx) => (
          <div
            className={`flex w-100% px-4 h-[9vh] hover:bg-grey hover:cursor-pointer ${
              selectedChats === number ? "bg-grey" : ""
            }`}
            key={idx}
            onClick={() =>
              setSelectedChats(selectedChats !== number ? number : "")
            }
          >
            <img className="w-10 h-10 mr-4 my-auto" src={PersonIco} alt="" />
            <div className="border-solid border-grey border-b-2 leading-5 w-full h-full flex flex-col justify-center">
              <h4 className="font-bold">{number.split("@")[0] ?? ""}</h4>
              <span className="font-light text-xs line-clamp-1">
                {chats[number].at(-1)?.body ?? ""}
              </span>
            </div>
          </div>
        ))}
      </div>
    </nav>
  )
}
