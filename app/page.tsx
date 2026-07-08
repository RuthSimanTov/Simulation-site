import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { PromoCards } from '@/components/promo-cards'
import { UpcomingEvents } from '@/components/upcoming-events'
import { FeaturedStores } from '@/components/featured-stores'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <PromoCards />
      <UpcomingEvents />
      <FeaturedStores />
      <SiteFooter />
    </main>
  )
}
