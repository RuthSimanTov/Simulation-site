import Image from 'next/image'
import { CalendarDays, Clock, MapPin, ArrowLeft } from 'lucide-react'

type EventItem = {
  title: string
  date: string
  category: string
  image: string
}

const events: EventItem[] = [
  {
    title: 'תצוגת אופנה חורף',
    date: '12 בדצמבר',
    category: 'אופנה',
    image: '/event-fashion.png',
  },
  {
    title: 'סדנת יצירה לילדים',
    date: '15 בדצמבר',
    category: 'משפחה',
    image: '/event-kids.png',
  },
  {
    title: 'שף אורח בשדרה',
    date: '18 בדצמבר',
    category: 'קולינריה',
    image: '/event-cooking.png',
  },
  {
    title: 'תערוכת אמנות מקומית',
    date: '22 בדצמבר',
    category: 'תרבות',
    image: '/event-art.png',
  },
  {
    title: 'בוקר יוגה בגג',
    date: '26 בדצמבר',
    category: 'בריאות',
    image: '/event-fitness.png',
  },
  {
    title: 'הופעה אקוסטית חיה',
    date: '30 בדצמבר',
    category: 'מוזיקה',
    image: '/event-music.png',
  },
]

export function EventsPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-14">
      {/* Title */}
      <div className="mb-10 max-w-2xl">
        <p className="mb-2 text-sm font-semibold text-accent-foreground">
          לוח האירועים
        </p>
        <h1 className="text-balance text-4xl font-extrabold tracking-tight text-foreground md:text-6xl">
          אירועים בשדרה
        </h1>
        <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
          מופעים, סדנאות, תצוגות וחוויות למשפחה כולה. בואו לגלות מה קורה החודש
          במרכז של בית שמש.
        </p>
      </div>

      {/* Featured event banner */}
      <div className="mb-14 overflow-hidden rounded-3xl border border-border bg-card shadow-md">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative h-64 w-full lg:h-auto">
            <Image
              src="/event-featured.png"
              alt="פסטיבל הקיץ של השדרה"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col justify-center gap-5 p-8 lg:p-12">
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
              אירוע מוביל
            </span>
            <h2 className="text-balance text-3xl font-extrabold tracking-tight text-foreground lg:text-4xl">
              פסטיבל הקיץ הגדול
            </h2>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              שלושה ימים של מוזיקה חיה, אוכל רחוב, מופעי רחוב והפתעות לכל המשפחה
              לאורך כל שדרת החנויות.
            </p>
            <div className="flex flex-wrap items-center gap-5 text-sm text-foreground">
              <span className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-primary" />5–7 בדצמבר
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                18:00–23:00
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                כיכר המרכזית
              </span>
            </div>
            <span className="mt-1 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm">
              להזמנת מקום
              <ArrowLeft className="h-4 w-4" />
            </span>
          </div>
        </div>
      </div>

      {/* Upcoming events */}
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-2xl font-bold text-foreground">אירועים קרובים</h2>
        <span className="hidden text-sm font-medium text-primary sm:inline">
          כל האירועים
        </span>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <article
            key={event.title}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
          >
            {/* Event image */}
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                fill
                className="object-cover"
              />
              <span className="absolute right-3 top-3 rounded-full bg-background/90 px-3 py-1 text-[11px] font-semibold text-accent-foreground backdrop-blur">
                {event.category}
              </span>
            </div>

            {/* Card body */}
            <div className="flex flex-1 flex-col p-5">
              <span className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
                <CalendarDays className="h-4 w-4 text-primary" />
                {event.date}
              </span>
              <h3 className="mt-2 text-balance text-lg font-bold text-foreground">
                {event.title}
              </h3>
              <span className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full border border-primary px-4 py-2 text-xs font-semibold text-primary">
                פרטים נוספים
                <ArrowLeft className="h-3.5 w-3.5" />
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
