'use client'

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Pie,
  PieChart,
  Cell,
} from 'recharts'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart'

/* ---------------- Website views over time ---------------- */

const viewsData = [
  { month: 'ינו', views: 18200, visitors: 11800 },
  { month: 'פבר', views: 21400, visitors: 13500 },
  { month: 'מרץ', views: 25100, visitors: 15900 },
  { month: 'אפר', views: 23800, visitors: 15200 },
  { month: 'מאי', views: 29600, visitors: 18700 },
  { month: 'יוני', views: 34200, visitors: 21500 },
  { month: 'יולי', views: 38900, visitors: 24800 },
  { month: 'אוג', views: 42100, visitors: 27300 },
]

const viewsConfig = {
  views: { label: 'צפיות', color: 'var(--chart-1)' },
  visitors: { label: 'מבקרים', color: 'var(--chart-2)' },
} satisfies ChartConfig

export function ViewsChart() {
  return (
    <ChartContainer config={viewsConfig} className="h-[280px] w-full">
      <AreaChart data={viewsData} margin={{ left: 4, right: 4, top: 8 }}>
        <defs>
          <linearGradient id="fillViews" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="var(--color-views)" stopOpacity={0.7} />
            <stop offset="95%" stopColor="var(--color-views)" stopOpacity={0.05} />
          </linearGradient>
          <linearGradient id="fillVisitors" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="var(--color-visitors)" stopOpacity={0.7} />
            <stop offset="95%" stopColor="var(--color-visitors)" stopOpacity={0.05} />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          reversed
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          width={44}
          tickFormatter={(v) => `${v / 1000}k`}
          orientation="right"
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Area
          dataKey="visitors"
          type="natural"
          fill="url(#fillVisitors)"
          stroke="var(--color-visitors)"
          strokeWidth={2}
          stackId="a"
        />
        <Area
          dataKey="views"
          type="natural"
          fill="url(#fillViews)"
          stroke="var(--color-views)"
          strokeWidth={2}
          stackId="b"
        />
      </AreaChart>
    </ChartContainer>
  )
}

/* ---------------- Most popular stores (horizontal bars) ---------------- */

const storesData = [
  { store: 'זארה', visits: 8420 },
  { store: 'סופרמרקט', visits: 7150 },
  { store: 'קסטרו', visits: 5980 },
  { store: 'אלקטרוניקה', visits: 5240 },
  { store: 'ארומה', visits: 4610 },
  { store: 'ספורט', visits: 3890 },
]

const storesConfig = {
  visits: { label: 'כניסות', color: 'var(--chart-1)' },
} satisfies ChartConfig

export function StoresChart() {
  return (
    <ChartContainer config={storesConfig} className="h-[280px] w-full">
      <BarChart
        data={storesData}
        layout="vertical"
        margin={{ left: 4, right: 16 }}
      >
        <CartesianGrid horizontal={false} strokeDasharray="3 3" />
        <XAxis type="number" hide />
        <YAxis
          dataKey="store"
          type="category"
          tickLine={false}
          axisLine={false}
          width={80}
          orientation="right"
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="visits" fill="var(--color-visits)" radius={6} />
      </BarChart>
    </ChartContainer>
  )
}

/* ---------------- Traffic sources (donut) ---------------- */

const sourceData = [
  { source: 'חיפוש אורגני', value: 42, fill: 'var(--chart-1)' },
  { source: 'רשתות חברתיות', value: 28, fill: 'var(--chart-2)' },
  { source: 'ישיר', value: 18, fill: 'var(--chart-3)' },
  { source: 'הפניות', value: 12, fill: 'var(--chart-4)' },
]

const sourceConfig = {
  value: { label: 'אחוז' },
  'חיפוש אורגני': { label: 'חיפוש אורגני', color: 'var(--chart-1)' },
  'רשתות חברתיות': { label: 'רשתות חברתיות', color: 'var(--chart-2)' },
  ישיר: { label: 'ישיר', color: 'var(--chart-3)' },
  הפניות: { label: 'הפניות', color: 'var(--chart-4)' },
} satisfies ChartConfig

export function SourceChart() {
  return (
    <ChartContainer
      config={sourceConfig}
      className="mx-auto aspect-square h-[240px]"
    >
      <PieChart>
        <ChartTooltip content={<ChartTooltipContent nameKey="source" />} />
        <Pie
          data={sourceData}
          dataKey="value"
          nameKey="source"
          innerRadius={58}
          outerRadius={90}
          paddingAngle={2}
        >
          {sourceData.map((entry) => (
            <Cell key={entry.source} fill={entry.fill} />
          ))}
        </Pie>
      </PieChart>
    </ChartContainer>
  )
}
