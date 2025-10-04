import { useEffect, useState } from "react"
import { socket } from "../../utils/socket"
import { TimePanel } from "../TimePanel/TimePanel"

export const TopMenu = () => {
  const [clientCount, setClientCount] = useState(0)

  useEffect(() => {
    socket.on("clientCount", setClientCount)

    return () => {
      socket.off("clientCount", setClientCount)
    }
  }, [])

  return (
    // <header className="header">
    //   <NavLink to="/" className="header__logo">
    //     <p className="header__text"> ⚜️ Inventory</p>
    //   </NavLink>

    //   <div className="header__inform">
    //     <TimePanel />
    //     <p className="header__count">Сессий: {clientCount}</p>
    //   </div>
    // </header>
    <header className="header" role="banner">
      <div className="header__left">
        <div className="logo header__logo">
          {/* <div className="logo__img" aria-hidden="true" /> */}
          <span className="logo__text"> ⚜️ INVENTORY</span>
        </div>
      </div>

      <div className="header__center">
        <form className="search" onSubmit={(e) => e.preventDefault()}>
          <input className="search__input" type="search" placeholder="Поиск..." />
        </form>
      </div>

      <div className="header__right">
        <div className="datetime header__datetime">
          {/* <div className="datetime__date">12 мая, 2017</div>
          <div className="datetime__time">07:20</div> */}
          <TimePanel />
        </div>
        <p className="datetime__count">Сессий: {clientCount}</p>
      </div>
    </header>
  )
}
