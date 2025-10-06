export function formatDate(isoString: string, useMonthName: boolean = false, withYear: boolean = true): string {
  const date = new Date(isoString)

  const day = String(date.getDate()).padStart(2, "0")
  const year = date.getFullYear()

  const months = ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"]

  const month = useMonthName ? months[date.getMonth()] : String(date.getMonth() + 1).padStart(2, "0")

  return withYear ? `${day}/${month}/${year}` : `${day}/${month}`
}
