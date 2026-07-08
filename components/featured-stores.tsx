const stores = [
  { name: 'AURA', category: 'אופנה' },
  { name: 'BREW', category: 'בית קפה' },
  { name: 'NOVA', category: 'הנעלה' },
  { name: 'LUMEN', category: 'תכשיטים' },
  { name: 'FRESH', category: 'סופרמרקט' },
  { name: 'PIXEL', category: 'אלקטרוניקה' },
  { name: 'BLOOM', category: 'קוסמטיקה' },
  { name: 'TERRA', category: 'בית ועיצוב' },
]

export function FeaturedStores() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between">
        <div className="text-right">
          <span className="text-sm font-bold text-primary">המותגים שלנו</span>
          <h2 className="mt-1 text-3xl font-extrabold text-foreground">
            חנויות מובילות
          </h2>
        </div>
        <span className="text-sm font-semibold text-primary">לכל החנויות</span>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {stores.map((store) => (
          <div
            key={store.name}
            className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-border/60 bg-card px-6 py-10 text-center shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
          >
            <span className="text-2xl font-extrabold tracking-tight text-primary">
              {store.name}
            </span>
            <span className="text-xs font-medium text-muted-foreground">
              {store.category}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
