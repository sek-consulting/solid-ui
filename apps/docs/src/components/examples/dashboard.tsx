import { Avatar, AvatarFallback, AvatarImage } from "~/registry/ui/avatar"
import { Button } from "~/registry/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "~/registry/ui/card"
import { BarChart } from "~/registry/ui/charts"
import { Col, Grid } from "~/registry/ui/grid"
import { Input } from "~/registry/ui/input"
import { Separator } from "~/registry/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/registry/ui/tabs"

export function Dashboard() {
  return (
    <Card>
      <div class="flex h-16 items-center px-4">
        <nav class="space-x4 mx-6 flex items-center lg:space-x-6">
          <a href="#" class="hover:text-primary text-sm font-medium transition-colors">
            Overview
          </a>
          <a href="#" class="hover:text-primary text-sm transition-colors">
            Customers
          </a>
          <a href="#" class="hover:text-primary text-sm transition-colors">
            Products
          </a>
          <a href="#" class="hover:text-primary text-sm transition-colors">
            Settings
          </a>
        </nav>
        <div class="ml-auto flex items-center space-x-4">
          <Input placeholder="Search..." />
          <Avatar>
            <AvatarImage src="https://github.com/sek-consulting.png" />
            <AvatarFallback>EK</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <Separator />
      <div class="flex-1 space-y-4 p-8 pt-6">
        <div class="flex items-center justify-between space-y-2">
          <h2 class="text-3xl font-bold tracking-tight">Dashboard</h2>
          <Button>Download</Button>
        </div>
        <Tabs defaultValue="overview" class="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics" disabled>
              Analytics
            </TabsTrigger>
            <TabsTrigger value="reports" disabled>
              Reports
            </TabsTrigger>
            <TabsTrigger value="notifications" disabled>
              Notifications
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview" class="space-y-4">
            <Grid cols={2} colsLg={3} class="gap-4">
              <Card>
                <CardHeader class="pb-1">
                  <CardTitle class="text-card-foreground/70 text-sm font-normal">Sales</CardTitle>
                </CardHeader>
                <CardContent class="text-card-foreground text-3xl font-semibold">
                  $ 23,456
                </CardContent>
              </Card>
              <Card>
                <CardHeader class="pb-1">
                  <CardTitle class="text-card-foreground/70 text-sm font-normal">Profit</CardTitle>
                </CardHeader>
                <CardContent class="text-card-foreground text-3xl font-semibold">
                  $13,123
                </CardContent>
              </Card>
              <Card class="hidden lg:block">
                <CardHeader class="pb-1">
                  <CardTitle class="text-card-foreground/70 text-sm font-normal">
                    Customers
                  </CardTitle>
                </CardHeader>
                <CardContent class="text-card-foreground text-3xl font-semibold">456</CardContent>
              </Card>
              <Col span={2} spanLg={3}>
                <Card>
                  <CardHeader>
                    <CardTitle>Sales</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <BarChart
                      class="h-80 lg:h-96"
                      data={{
                        labels: [
                          "Jan",
                          "Feb",
                          "Mar",
                          "Apr",
                          "May",
                          "Jun",
                          "Jul",
                          "Aug",
                          "Sep",
                          "Oct",
                          "Nov",
                          "Dec"
                        ],
                        datasets: [
                          {
                            label: "Profit",
                            data: [
                              4400, 5200, 4300, 4500, 4000, 2000, 5000, 2200, 1500, 4800, 3500, 4000
                            ]
                          }
                        ]
                      }}
                    />
                  </CardContent>
                </Card>
              </Col>
            </Grid>
          </TabsContent>
        </Tabs>
      </div>
    </Card>
  )
}
