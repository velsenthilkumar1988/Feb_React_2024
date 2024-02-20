import React from 'react'
import Accordion from '../../Components/Accordion'
import RandomColor from '../../Components/Random-Color'
import StarRating from '../../Components/Star-Rating'
import LoadMoreButton from '../../Components/Load-More-Data'
import TreeView from '../../Components/Tree-View'
import sideMenu from '../../Components/Tree-View/data'


const AboutPage = () => {
  return (
    <div>
      {/* {https://www.youtube.com/watch?v=l3A9OcUd_Us&t=5065s} */}
      <Accordion/>
      <RandomColor/>
      <StarRating noOfStars={10}/>
      <LoadMoreButton/>
      <TreeView menus={sideMenu}/>
    </div>
  )
}

export default AboutPage
