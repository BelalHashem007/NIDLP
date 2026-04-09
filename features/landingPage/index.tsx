import React from 'react'
import Hero from './components/Hero Section (about council)/Hero'
import CouncilVision from './components/council vision/CouncilVision'
import CouncilMessage from './components/council message/CouncilMessage'
import CouncilGoals from './components/council goals/CouncilGoals'


function LandingPage() {
  return (
    <>
      <Hero />
      <CouncilVision />
      <CouncilMessage />
      <CouncilGoals />
    </>
  )
}

export default LandingPage