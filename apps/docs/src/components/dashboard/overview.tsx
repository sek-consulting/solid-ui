import { BarChart } from "~/registry/ui/charts"

export function Overview() {
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Sales",
        data: [
          Math.floor(Math.random() * 5000) + 1000,
          Math.floor(Math.random() * 5000) + 1000,
          Math.floor(Math.random() * 5000) + 1000,
          Math.floor(Math.random() * 5000) + 1000,
          Math.floor(Math.random() * 5000) + 1000,
          Math.floor(Math.random() * 5000) + 1000,
          Math.floor(Math.random() * 5000) + 1000,
          Math.floor(Math.random() * 5000) + 1000,
          Math.floor(Math.random() * 5000) + 1000,
          Math.floor(Math.random() * 5000) + 1000,
          Math.floor(Math.random() * 5000) + 1000,
          Math.floor(Math.random() * 5000) + 1000
        ]
      }
    ]
  }

  return <BarChart class="h-[350px] w-full" data={chartData} />
}
