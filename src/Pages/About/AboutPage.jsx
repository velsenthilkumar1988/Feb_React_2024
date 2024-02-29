import React from 'react'
import Accordion from '../../Components/Accordion'
import RandomColor from '../../Components/Random-Color'
import StarRating from '../../Components/Star-Rating'
import LoadMoreButton from '../../Components/Load-More-Data'
import TreeView from '../../Components/Tree-View'
import sideMenu from '../../Components/Tree-View/data'
import QRCodeGenerator from '../../Components/QRCodeGenerator'
import LightDarkTheme from '../../Components/LightDarkTheme'
import ScrollIndicator from '../../Components/ScrollDown'
import { Tabs } from 'react-bootstrap'
import TabsComponent from '../../Components/Custom-Tabs'
import Tabtest from '../../Components/Custom-Tabs/tabstest'
import ModalTest from '../../Components/ModalPopup/ModalTest'
import GitHubProfileFinder from '../../Components/GitHubProfileFinder'
import FeatureFlagGlobalState from '../../Components/FeatureFlag/Context'
import FeatureFlags from '../../Components/FeatureFlag'


const AboutPage = () => {
  return (
    <div>
      {/* {https://www.youtube.com/watch?v=l3A9OcUd_Us&t=5065s} */}
      {/* <Accordion/>
      <RandomColor/>
      <StarRating noOfStars={10}/>
      <LoadMoreButton/>
      <TreeView menus={sideMenu}/>
      <QRCodeGenerator/>
      <LightDarkTheme/>
      <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/>
      <Tabtest/>
      <ModalTest/>
      <GitHubProfileFinder/> */}
      <FeatureFlagGlobalState>
        <FeatureFlags/>
      </FeatureFlagGlobalState>
    </div>
  )
}

export default AboutPage
