import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'

const promos = [
  {
    title: 'שבוע האופנה',
    subtitle: 'עד 50% הנחה במותגים נבחרים',
    image: '/promo-fashion.png',
  },
  {
    title: 'טעימים בשדרה',
    subtitle: 'מסעדות ובתי קפה חדשים',
    image: '/promo-dining.png',
  },
  {
    title: 'כיף למשפחה',
    subtitle: 'פעילויות ובילוי לכל הגילאים',
    image: '/promo-kids.png',
  },
]

export function PromoCards() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-6 md:grid-cols-3">
        {promos.map((promo) => (
          <article
            key={promo.title}
            className="group overflow-hidden rounded-3xl border border-border/60 bg-card shadow-sm transition-shadow hover:shadow-lg"
          >
            <div className="relative h-52 w-full overflow-hidden">
              <Image
                src={promo.image || '/placeholder.svg'}
                alt={promo.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-foreground">{promo.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                {promo.subtitle}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                לפרטים
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
