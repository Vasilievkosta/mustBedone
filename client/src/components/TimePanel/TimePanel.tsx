import { useEffect, useState } from "react"

export const TimePanel = () => {
  const [currentTime, setCurrentTime] = useState<string>(getFormattedTime())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(getFormattedTime())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  function getFormattedTime(): string {
    const now = new Date()
    return now.toLocaleString("ru-RU", {
      weekday: "short",
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
  }

  return <div className="clock">{currentTime}</div>
}
