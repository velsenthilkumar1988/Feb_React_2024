import React from 'react'
import Accordion from '../../Components/Accordion'
import RandomColor from '../../Components/Random-Color'
import StarRating from '../../Components/Star-Rating'
// import ImageSlider from '../../Components/Image-Slider'
import LoadMoreButton from '../../Components/Load-More-Data'


const AboutPage = () => {
  return (
    <div>
      {/* {https://www.youtube.com/watch?v=l3A9OcUd_Us&t=5065s} */}
      <Accordion/>
      <RandomColor/>
      <StarRating noOfStars={10}/>
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={'10'}/> */}
      <LoadMoreButton/>
    </div>
  )
}

export default AboutPage
