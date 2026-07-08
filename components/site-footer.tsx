import Image from 'next/image'

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 py-14 md:flex-row md:justify-between md:gap-4">
        <div className="flex items-center gap-3">
          <div className="relative h-11 w-11 overflow-hidden rounded-xl bg-background/10">
            <Image
              src="/hashdera-logo.png"
              alt="לוגו השדרה"
              fill
              className="object-cover"
            />
          </div>
          <div className="leading-tight">
            <p className="text-lg font-extrabold">השדרה</p>
            <p className="text-xs text-primary-foreground/70">
              המרכז של בית שמש
            </p>
          </div>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-sm text-primary-foreground/80">
          <span>חנויות</span>
          <span>אירועים</span>
          <span>מסעדות</span>
          <span>שעות פעילות</span>
          <span>צור קשר</span>
        </nav>

        <p className="text-xs text-primary-foreground/60">
          © 2026 השדרה · בית שמש
        </p>
      </div>
    </footer>
  )
}
