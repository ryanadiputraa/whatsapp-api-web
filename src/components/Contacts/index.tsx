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
    <nav className="sm:w-96 w-0 h-[100vh] bg-secondary border-solid border-light-grey border-r-2">
      <div className="overflow-y-auto h-[100vh]">
        {Object.keys(mock_messages).map((key, idx) => (
          <div
            className={`flex w-100% px-4 h-[9vh] hover:bg-grey hover:cursor-pointer ${
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
            <img className="w-10 h-10 mr-4 my-auto" src={PersonIco} alt="" />
            <div className="border-solid border-grey border-b-2 leading-5 w-full h-full flex flex-col justify-center">
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
