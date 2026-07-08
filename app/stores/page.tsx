import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { StoresPage } from '@/components/stores-page'

export default function Stores() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <StoresPage />
      <SiteFooter />
    </main>
  )
}
