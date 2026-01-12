import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Process from './components/Process.jsx'
import WhyChoose from './components/WhyChoose.jsx'
import Certs from './components/Certs.jsx'
import Pricing from './components/Pricing.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <WhyChoose />
        <Certs />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
