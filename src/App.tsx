import { useCallback, useEffect, useState } from "react"

import { socket } from "./socket"
import { Chats, IChat, IChats, IClientInfo } from "./components/Chats"
import { ChatPlaceholder } from "./components/ChatPlaceholder"
import { Chat } from "./components/Chat"

function App() {
  const [_, setIsConnected] = useState(socket.connected)
  const [client, setClient] = useState<IClientInfo>({ name: "", number: "" })
  const [chats, setChats] = useState<IChats>({})
  const [selectedChats, setSelectedChats] = useState<string>("")

  const onClientInfo = useCallback((client: IClientInfo) => {
    if (client) setClient(client)
  }, [])

  const onChats = useCallback((chats: IChats) => {
    setChats(chats)
  }, [])

  const onMessages = useCallback((msg: IChat) => {
    const number = msg[msg.fromMe ? "to" : "from"]
    setChats((current) => ({
      [number]: [...(current[number] ?? []), msg],
    }))
  }, [])

  useEffect(() => {
    socket.on("connect", () => setIsConnected(true))
    socket.on("client", onClientInfo)
    socket.on("chats", onChats)
    socket.on("message", onMessages)

    return () => {
      socket.off("connect", () => setIsConnected(false))
      socket.off("client", onClientInfo)
      socket.off("chats", onChats)
      socket.off("message", onMessages)
    }
  }, [])

  return (
    <main className="flex text-white">
      <Chats
        client={client}
        chats={chats}
        selectedChats={selectedChats}
        setSelectedChats={setSelectedChats}
      />
      <section className="flex-grow min-h-[100vh]">
        {selectedChats ? (
          <Chat chat={chats[selectedChats]} chatId={selectedChats} />
        ) : (
          <ChatPlaceholder />
        )}
      </section>
    </main>
  )
}

export default App
