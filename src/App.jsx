

import './App.css'
import About from './components/about'
import CoachingApproach from './components/CoachingApproach'
import Expertise from './components/Expertise'
import FinalCTA from './components/FinalCTA'
import Footer from './components/footer'
import Hero from './components/hero'
import InsightsTeaser from './components/InsightsTeaser'
import InternationalExperience from './components/InternationalExperience'
import Navbar from './components/navbar'
import Testimonials from './components/Testimonials'
import TrustCredibility from './components/TrustCredibility'
import WhoIWorkWith from './components/WhoIWorkWith'
import WhyCoaching from './components/WhyCoaching'

function App() {
  

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <WhoIWorkWith />
      <CoachingApproach />
      <WhyCoaching />
      <InternationalExperience />
      <TrustCredibility />
      <Testimonials />
      <InsightsTeaser />
      <FinalCTA />
      <Footer />
    </>
  )
}

export default App
