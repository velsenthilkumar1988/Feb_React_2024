import React from 'react'
import Accordion from '../../Components/Accordion'
import RandomColor from '../../Components/Random-Color'
import StarRating from '../../Components/Star-Rating'
import ImageSlider from '../../Components/Image-Slider'


const AboutPage = () => {
  return (
    <div>
      <Accordion/>
      <RandomColor/>
      <StarRating noOfStars={10}/>
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={'10'}/> */}
      
    </div>
  )
}

export default AboutPage
