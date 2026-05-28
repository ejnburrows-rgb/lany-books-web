export default function ProductCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-ink/5 flex flex-col md:flex-row gap-12">
      {children}
    </div>
  )
}
