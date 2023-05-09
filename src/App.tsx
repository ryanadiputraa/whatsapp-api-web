import { useEffect, useState } from "react"
import "./App.css"

import { socket } from "./socket"

function App() {
  const [_, setIsConnected] = useState(socket.connected)

  useEffect(() => {
    socket.on("connect", () => setIsConnected(true))

    return () => {
      socket.off("connect", () => console.log("disconnect"))
    }
  }, [])

  return <></>
}

export default App
