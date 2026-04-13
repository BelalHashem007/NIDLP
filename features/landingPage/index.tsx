import React from 'react'
import Hero from './components/Hero/Hero'
// import CouncilVision from './components/CouncilVision/CouncilVision'
import CouncilMessage from './components/CouncilMessage/CouncilMessage'
import CouncilGoals from './components/CouncilGoals/CouncilGoals'
import CouncilGovernment from './components/CouncilGovernment/CouncilGovernment'
import CouncilNews from './components/CouncilNews/CouncilNews'
import CommonQuestions from './components/CommonQuestions/CommonQuestions'
import Footer from './components/Footer/Footer'

function LandingPage() {
  return (
    <>
      <Hero />
      {/* <CouncilVision /> */}
      <CouncilMessage />
      <CouncilGoals />
      <CouncilGovernment />
      <CouncilNews />
      <CommonQuestions />
      <Footer />
    </>
  )
}

export default LandingPage