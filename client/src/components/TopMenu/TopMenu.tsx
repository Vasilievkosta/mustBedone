import { useEffect, useState } from "react"
import { socket } from "../../utils/socket"
import { TimePanel } from "../TimePanel/TimePanel"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

export const TopMenu = () => {
  const [clientCount, setClientCount] = useState(0)
  const { t } = useTranslation()

  useEffect(() => {
    const onClientCount = (n: number) => {
      console.log("got clientCount", n)
      setClientCount(n)
    }

    socket.on("clientCount", onClientCount)

    socket.emit("getClientCount")

    const onConnect = () => {
      socket.emit("getClientCount")
    }
    socket.on("connect", onConnect)

    return () => {
      socket.off("clientCount", onClientCount)
      socket.off("connect", onConnect)
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
          <input className="search__input" type="search" placeholder={t("common.search")} />
        </form>
      </div>

      <div className="header__right">
        <div className="datetime header__datetime">
          <TimePanel />
        </div>
        <p className="datetime__count">
          {t("common.sessions")}: {clientCount}
        </p>
      </div>
    </header>
  )
}
