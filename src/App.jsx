import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import DataAnalysis from './components/DataAnalysis'
import MLOps from './components/MLOps'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-primary text-white">
      <Navbar />
      <Hero />
      <Projects />
      <DataAnalysis />
      <MLOps />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
