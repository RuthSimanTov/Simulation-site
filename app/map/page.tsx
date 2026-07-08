import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { MapPage } from '@/components/map-page'

export default function Map() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <MapPage />
      <SiteFooter />
    </main>
  )
}
