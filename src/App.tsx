import { useCallback, useEffect, useState } from "react"

import { socket } from "./socket"
import { Contacts, IChats } from "./components/Contacts"
import { ChatPlaceholder } from "./components/ChatPlaceholder"

function App() {
  const [_, setIsConnected] = useState(socket.connected)
  const [selectedContact, setSelectedContact] = useState<string>("")
  const [selectedChats, setSelectedChats] = useState<IChats[]>([])

  const onMessages = useCallback((msg: any) => {
    console.log(msg)
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
      <Contacts
        selectedContact={selectedContact}
        setSelectedContact={setSelectedContact}
        setSelectedChats={setSelectedChats}
      />
      <section className="flex-grow min-h-[100vh]">
        <ChatPlaceholder />
      </section>
    </main>
  )
}

export default App
