import { Bar } from "react-chartjs-2"
import type { ChartOptions } from "chart.js"

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js"
import { useGetOrdersQuery } from "../../services/api/api"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const OrderChart = () => {
  const { data: orders = [], isLoading } = useGetOrdersQuery()

  if (isLoading) return <p>Загрузка графика...</p>

  const labels = orders.map((order) => order.title)
  const data = {
    labels,
    datasets: [
      {
        label: "Сумма заказа (₴)",
        data: orders.map((order) => order.total_sum),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        yAxisID: "y1",
      },
      {
        label: "Количество продуктов",
        data: orders.map((order) => order.products_count),
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        yAxisID: "y2",
      },
    ],
  }

  const options: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        labels: { font: { size: 14 } },
      },
      title: {
        display: true,
        text: "Сравнение заказов",
        font: { size: 18 },
      },
    },
    scales: {
      y1: {
        type: "linear",
        position: "left",
        beginAtZero: true,
        title: {
          display: true,
          text: "Сумма заказа (₴)",
          font: { size: 14 },
        },
        ticks: { font: { size: 12 } },
      },
      y2: {
        type: "linear",
        position: "right",
        beginAtZero: true,
        title: {
          display: true,
          text: "Количество продуктов",
          font: { size: 14 },
        },
        ticks: { font: { size: 12 } },
        grid: {
          drawOnChartArea: false, //  сетку второй оси
        },
      },
      x: {
        ticks: { font: { size: 12 } },
      },
    },
  }

  return (
    // <div className="chart-container">
    <div style={{ width: "100%", minWidth: "800px", maxHeight: "400px" }}>
      <Bar options={options} data={data} />
    </div>
  )
}
