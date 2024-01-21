import React from 'react'
import Hero from '../componentrs/hero/Hero'
import Popular from '../componentrs/popular/Popular'
import Offer from '../componentrs/offer/Offer'
import Newcollection from '../componentrs/Newcollecton/Newcollection'
import Newslatter from '../componentrs/Newslatter/Newslatter'

export default function shop() {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offer/>
      <Newcollection/>
      <Newslatter/>
    </div>
  )
}
