import { ComponentExample } from "~/components/component-example"
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import { LineChart } from "~/components/ui/charts"

export function AreaChartDemo() {
  const chartData = {
    labels: ["Jan 22", "Feb 22", "Mar 22", "Apr 22", "May 22", "Jun 22"],
    datasets: [
      {
        label: "SemiAnalysis",
        data: [2890, 2756, 2643, 2837, 2954, 3239],
        fill: true
      },
      {
        label: "The Pragmatic Engineer",
        data: [2338, 2103, 2194, 2473, 3848, 3736],
        fill: true
      }
    ]
  }
  return (
    <ComponentExample>
      <Card>
        <CardHeader>
          <CardTitle>Newsletter revenue over time (USD)</CardTitle>
        </CardHeader>
        <CardContent>
          <LineChart class="w-[500px]" data={chartData} />
        </CardContent>
      </Card>
    </ComponentExample>
  )
}
