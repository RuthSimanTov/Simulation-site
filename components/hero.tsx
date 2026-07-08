import Image from 'next/image'
import { Search } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[560px] w-full">
        <Image
          src="/hero-mall.png"
          alt="פנים מרכז הקניות השדרה"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-primary/85 via-primary/55 to-primary/10" />

        <div className="absolute inset-0">
          <div className="mx-auto flex h-full max-w-7xl flex-col justify-center px-6">
            <div className="max-w-xl text-right text-primary-foreground">
              <span className="inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-bold text-accent-foreground">
                המרכז של בית שמש
              </span>
              <h1 className="mt-5 text-balance text-5xl font-extrabold leading-tight md:text-6xl">
                חוויית קנייה בשדרה
              </h1>
              <p className="mt-4 text-pretty text-lg text-primary-foreground/85">
                אופנה, קולינריה ובילוי — הכל תחת קורת גג אחת.
              </p>

              <div className="mt-8 flex items-center gap-2 rounded-2xl bg-background p-2 shadow-xl">
                <div className="flex flex-1 items-center gap-2 px-3">
                  <Search className="h-5 w-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="חיפוש חנות, מותג או מסעדה..."
                    className="w-full bg-transparent py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground"
                  />
                </div>
                <button className="rounded-xl bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90">
                  חיפוש
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
