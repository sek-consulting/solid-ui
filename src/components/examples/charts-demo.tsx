import { ComponentExample } from "~/components/component-example"
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import { PieChart, LineChart, BarChart } from "~/components/ui/charts"

export function LineChartDemo() {
  const chartData = {
    labels: ["Jan 22", "Feb 22", "Mar 22", "Apr 22", "May 22", "Jun 22"],
    datasets: [
      {
        label: "SemiAnalysis",
        data: [2890, 2756, 2643, 2837, 2954, 3239]
      },
      {
        label: "The Pragmatic Engineer",
        data: [2338, 2103, 2194, 2473, 3848, 3736]
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
          <LineChart class="md:w-[500px] w-full" data={chartData} />
        </CardContent>
      </Card>
    </ComponentExample>
  )
}

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
          <LineChart class="md:w-[500px] w-full" data={chartData} />
        </CardContent>
      </Card>
    </ComponentExample>
  )
}

export function PieChartDemo() {
  const chartData = {
    labels: ["New York", "London", "Hong Kong", "Singapore"],
    datasets: [
      {
        data: [9800, 4567, 3908, 1908]
      }
    ]
  }
  return (
    <ComponentExample>
      <Card>
        <CardHeader>
          <CardTitle>Sales</CardTitle>
        </CardHeader>
        <CardContent>
          <PieChart class="md:w-[200px] w-full" data={chartData} />
        </CardContent>
      </Card>
    </ComponentExample>
  )
}

export function BarChartDemo() {
  const chartData = {
    labels: ["Amphibians", "Birds", "Crustaceans", "Ferns"],
    datasets: [
      {
        label: "Number of threatened species",
        data: [2488, 1445, 734, 281]
      }
    ]
  }
  return (
    <ComponentExample>
      <Card>
        <CardHeader>
          <CardTitle>Sales</CardTitle>
        </CardHeader>
        <CardContent>
          <BarChart class="md:w-[500px] w-full" data={chartData} />
        </CardContent>
      </Card>
    </ComponentExample>
  )
}
