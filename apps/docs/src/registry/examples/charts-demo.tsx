import { ComponentExample } from "~/components/component-example"
import { Card, CardContent, CardHeader, CardTitle } from "~/registry/ui/card"
import { PieChart, LineChart, BarChart } from "~/registry/ui/charts"

export function LineChartDemo() {
  const chartData = {
    labels: [
      "Jan 22",
      "Feb 22",
      "Mar 22",
      "Apr 22",
      "May 22",
      "Jun 22",
      "Jul 22",
      "Aug 22",
      "Sep 22",
      "Oct 22",
      "Nov 22",
      "Dec 22"
    ],
    datasets: [
      {
        label: "SemiAnalysis",
        data: [2890, 2756, 3322, 3470, 3475, 3129, 3490, 2903, 2643, 2837, 2954, 3239]
      },
      {
        label: "The Pragmatic Engineer",
        data: [2338, 2103, 2194, 2108, 1812, 1726, 1982, 2012, 2342, 2473, 3848, 3736]
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
          <LineChart class="h-64 w-[500px] max-w-full" data={chartData} />
        </CardContent>
      </Card>
    </ComponentExample>
  )
}

export function AreaChartDemo() {
  const chartData = {
    labels: [
      "Jan 22",
      "Feb 22",
      "Mar 22",
      "Apr 22",
      "May 22",
      "Jun 22",
      "Jul 22",
      "Aug 22",
      "Sep 22",
      "Oct 22",
      "Nov 22",
      "Dec 22"
    ],
    datasets: [
      {
        label: "SemiAnalysis",
        data: [2890, 2756, 3322, 3470, 3475, 3129, 3490, 2903, 2643, 2837, 2954, 3239],
        fill: true
      },
      {
        label: "The Pragmatic Engineer",
        data: [2338, 2103, 2194, 2108, 1812, 1726, 1982, 2012, 2342, 2473, 3848, 3736],
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
          <LineChart class="h-64 w-[500px] max-w-full" data={chartData} />
        </CardContent>
      </Card>
    </ComponentExample>
  )
}

export function PieChartDemo() {
  const chartData = {
    labels: ["New York", "London", "Hong Kong", "San Francisco", "Singapore", "Zurich"],
    datasets: [
      {
        data: [9800, 4567, 3908, 2400, 1908, 1398]
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
          <PieChart class="h-[200px] w-[200px]" data={chartData} />
        </CardContent>
      </Card>
    </ComponentExample>
  )
}

export function BarChartDemo() {
  const chartData = {
    labels: ["Amphibians", "Birds", "Crustaceans", "Ferns", "Arachnids", "Corals", "Algae"],
    datasets: [
      {
        label: "Number of threatened species",
        data: [2488, 1445, 734, 281, 251, 232, 98]
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
          <BarChart class="h-64 w-[500px] max-w-full" data={chartData} />
        </CardContent>
      </Card>
    </ComponentExample>
  )
}
