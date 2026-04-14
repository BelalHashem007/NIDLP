import React from 'react'
import Hero from './components/Hero/Hero'
import CouncilVision from './components/CouncilVsion/CouncilVision'
import CouncilMessage from './components/CouncilMessage/CouncilMessage'
import CouncilGoals from './components/CouncilGoals/CouncilGoals'
import CouncilGovernance from './components/CouncilGovernance/CouncilGovernance'
import CouncilNews from './components/CouncilNews/CouncilNews'
import CommonQuestions from './components/CommonQuestions/CommonQuestions'
import Footer from './components/Footer/Footer'

function LandingPage() {
  return (
    <main className='w-full overflow-hidden'>
      <Hero />
      <CouncilVision />
      <CouncilMessage />
      <CouncilGoals />
      <CouncilGovernance />
      <CouncilNews />
      <CommonQuestions />
      <Footer />
    </main>
  )
}

export default LandingPage