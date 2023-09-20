import type { Component, ComponentProps } from "solid-js"
import { mergeProps, onMount, createEffect, on, onCleanup, splitProps } from "solid-js"

import type {
  ChartComponent,
  ChartData,
  ChartOptions,
  Plugin,
  ChartItem,
  ChartType
} from "chart.js"
import {
  ArcElement,
  BarController,
  BarElement,
  BubbleController,
  CategoryScale,
  Chart,
  Colors,
  DoughnutController,
  Filler,
  LineController,
  LineElement,
  LinearScale,
  PieController,
  PointElement,
  PolarAreaController,
  RadarController,
  RadialLinearScale,
  ScatterController,
  Tooltip
} from "chart.js"

import { cn } from "~/lib/utils"

export interface TypedChartProps extends ComponentProps<"div"> {
  data: ChartData
  options?: ChartOptions
  plugins?: Plugin[]
}

export interface ChartProps extends TypedChartProps {
  type: ChartType
}

const registerMap: { [key in ChartType]: ChartComponent[] } = {
  bar: [BarController, BarElement, CategoryScale, LinearScale],
  bubble: [BubbleController, PointElement, LinearScale],
  doughnut: [DoughnutController, ArcElement],
  line: [LineController, LineElement, PointElement, CategoryScale, LinearScale],
  pie: [PieController, ArcElement],
  polarArea: [PolarAreaController, ArcElement, RadialLinearScale],
  radar: [RadarController, LineElement, PointElement, RadialLinearScale],
  scatter: [ScatterController, PointElement, LinearScale]
}

const BaseChart: Component<ChartProps> = (rawProps) => {
  Chart.register(Colors, Filler, Tooltip, ...registerMap[rawProps.type])

  let ref: HTMLCanvasElement
  let chart: Chart

  const props = mergeProps(
    {
      options: {
        responsive: true
      } as ChartOptions,
      plugins: [] as Plugin[]
    },
    rawProps
  )
  const [, rest] = splitProps(props, ["class", "type", "data", "options", "plugins"])

  const init = () => {
    const ctx = ref!.getContext("2d") as ChartItem
    chart = new Chart(ctx, {
      type: props.type,
      data: props.data,
      options: props.options,
      plugins: props.plugins
    })
  }

  onMount(() => init())

  createEffect(
    on(
      () => props.data,
      () => {
        chart.data = props.data
        chart.update()
      },
      { defer: true }
    )
  )

  onCleanup(() => chart?.destroy())

  return (
    <div class={cn("max-w-full", props.class)} {...rest}>
      <canvas ref={ref!} />
    </div>
  )
}

function createTypedChart(type: ChartType): Component<TypedChartProps> {
  return (props) => <BaseChart type={type} {...props} />
}

const BarChart = createTypedChart("bar")
const BubbleChart = createTypedChart("bubble")
const DonutChart = createTypedChart("doughnut")
const LineChart = createTypedChart("line")
const PieChart = createTypedChart("pie")
const PolarAreaChart = createTypedChart("polarArea")
const RadarChart = createTypedChart("radar")
const ScatterChart = createTypedChart("scatter")

export {
  BaseChart as Chart,
  BarChart,
  BubbleChart,
  DonutChart,
  LineChart,
  PieChart,
  PolarAreaChart,
  RadarChart,
  ScatterChart
}
