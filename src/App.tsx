import Navigation from './components/Navigation'
import Hero from './components/Hero'
import FeaturedProducts from './components/FeaturedProducts'
import Categories from './components/Categories'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <FeaturedProducts />
        <Categories />
        <About />
      </main>
      <Footer />
    </div>
  )
}

export default App
