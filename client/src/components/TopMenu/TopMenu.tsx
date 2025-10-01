import { useEffect, useState } from "react"
import { socket } from "../../utils/socket"
import { NavLink } from "react-router-dom"
import { TimePanel } from "../TimePanel/TimePanel"

export const TopMenu = () => {
  const [clientCount, setClientCount] = useState(0)
  // const date = new Date().toLocaleDateString()

  useEffect(() => {
    socket.on("clientCount", setClientCount)

    return () => {
      socket.off("clientCount", setClientCount)
    }
  }, [])

  return (
    <header>
      <NavLink to="/" className="logo">
        <p> ⚜️ Inventory</p>
      </NavLink>

      <div className="inform">
        <TimePanel />
        <p>Сессий: {clientCount}</p>
      </div>
    </header>
  )
}
