import { Search, MapPin, Store, Utensils, ShoppingBag, Coffee, Shirt, Baby, Armchair, Dumbbell } from 'lucide-react'

type Category = {
  label: string
  icon: React.ComponentType<{ className?: string }>
  color: string // tailwind bg class for legend swatch
  active?: boolean
}

const categories: Category[] = [
  { label: 'הכל', icon: Store, color: 'bg-primary', active: true },
  { label: 'אופנה', icon: Shirt, color: 'bg-primary/70' },
  { label: 'מסעדות', icon: Utensils, color: 'bg-accent' },
  { label: 'בתי קפה', icon: Coffee, color: 'bg-accent/70' },
  { label: 'ילדים', icon: Baby, color: 'bg-primary/40' },
  { label: 'בית ועיצוב', icon: Armchair, color: 'bg-foreground/60' },
  { label: 'ספורט', icon: Dumbbell, color: 'bg-accent-foreground/70' },
  { label: 'קניות', icon: ShoppingBag, color: 'bg-primary/55' },
]

// A schematic floor block. `tone` maps to a themed color.
type Block = {
  name: string
  tone: 'fashion' | 'food' | 'cafe' | 'kids' | 'home' | 'sport' | 'shop' | 'anchor' | 'corridor'
  span: string // grid column/row span classes
}

const toneClasses: Record<Block['tone'], string> = {
  fashion: 'bg-primary/70 text-primary-foreground',
  food: 'bg-accent text-accent-foreground',
  cafe: 'bg-accent/60 text-accent-foreground',
  kids: 'bg-primary/35 text-primary',
  home: 'bg-foreground/55 text-background',
  sport: 'bg-accent-foreground/70 text-background',
  shop: 'bg-primary/55 text-primary-foreground',
  anchor: 'bg-primary text-primary-foreground',
  corridor: 'bg-muted text-muted-foreground',
}

const legend: { label: string; tone: Block['tone'] }[] = [
  { label: 'אופנה', tone: 'fashion' },
  { label: 'מסעדות', tone: 'food' },
  { label: 'בתי קפה', tone: 'cafe' },
  { label: 'ילדים', tone: 'kids' },
  { label: 'בית ועיצוב', tone: 'home' },
  { label: 'ספורט', tone: 'sport' },
  { label: 'עוגן', tone: 'anchor' },
]

export function MapPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-14">
      {/* Title */}
      <div className="mb-10 max-w-2xl">
        <p className="mb-2 text-sm font-semibold text-accent-foreground">
          ניווט בשדרה
        </p>
        <h1 className="text-balance text-4xl font-extrabold tracking-tight text-foreground md:text-6xl">
          מפת המרכז
        </h1>
        <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
          מצאו כל חנות, מסעדה ושירות בקלות. בחרו קטגוריה או חפשו לפי שם כדי לראות
          את המיקום המדויק על גבי מפת הקומה.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
        {/* Sidebar filters */}
        <aside className="flex flex-col gap-6">
          {/* Search */}
          <div className="relative">
            <Search className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <div className="w-full rounded-full border border-border bg-card py-3 pr-12 pl-4 text-sm text-muted-foreground shadow-sm">
              חיפוש חנות או שירות...
            </div>
          </div>

          {/* Category filters */}
          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
            <h2 className="mb-4 text-sm font-bold text-foreground">קטגוריות</h2>
            <ul className="flex flex-col gap-1.5">
              {categories.map((cat) => {
                const Icon = cat.icon
                return (
                  <li key={cat.label}>
                    <div
                      className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium ${
                        cat.active
                          ? 'bg-primary text-primary-foreground shadow-sm'
                          : 'text-foreground'
                      }`}
                    >
                      <Icon
                        className={`h-4 w-4 ${
                          cat.active ? 'text-primary-foreground' : 'text-primary'
                        }`}
                      />
                      {cat.label}
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Legend */}
          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
            <h2 className="mb-4 text-sm font-bold text-foreground">מקרא</h2>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-2">
              {legend.map((item) => (
                <li key={item.label} className="flex items-center gap-2">
                  <span
                    className={`h-4 w-4 shrink-0 rounded ${toneClasses[item.tone].split(' ')[0]}`}
                  />
                  <span className="text-xs text-muted-foreground">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Floor map illustration */}
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-md md:p-8">
          {/* Floor tabs */}
          <div className="mb-6 flex items-center gap-2">
            <span className="rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground">
              קומה 1
            </span>
            <span className="rounded-full border border-border px-4 py-1.5 text-xs font-medium text-muted-foreground">
              קומה 2
            </span>
            <span className="rounded-full border border-border px-4 py-1.5 text-xs font-medium text-muted-foreground">
              חניון
            </span>
          </div>

          {/* Schematic plan */}
          <div className="rounded-2xl bg-muted/40 p-4 md:p-6">
            <div className="grid grid-cols-6 grid-rows-6 gap-3 [aspect-ratio:16/11]">
              {/* Top row anchors */}
              <Cell tone="anchor" className="col-span-2 row-span-2">
                סופרמרקט
              </Cell>
              <Cell tone="fashion" className="col-span-1 row-span-1">
                זארה
              </Cell>
              <Cell tone="fashion" className="col-span-1 row-span-1">
                קסטרו
              </Cell>
              <Cell tone="shop" className="col-span-2 row-span-2">
                חשמל ואלקטרוניקה
              </Cell>

              <Cell tone="cafe" className="col-span-1 row-span-1">
                ארומה
              </Cell>
              <Cell tone="food" className="col-span-1 row-span-1">
                בורגר
              </Cell>

              {/* Central corridor */}
              <Cell tone="corridor" className="col-span-6 row-span-1">
                שדרה מרכזית
              </Cell>

              {/* Middle row */}
              <Cell tone="kids" className="col-span-2 row-span-2">
                עולם הילדים
              </Cell>
              <Cell tone="sport" className="col-span-2 row-span-1">
                ספורט
              </Cell>
              <Cell tone="home" className="col-span-2 row-span-2">
                בית ועיצוב
              </Cell>

              <Cell tone="fashion" className="col-span-1 row-span-1">
                אופנה
              </Cell>
              <Cell tone="cafe" className="col-span-1 row-span-1">
                קפה
              </Cell>

              {/* Bottom row */}
              <Cell tone="food" className="col-span-2 row-span-1">
                חצר האוכל
              </Cell>
              <Cell tone="shop" className="col-span-2 row-span-1">
                מתנות
              </Cell>
              <Cell tone="anchor" className="col-span-2 row-span-1">
                כניסה ראשית
              </Cell>
            </div>
          </div>

          {/* You are here pin */}
          <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <MapPin className="h-3.5 w-3.5" />
            </span>
            אתם נמצאים כאן · כניסה ראשית, קומה 1
          </div>
        </div>
      </div>
    </section>
  )
}

function Cell({
  children,
  tone,
  className = '',
}: {
  children: React.ReactNode
  tone: Block['tone']
  className?: string
}) {
  return (
    <div
      className={`flex items-center justify-center rounded-xl px-2 text-center text-[11px] font-semibold leading-tight shadow-sm md:text-xs ${toneClasses[tone]} ${className}`}
    >
      {children}
    </div>
  )
}
