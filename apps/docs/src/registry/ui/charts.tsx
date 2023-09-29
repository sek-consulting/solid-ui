import type { Component, ComponentProps } from "solid-js"
import { mergeProps, onMount, createEffect, on, onCleanup, splitProps } from "solid-js"

import type {
  ChartComponent,
  ChartData,
  ChartItem,
  ChartOptions,
  ChartType,
  ChartTypeRegistry,
  Plugin,
  TooltipModel
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
  Legend,
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

export interface ChartContext {
  chart: Chart
  tooltip: TooltipModel<keyof ChartTypeRegistry>
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
  Chart.register(Colors, Filler, Legend, Tooltip, ...registerMap[rawProps.type])

  const props = mergeProps(
    {
      options: { responsive: true, maintainAspectRatio: false } as ChartOptions,
      plugins: [] as Plugin[]
    },
    rawProps
  )
  const [, rest] = splitProps(props, ["class", "type", "data", "options", "plugins"])

  let ref: HTMLCanvasElement
  let chart: Chart

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

function showTooltip(context: ChartContext) {
  let el = document.getElementById("chartjs-tooltip")
  if (!el) {
    el = document.createElement("div")
    el.id = "chartjs-tooltip"
    document.body.appendChild(el)
  }

  const model = context.tooltip
  if (model.opacity === 0 || !model.body) {
    el.style.opacity = "0"
    return
  }

  el.className = `p-2 bg-card text-card-foreground rounded-lg border shadow-sm text-sm ${
    model.yAlign ?? `no-transform`
  }`

  let content = ""

  model.title.forEach((title) => {
    content += `<h3 class="font-semibold leading-none tracking-tight">${title}</h3>`
  })

  content += `<div class="mt-1 text-muted-foreground">`
  const body = model.body.flatMap((body) => body.lines)
  body.forEach((line, i) => {
    const colors = model.labelColors[i]
    content += `
        <div class="flex items-center">
          <span class="inline-block h-2 w-2 mr-1 rounded-full border" style="background: ${colors.backgroundColor}; border-color: ${colors.borderColor}"></span>
          ${line}
        </div>`
  })
  content += `</div>`

  el.innerHTML = content

  const pos = context.chart.canvas.getBoundingClientRect()
  el.style.opacity = "1"
  el.style.position = "absolute"
  el.style.left = `${pos.left + window.scrollX + model.caretX}px`
  el.style.top = `${pos.top + window.scrollY + model.caretY}px`
  el.style.pointerEvents = "none"
}

function createTypedChart(type: ChartType): Component<TypedChartProps> {
  const chartsWithScales: ChartType[] = ["bar", "line", "scatter"]
  const chartsWithLegends: ChartType[] = ["bar", "line"]

  const options: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: chartsWithScales.includes(type)
      ? {
          x: {
            border: { display: false },
            grid: { display: false }
          },
          y: {
            border: {
              dash: [3],
              dashOffset: 3,
              display: false
            },
            grid: {
              color: "hsla(240, 3.8%, 46.1%, 0.4)"
            }
          }
        }
      : {},
    plugins: {
      legend: chartsWithLegends.includes(type)
        ? {
            display: true,
            align: "end",
            labels: {
              usePointStyle: true,
              boxWidth: 6,
              boxHeight: 6,
              color: "hsl(240, 3.8%, 46.1%)",
              font: { size: 14 }
            }
          }
        : { display: false },
      tooltip: {
        enabled: false,
        external: (context) => showTooltip(context)
      }
    }
  }

  return (props) => <BaseChart type={type} options={options} {...props} />
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
