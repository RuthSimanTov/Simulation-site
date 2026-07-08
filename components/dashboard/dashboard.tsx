import Image from 'next/image'
import {
  LayoutDashboard,
  Store,
  CalendarDays,
  Map,
  Settings,
  Users,
  Eye,
  MousePointerClick,
  Clock,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  Search,
  Bell,
} from 'lucide-react'
import { ViewsChart, StoresChart, SourceChart } from './dashboard-charts'

const sourceLegend = [
  { label: 'חיפוש אורגני', value: 42, fill: 'var(--chart-1)' },
  { label: 'רשתות חברתיות', value: 28, fill: 'var(--chart-2)' },
  { label: 'ישיר', value: 18, fill: 'var(--chart-3)' },
  { label: 'הפניות', value: 12, fill: 'var(--chart-4)' },
]

const navItems = [
  { label: 'סקירה כללית', icon: LayoutDashboard, active: true },
  { label: 'חנויות', icon: Store },
  { label: 'אירועים', icon: CalendarDays },
  { label: 'מפה', icon: Map },
  { label: 'מבקרים', icon: Users },
  { label: 'הגדרות', icon: Settings },
]

const kpis = [
  {
    label: 'צפיות באתר',
    value: '253,410',
    delta: '+12.4%',
    up: true,
    icon: Eye,
    sub: 'ב-30 הימים האחרונים',
  },
  {
    label: 'מבקרים ייחודיים',
    value: '148,720',
    delta: '+8.1%',
    up: true,
    icon: Users,
    sub: 'ב-30 הימים האחרונים',
  },
  {
    label: 'קליקים על חנויות',
    value: '39,860',
    delta: '+15.7%',
    up: true,
    icon: MousePointerClick,
    sub: 'ב-30 הימים האחרונים',
  },
  {
    label: 'זמן ממוצע באתר',
    value: '3:42',
    delta: '-2.3%',
    up: false,
    icon: Clock,
    sub: 'דקות לביקור',
  },
]

const popularPages = [
  { page: 'דף הבית', path: '/', views: '84,210', share: 33 },
  { page: 'חנויות', path: '/stores', views: '61,940', share: 24 },
  { page: 'אירועים', path: '/events', views: '48,300', share: 19 },
  { page: 'מפת המרכז', path: '/map', views: '37,120', share: 15 },
  { page: 'מבצעים', path: '/promotions', views: '21,840', share: 9 },
]

const promotions = [
  { name: 'מבצע סוף עונה', store: 'זארה', clicks: '12,480', tag: 'פעיל' },
  { name: '1+1 על נעליים', store: 'ספורט פלוס', clicks: '9,310', tag: 'פעיל' },
  { name: 'קפה חינם', store: 'ארומה', clicks: '7,650', tag: 'פעיל' },
  { name: '20% על עיצוב הבית', store: 'בית ועיצוב', clicks: '5,920', tag: 'מסתיים' },
]

const usageStats = [
  { label: 'סה"כ חנויות פעילות', value: '128' },
  { label: 'אירועים החודש', value: '24' },
  { label: 'מבצעים פעילים', value: '17' },
  { label: 'שיעור המרה', value: '4.8%' },
]

