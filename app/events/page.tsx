import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { EventsPage } from '@/components/events-page'

export default function Events() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <EventsPage />
      <SiteFooter />
    </main>
  )
}
