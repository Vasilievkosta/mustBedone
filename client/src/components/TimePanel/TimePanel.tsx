import { useEffect, useState } from "react"

import { useTranslation } from "react-i18next"

export const TimePanel = () => {
  const { i18n } = useTranslation()
  const [currentTime, setCurrentTime] = useState<{
    weekday: string
    date: string
    time: string
  }>(() => getFormattedTime())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(getFormattedTime())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  function getFormattedTime() {
    const now = new Date()
    console.log(i18n.language)

    const weekday = now.toLocaleDateString(i18n.language, { weekday: "long" }) // Вторник
    const date = now.toLocaleDateString("ru-RU", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }) // 06 апр. 2025

    const time = now.toLocaleTimeString("ru-RU", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }) // 13:29:22

    return { weekday, date, time }
  }

  const { weekday, date, time } = currentTime

  return (
    <div className="clock">
      <div className="clock__date">
        <div className="clock__weekday">{weekday}</div>
        <div className="clock__day">{date}</div>
      </div>
      <div className="clock__times">
        <span className="clock-icon">🕒</span>
        <span className="clock__time">{time}</span>
      </div>
    </div>
  )
}