export function Dashboard() {
  return (
    <div className="flex min-h-screen bg-muted/30" dir="rtl">
      {/* Sidebar */}
      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col border-l border-border bg-card lg:flex">
        <div className="flex items-center gap-3 px-6 py-5">
          <div className="relative h-10 w-8 overflow-hidden">
            <Image
              src="/hashdera-logo.png"
              alt="HASHDERA"
              fill
              className="object-contain"
            />
          </div>
          <div>
            <p className="text-sm font-extrabold leading-tight text-foreground">
              השדרה
            </p>
            <p className="text-[11px] text-muted-foreground">מרכז ניהול</p>
          </div>
        </div>

        <nav className="mt-2 flex flex-col gap-1 px-3">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.label}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium ${
                  item.active
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground'
                }`}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </div>
            )
          })}
        </nav>

        <div className="mt-auto m-3 rounded-2xl bg-primary/5 p-4">
          <p className="text-xs font-semibold text-foreground">
            דוח חודשי מוכן
          </p>
          <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
            צפו בביצועים המלאים של אוגוסט
          </p>
          <div className="mt-3 inline-flex items-center gap-1 rounded-lg bg-primary px-3 py-1.5 text-[11px] font-semibold text-primary-foreground">
            הורדת דוח
            <ArrowUpRight className="h-3 w-3" />
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Topbar */}
        <header className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-border bg-card/80 px-6 py-4 backdrop-blur">
          <div>
            <h1 className="text-xl font-extrabold text-foreground">
              סקירה כללית
            </h1>
            <p className="text-xs text-muted-foreground">
              ברוכים הבאים, ניתוח נתוני האתר של השדרה
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-xs text-muted-foreground md:flex">
              <Search className="h-4 w-4" />
              חיפוש...
            </div>
            <div className="relative flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background">
              <Bell className="h-4 w-4 text-muted-foreground" />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-accent" />
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
              נא
            </div>
          </div>
        </header>

        <main className="flex flex-col gap-6 p-6">
          {/* KPI cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {kpis.map((kpi) => {
              const Icon = kpi.icon
              return (
                <div
                  key={kpi.label}
                  className="rounded-2xl border border-border bg-card p-5 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold ${
                        kpi.up
                          ? 'bg-accent/20 text-accent-foreground'
                          : 'bg-destructive/10 text-destructive'
                      }`}
                    >
                      {kpi.up ? (
                        <TrendingUp className="h-3 w-3" />
                      ) : (
                        <TrendingDown className="h-3 w-3" />
                      )}
                      {kpi.delta}
                    </span>
                  </div>
                  <p className="mt-4 text-2xl font-extrabold text-foreground">
                    {kpi.value}
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    {kpi.label}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">{kpi.sub}</p>
                </div>
              )
            })}
          </div>

          {/* Views chart + traffic sources */}
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm xl:col-span-2">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h2 className="text-base font-bold text-foreground">
                    צפיות באתר לאורך זמן
                  </h2>
                  <p className="text-xs text-muted-foreground">
                    צפיות מול מבקרים ייחודיים
                  </p>
                </div>
                <div className="flex items-center gap-4 text-xs">
                  <span className="flex items-center gap-1.5 text-muted-foreground">
                    <span className="h-2.5 w-2.5 rounded-full bg-[var(--chart-1)]" />
                    צפיות
                  </span>
                  <span className="flex items-center gap-1.5 text-muted-foreground">
                    <span className="h-2.5 w-2.5 rounded-full bg-[var(--chart-2)]" />
                    מבקרים
                  </span>
                </div>
              </div>
              <ViewsChart />
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-base font-bold text-foreground">
                מקורות תנועה
              </h2>
              <p className="text-xs text-muted-foreground">מאיפה מגיעים המבקרים</p>
              <SourceChart />
              <ul className="mt-4 flex flex-col gap-2">
                {sourceLegend.map((s) => (
                  <li
                    key={s.label}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ backgroundColor: s.fill }}
                      />
                      {s.label}
                    </span>
                    <span className="font-semibold text-foreground">
                      {s.value}%
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Popular stores + popular pages */}
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm xl:col-span-2">
              <h2 className="text-base font-bold text-foreground">
                החנויות הפופולריות ביותר
              </h2>
              <p className="text-xs text-muted-foreground">
                לפי מספר כניסות לדף החנות
              </p>
              <div className="mt-4">
                <StoresChart />
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-base font-bold text-foreground">
                דפים פופולריים
              </h2>
              <p className="text-xs text-muted-foreground">התפלגות צפיות בדפים</p>
              <ul className="mt-4 flex flex-col gap-4">
                {popularPages.map((p) => (
                  <li key={p.path}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-foreground">
                        {p.page}
                      </span>
                      <span className="text-muted-foreground">{p.views}</span>
                    </div>
                    <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-primary"
                        style={{ width: `${p.share}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Top promotions + usage statistics */}
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm xl:col-span-2">
              <h2 className="text-base font-bold text-foreground">
                המבצעים המובילים
              </h2>
              <p className="text-xs text-muted-foreground">
                לפי מספר הקליקים החודש
              </p>
              <div className="mt-4 overflow-hidden rounded-xl border border-border">
                <table className="w-full text-right text-sm">
                  <thead className="bg-muted/50 text-xs text-muted-foreground">
                    <tr>
                      <th className="px-4 py-3 font-semibold">מבצע</th>
                      <th className="px-4 py-3 font-semibold">חנות</th>
                      <th className="px-4 py-3 font-semibold">קליקים</th>
                      <th className="px-4 py-3 font-semibold">סטטוס</th>
                    </tr>
                  </thead>
                  <tbody>
                    {promotions.map((promo, i) => (
                      <tr
                        key={promo.name}
                        className={i % 2 ? 'bg-muted/20' : 'bg-card'}
                      >
                        <td className="px-4 py-3 font-medium text-foreground">
                          {promo.name}
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">
                          {promo.store}
                        </td>
                        <td className="px-4 py-3 font-semibold text-foreground">
                          {promo.clicks}
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className={`inline-block rounded-full px-2.5 py-1 text-xs font-semibold ${
                              promo.tag === 'פעיל'
                                ? 'bg-accent/20 text-accent-foreground'
                                : 'bg-muted text-muted-foreground'
                            }`}
                          >
                            {promo.tag}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-base font-bold text-foreground">
                סטטיסטיקות שימוש
              </h2>
              <p className="text-xs text-muted-foreground">נתונים כלליים</p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {usageStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl bg-muted/40 p-4 text-center"
                  >
                    <p className="text-2xl font-extrabold text-primary">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[11px] leading-tight text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
