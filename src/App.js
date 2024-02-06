
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/NavbarPage';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Homepage from "./Pages/Home/HomePage";
import AboutPage from './Pages/About/AboutPage';
import ServicePage from './Pages/Services/ServicePage';
import ContactPage from './Pages/Contact/ContactPage';
import ClassBasedCom from './Pages/ReactBeginers/ClassBasedCom';
import FunctionalBAsedCom from './Pages/ReactBeginers/FunctionalBasedCom';

function App() {
  return (
      
      <>
      <Router>
        <Navbar/>
          <Routes>
              <Route exact path='/' Component={Homepage}/>
              <Route exact path='/about' Component={AboutPage}/>
              <Route exact path='/services' Component={ServicePage}/>
              <Route exact path='/contact' Component={ContactPage}/>
              <Route exact path='/classbasedcom' Component={ClassBasedCom}/>
              <Route exact path='/functionalbasedcom' Component={FunctionalBAsedCom}/>
          </Routes>  
      </Router>
      </>
    
  );
}

export default App;
