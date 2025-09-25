import { useEffect, useState } from "react"
import { socket } from "../../utils/socket"

export const TopMenu = () => {
  const [clientCount, setClientCount] = useState(0)

  const date = new Date().toLocaleDateString()

  useEffect(() => {
    socket.on("clientCount", setClientCount)

    return () => {
      socket.off("clientCount", setClientCount)
    }
  }, [])

  return (
    <header>
      <div style={{ marginLeft: "auto" }}>
        <span>{date}</span> | <span>Сессий: {clientCount}</span>
      </div>
    </header>
  )
}
