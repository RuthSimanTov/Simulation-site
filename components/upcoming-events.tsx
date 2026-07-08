import Image from 'next/image'

const events = [
  {
    date: '18 יולי',
    title: 'ערב מוזיקה חיה',
    time: '20:00 · כיכר השדרה',
    image: '/event-music.png',
  },
  {
    date: '25 יולי',
    title: 'שוק אמנים ומעצבים',
    time: '10:00 · קומת הכניסה',
    image: '/event-market.png',
  },
]

export function UpcomingEvents() {
  return (
    <section className="bg-secondary/50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-right">
          <span className="text-sm font-bold text-primary">מה קורה בשדרה</span>
          <h2 className="mt-1 text-3xl font-extrabold text-foreground">
            אירועים קרובים
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {events.map((event) => (
            <article
              key={event.title}
              className="group flex overflow-hidden rounded-3xl border border-border/60 bg-card shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative h-44 w-40 shrink-0 overflow-hidden">
                <Image
                  src={event.image || '/placeholder.svg'}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center p-6">
                <span className="inline-block w-fit rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                  {event.date}
                </span>
                <h3 className="mt-3 text-xl font-bold text-foreground">
                  {event.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {event.time}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
