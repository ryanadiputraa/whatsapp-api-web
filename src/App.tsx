import { useCallback, useEffect, useState } from "react"

import { socket } from "./socket"
import { Chats, IChat, IChats } from "./components/Chats"
import { ChatPlaceholder } from "./components/ChatPlaceholder"
import { Chat } from "./components/Chat"

function App() {
  const [_, setIsConnected] = useState(socket.connected)
  const [chats, setChats] = useState<IChats>({})
  const [selectedChats, setSelectedChats] = useState<string>("")

  const onMessages = useCallback((msg: IChat) => {
    const number = msg[msg.fromMe ? "to" : "from"].split("@")?.[0]
    setChats((current) => ({
      [number]: [...current[number], msg],
    }))
  }, [])

  useEffect(() => {
    socket.on("connect", () => setIsConnected(true))
    socket.on("message", onMessages)

    return () => {
      socket.off("connect", () => setIsConnected(false))
      socket.off("message", onMessages)
    }
  }, [])

  return (
    <main className="flex text-white">
      <Chats
        chats={chats}
        selectedChats={selectedChats}
        setSelectedChats={setSelectedChats}
      />
      <section className="flex-grow min-h-[100vh]">
        {selectedChats ? (
          <Chat chat={chats[selectedChats]} />
        ) : (
          <ChatPlaceholder />
        )}
      </section>
    </main>
  )
}

export default App
