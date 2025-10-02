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
    <header className="header">
      <NavLink to="/" className="header__logo">
        <p className="header__text"> ⚜️ Inventory</p>
      </NavLink>

      <div className="header__inform">
        <TimePanel />
        <p className="header__count">Сессий: {clientCount}</p>
      </div>
    </header>
  )
}
