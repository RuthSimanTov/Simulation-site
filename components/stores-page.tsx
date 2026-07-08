import Image from 'next/image'
import { Search, SlidersHorizontal, MapPin } from 'lucide-react'

const categories = [
  'הכל',
  'אופנה',
  'אלקטרוניקה',
  'יופי וטיפוח',
  'בית ועיצוב',
  'ספורט',
  'קפה ואוכל',
]

type Store = {
  name: string
  category: string
  initials: string
  image: string
  floor: string
}

const stores: Store[] = [
  {
    name: 'אורבן סטייל',
    category: 'אופנה',
    initials: 'US',
    image: '/store-fashion.png',
    floor: 'קומה 1',
  },
  {
    name: 'טק פוינט',
    category: 'אלקטרוניקה',
    initials: 'TP',
    image: '/store-electronics.png',
    floor: 'קומה 2',
  },
  {
    name: 'גלואו ביוטי',
    category: 'יופי וטיפוח',
    initials: 'GB',
    image: '/store-beauty.png',
    floor: 'קומה 1',
  },
  {
    name: 'בית ועוד',
    category: 'בית ועיצוב',
    initials: 'ב+',
    image: '/store-home.png',
    floor: 'קומה 2',
  },
  {
    name: 'אקטיב פרו',
    category: 'ספורט',
    initials: 'AP',
    image: '/store-sports.png',
    floor: 'קומה 1',
  },
  {
    name: 'קפה שדרה',
    category: 'קפה ואוכל',
    initials: 'קש',
    image: '/store-cafe.png',
    floor: 'קומת קרקע',
  },
  {
    name: 'מודה בלה',
    category: 'אופנה',
    initials: 'MB',
    image: '/promo-fashion.png',
    floor: 'קומה 1',
  },
  {
    name: 'מיני קידס',
    category: 'בית ועיצוב',
    initials: 'MK',
    image: '/promo-kids.png',
    floor: 'קומה 2',
  },
  {
    name: 'טעמים',
    category: 'קפה ואוכל',
    initials: 'טע',
    image: '/promo-dining.png',
    floor: 'קומת קרקע',
  },
]

export function StoresPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-14">
      {/* Title */}
      <div className="mb-8 max-w-2xl">
        <p className="mb-2 text-sm font-semibold text-accent-foreground">
          מדריך החנויות
        </p>
        <h1 className="text-balance text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
          כל החנויות בשדרה
        </h1>
        <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
          עשרות מותגים, אופנה, טכנולוגיה, יופי ומסעדות במקום אחד. גלו את החנות
          הבאה שלכם.
        </p>
      </div>

      {/* Search + filter row */}
      <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center">
        <div className="flex flex-1 items-center gap-3 rounded-full border border-border bg-card px-5 py-3 shadow-sm">
          <Search className="h-5 w-5 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            חיפוש חנות, מותג או קטגוריה...
          </span>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium text-foreground shadow-sm">
          <SlidersHorizontal className="h-4 w-4 text-primary" />
          סינון
        </div>
      </div>

      {/* Category filters */}
      <div className="mb-10 flex flex-wrap gap-2.5">
        {categories.map((cat, i) => (
          <span
            key={cat}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              i === 0
                ? 'bg-primary text-primary-foreground'
                : 'border border-border bg-card text-muted-foreground'
            }`}
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Store grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stores.map((store) => (
          <article
            key={store.name}
            className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
          >
            {/* Store image */}
            <div className="relative h-44 w-full overflow-hidden">
              <Image
                src={store.image || "/placeholder.svg"}
                alt={store.name}
                fill
                className="object-cover"
              />
              <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-background/90 px-3 py-1 text-[11px] font-medium text-foreground backdrop-blur">
                <MapPin className="h-3 w-3 text-primary" />
                {store.floor}
              </span>
            </div>

            {/* Card body */}
            <div className="flex items-center gap-4 p-5">
              {/* Logo placeholder */}
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-border bg-secondary text-base font-bold text-primary">
                {store.initials}
              </div>
              <div className="min-w-0">
                <span className="inline-block rounded-md bg-accent/40 px-2 py-0.5 text-[11px] font-semibold text-accent-foreground">
                  {store.category}
                </span>
                <h2 className="mt-1.5 truncate text-lg font-bold text-foreground">
                  {store.name}
                </h2>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
