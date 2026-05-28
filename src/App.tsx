import Hero from './components/Hero'
import AuthorCard from './components/AuthorCard'
import FeaturedBook from './components/FeaturedBook'
import FeaturedDigital from './components/FeaturedDigital'
import MoreToCome from './components/MoreToCome'
import Footer from './components/Footer'

function App() {
  return (
    <main className="min-h-screen">
      <Hero />
      <div className="max-w-5xl mx-auto px-6 py-20 space-y-32">
        <AuthorCard />
        <FeaturedBook />
        <FeaturedDigital />
        <MoreToCome />
      </div>
      <Footer />
    </main>
  )
}

export default App
