import { useCallback, useEffect, useState } from "react"
import "./App.css"

import { socket } from "./socket"

function App() {
  const [_, setIsConnected] = useState(socket.connected)

  const onMessages = useCallback((msg: any) => {
    console.log(msg)
  }, [])

  useEffect(() => {
    socket.on("connect", () => setIsConnected(true))
    socket.on("message", onMessages)

    return () => {
      socket.off("connect", () => console.log("disconnect"))
      socket.off("message", onMessages)
    }
  }, [])

  return <></>
}

export default App
