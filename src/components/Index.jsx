

import About from './about'
import CoachingApproach from './CoachingApproach'
import Expertise from './Expertise'
import FinalCTA from './FinalCTA'
import Footer from './footer'
import Hero from './hero'
import InsightsTeaser from './InsightsTeaser'
import InternationalExperience from './InternationalExperience'
import Navbar from './navbar'
import Testimonials from './Testimonials'
import TrustCredibility from './TrustCredibility'
import WhoIWorkWith from './WhoIWorkWith'
import WhyCoaching from './WhyCoaching'

function Index() {
  

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

export default Index
