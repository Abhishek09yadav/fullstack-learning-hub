import React from 'react'
import Hero from './Hero'
import Footer from './Footer'
import OfferBundle from './OfferBundle'
import HuluLiveTvPromo from './HuluLiveTvPromo'
import Shows from './Shows'

const HuluHomePage = () => {
  return (
    <div>
      <Hero/>
      <OfferBundle/>
      <Shows/>
      <HuluLiveTvPromo/>
      <Footer/>
    </div>
  )
}

export default HuluHomePage
