import React from 'react'
import Accordion from '../../Components/Accordion'
import RandomColor from '../../Components/Random-Color'
import StarRating from '../../Components/Star-Rating'

const AboutPage = () => {
  return (
    <div>
      <Accordion/>
      <RandomColor/>
      <StarRating noOfStars={10}/>
    </div>
  )
}

export default AboutPage
