import { Dispatch, SetStateAction } from "react"
import PersonIco from "../../assets/person-ico.png"
import { mock_messages } from "../../mock/message"

export interface IChats {
  hasMedia: boolean
  body: string
  type: string
  timestamp: number
  from: string
  to: string
  author: undefined
  deviceType: string
  isForwarded: boolean
  forwardingScore: number
  isStatus: undefined
  isStarred: boolean
  broadcast: boolean
  fromMe: boolean
  hasQuotedMsg: boolean
  isGif: boolean
  links: string[]
}

interface Props {
  selectedContact: string
  setSelectedContact: Dispatch<SetStateAction<string>>
  setSelectedChats: Dispatch<SetStateAction<IChats[]>>
}

export const Contacts = ({
  selectedContact,
  setSelectedContact,
  setSelectedChats,
}: Props) => {
  return (
    <nav className="sm:w-96 w-0 h-[100vh] bg-secondary">
      <div className="overflow-y-auto h-[100vh]">
        {Object.keys(mock_messages).map((key, idx) => (
          <div
            className={`flex items-center px-4 h-20 hover:bg-grey hover:cursor-pointer ${
              selectedContact === key ? "bg-grey" : ""
            }`}
            key={idx}
            onClick={() => {
              setSelectedContact(selectedContact !== key ? key : "")
              setSelectedChats(
                selectedContact !== key ? mock_messages[key] : []
              )
            }}
          >
            <img className="w-14 h-14 mr-4" src={PersonIco} alt="" />
            <div>
              <h4 className="font-bold">{key}</h4>
              <span className="font-light text-xs">
                Preview pesan terakhir...
              </span>
            </div>
          </div>
        ))}
      </div>
    </nav>
  )
}
