import { useEffect, useState } from "react"
import { socket } from "../../utils/socket"
import { TimePanel } from "../TimePanel/TimePanel"
import { Link } from "react-router-dom"

export const TopMenu = () => {
  const [clientCount, setClientCount] = useState(0)

  useEffect(() => {
    socket.on("clientCount", setClientCount)

    return () => {
      socket.off("clientCount", setClientCount)
    }
  }, [])

  return (
    <header className="header" role="banner">
      <div className="header__left">
        <Link to="/orders" className="logo header__logo">
          <span className="logo__text"> ⚜️ INVENTORY</span>
        </Link>
      </div>

      <div className="header__center">
        <form className="search" onSubmit={(e) => e.preventDefault()}>
          <input className="search__input" type="search" placeholder="Поиск..." />
        </form>
      </div>

      <div className="header__right">
        <div className="datetime header__datetime">
          <TimePanel />
        </div>
        <p className="datetime__count">Сессий: {clientCount}</p>
      </div>
    </header>
  )
}
