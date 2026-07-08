'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MapPin, Clock } from 'lucide-react'

const navItems: { label: string; href: string }[] = [
  { label: 'בית', href: '/' },
  { label: 'חנויות', href: '/stores' },
  { label: 'אירועים', href: '/events' },
  { label: 'מפה', href: '/map' },
  { label: 'מסעדות', href: '#' },
  { label: 'מבצעים', href: '#' },
  { label: 'צור קשר', href: '#' },
]

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-6">
        <div className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-xl">
            <Image
              src="/hashdera-logo.png"
              alt="לוגו השדרה"
              fill
              className="object-cover"
            />
          </div>
          <div className="leading-tight">
            <p className="text-lg font-extrabold text-primary">השדרה</p>
            <p className="text-[11px] font-medium tracking-wide text-muted-foreground">
              המרכז של בית שמש
            </p>
          </div>
        </div>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => {
            const isActive = item.href !== '#' && pathname === item.href
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-5 text-xs font-medium text-muted-foreground md:flex">
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-accent-foreground" />
            פתוח · 09:00–22:00
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-accent-foreground" />
            בית שמש
          </span>
        </div>
      </div>
    </header>
  )
}
