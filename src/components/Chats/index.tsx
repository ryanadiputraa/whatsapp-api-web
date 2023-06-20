import { Dispatch, SetStateAction } from "react"
import PersonIco from "../../assets/person-ico.png"
import { decryptString } from "../../utils/crypto"
import { formatChatIdToPhoneNumber } from "../../utils/chatId"

export interface IClientInfo {
  name: string
  number: string
  profilePicture?: string
}
export interface IChats {
  [key: string]: IChat[]
}

export interface IChat {
  ack: number
  chatId: string
  profilePicture?: string
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
      <div className="h-[9vh] bg-grey pl-4 flex items-center gap-4">
        <img
          className="w-10 h-10 rounded-full"
          src={client.profilePicture ?? PersonIco}
          alt=""
        />
        <div className="flex flex-col justify-center">
          <h2 className="font-bold text-lg">{client.name}</h2>
          <span className="text-xs">
            {formatChatIdToPhoneNumber(client.number)}
          </span>
        </div>
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
            <img
              className="w-10 h-10 mr-4 my-auto rounded-full"
              src={chats[number]?.[0]?.profilePicture ?? PersonIco}
              alt=""
            />
            <div className="border-solid border-grey border-b-2 leading-5 w-full h-full flex flex-col justify-center">
              <h4 className="font-bold">{formatChatIdToPhoneNumber(number)}</h4>
              <span className="font-light text-xs line-clamp-1">
                {decryptString(chats[number].at(-1)?.body ?? "")}
              </span>
            </div>
          </div>
        ))}
      </div>
    </nav>
  )
}
